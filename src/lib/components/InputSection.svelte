<script lang="ts">
	import type { Inputs, CrumbGoal, FermentationPhilosophy } from '$lib/calculator';
	import { cToF, fToC, recommendAutolyseMins } from '$lib/calculator';
	import { inputs, result, lang } from '$lib/store';
	import { translations } from '$lib/i18n';

	const t = $derived(translations[$lang]);

	let philosophyModalOpen = $state(false);

	const crumbGoals: CrumbGoal[] = ['Tight', 'Balanced', 'Open'];

	// Derived flour gram display
	let whiteFlourGrams = $derived(Math.round($inputs.totalFlourInputG * ($inputs.whitePct / 100)));
	let wwFlourGrams = $derived($inputs.totalFlourInputG - whiteFlourGrams);
	let wwPct = $derived(100 - $inputs.whitePct);

	// Auto salt display
	let autoSaltPct = $derived($result.formula.autoSaltPct);
	let autoSaltG = $derived(Math.round($result.formula.saltG));

	// Derived display values for temps (F/C toggle)
	let ambientDisplay = $derived.by(() => {
		if ($inputs.tempUnit === 'F') return Math.round(cToF($inputs.ambientTempC));
		return $inputs.ambientTempC;
	});

	let doughDisplay = $derived.by(() => {
		if ($inputs.doughTempC === null) return '';
		if ($inputs.tempUnit === 'F') return Math.round(cToF($inputs.doughTempC));
		return $inputs.doughTempC;
	});

	let fridgeDisplay = $derived.by(() => {
		if ($inputs.tempUnit === 'F') return Math.round(cToF($inputs.fridgeTempC));
		return $inputs.fridgeTempC;
	});

	function updateTemp(field: 'ambientTempC' | 'doughTempC' | 'fridgeTempC', displayVal: number) {
		const valC = $inputs.tempUnit === 'F' ? fToC(displayVal) : displayVal;
		inputs.update((prev) => {
			const next = { ...prev, [field]: valC };

			if (prev.autolyseOn && (field === 'ambientTempC' || field === 'doughTempC')) {
				return {
					...next,
					autolyseMins: recommendAutolyseMins(next.ambientTempC, next.doughTempC)
				};
			}

			return next;
		});
	}

	function updateField<K extends keyof Inputs>(field: K, value: Inputs[K]) {
		inputs.update((prev) => ({ ...prev, [field]: value }));
	}

	function toggleUnit() {
		inputs.update((prev) => ({ ...prev, tempUnit: prev.tempUnit === 'C' ? 'F' : 'C' }));
	}

	function onTotalFlourInput(e: Event) {
		const val = Math.max(0, parseFloat((e.target as HTMLInputElement).value) || 0);
		updateField('totalFlourInputG', val);
	}

	function onWhitePctInput(e: Event) {
		const val = clampPct(parseFloat((e.target as HTMLInputElement).value) || 0);
		updateField('whitePct', val);
	}

	function onAmbientInput(e: Event) {
		const val = parseFloat((e.target as HTMLInputElement).value);
		if (!isNaN(val)) updateTemp('ambientTempC', val);
	}

	function onDoughInput(e: Event) {
		const raw = (e.target as HTMLInputElement).value;
		if (raw === '') {
			inputs.update((prev) => {
				const next = { ...prev, doughTempC: null };
				if (!prev.autolyseOn) return next;

				return {
					...next,
					autolyseMins: recommendAutolyseMins(next.ambientTempC, next.doughTempC)
				};
			});
		} else {
			const val = parseFloat(raw);
			if (!isNaN(val)) updateTemp('doughTempC', val);
		}
	}

	function toggleAutolyse() {
		inputs.update((prev) => {
			const nextAutolyseOn = !prev.autolyseOn;
			if (!nextAutolyseOn) return { ...prev, autolyseOn: false };

			return {
				...prev,
				autolyseOn: true,
				autolyseMins: recommendAutolyseMins(prev.ambientTempC, prev.doughTempC)
			};
		});
	}

	function onFridgeTempInput(e: Event) {
		const val = parseFloat((e.target as HTMLInputElement).value);
		if (!isNaN(val)) updateTemp('fridgeTempC', val);
	}

	function clampPct(v: number) {
		return Math.max(0, Math.min(100, v));
	}

	const tempMin = $derived($inputs.tempUnit === 'F' ? 32 : 0);
	const tempMax = $derived($inputs.tempUnit === 'F' ? 120 : 50);
	const fridgeTempMin = $derived($inputs.tempUnit === 'F' ? 28 : -2);
	const fridgeTempMax = $derived($inputs.tempUnit === 'F' ? 50 : 10);
	const autolyseMinMins = 20;
	const autolyseMaxMins = 60;
	const autolyseProgressMax = autolyseMaxMins - autolyseMinMins;
	const autolyseProgressValue = $derived(
		Math.max(0, Math.min(autolyseProgressMax, $inputs.autolyseMins - autolyseMinMins))
	);
</script>

<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70 overflow-hidden">
	<!-- Header row with title and C/F toggle -->
	<div class="flex items-center justify-between px-5 pt-5 pb-3">
		<h2 class="text-base font-semibold text-base-content uppercase tracking-wide">{t.parameters}</h2>
		<button
			type="button"
			onclick={toggleUnit}
			class="btn btn-ghost btn-sm rounded-full border border-base-300 bg-base-100"
			aria-label="Toggle temperature unit"
		>
			<span class={$inputs.tempUnit === 'C' ? 'text-secondary font-semibold' : 'text-base-content/50'}>°C</span>
			<span class="text-base-content/30">/</span>
			<span class={$inputs.tempUnit === 'F' ? 'text-secondary font-semibold' : 'text-base-content/50'}>°F</span>
		</button>
	</div>

	<div class="px-5 pb-5 space-y-5">
		<!-- Total flour input -->
		<div class="form-control">
			<label for="total-flour" class="label">
				<span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.totalFlour}</span>
			</label>
			<input
				id="total-flour"
				type="number"
				min="0"
				step="50"
				value={$inputs.totalFlourInputG}
				oninput={onTotalFlourInput}
				class="input input-bordered w-full"
				placeholder="500"
			/>
		</div>

		<!-- White flour % slider -->
		<div>
			<div class="flex items-center justify-between mb-1.5">
				<span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.flourBlend}</span>
				<span class="text-xs font-semibold text-base-content/70">
					{$inputs.whitePct}% {t.white} / {wwPct}% {t.wholeWheat}
				</span>
			</div>
			<input
				type="range"
				min="0"
				max="100"
				step="5"
				value={$inputs.whitePct}
				oninput={onWhitePctInput}
				class="range range-secondary range-sm w-full"
			/>
			<div class="flex justify-between text-xs text-base-content/50 mt-1.5">
				<span class="tabular-nums">{t.white}: {whiteFlourGrams}g</span>
				<span class="tabular-nums">{t.wholeWheat}: {wwFlourGrams}g</span>
			</div>
		</div>

		<!-- Crumb goal -->
		<div>
			<p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2">{t.crumbGoal}</p>
			<div class="grid grid-cols-3 gap-2">
				{#each crumbGoals as goal}
					<button
						type="button"
						onclick={() => updateField('crumbGoal', goal)}
						class="btn btn-sm rounded-xl border-2 flex-col h-auto py-3 px-2
							{$inputs.crumbGoal === goal
								? 'btn-secondary border-secondary text-secondary-content'
								: 'btn-ghost border-base-300'}"
					>
						<span class="text-sm font-bold">{t.crumbGoalNames[goal]}</span>
					</button>
				{/each}
			</div>
			<p class="text-xs text-base-content/70 mt-2 leading-snug">{t.crumbDescriptions[$inputs.crumbGoal]}</p>
		</div>

		<!-- Fermentation philosophy -->
		<div>
			<div class="flex items-center gap-1.5 mb-2">
				<p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.fermentationPhilosophyLabel}</p>
				<button
					type="button"
					onclick={() => (philosophyModalOpen = true)}
					class="btn btn-ghost btn-xs btn-circle flex-shrink-0"
					aria-label="Learn about fermentation philosophy options"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
					</svg>
				</button>
			</div>
			<div class="grid grid-cols-2 gap-2">
			{#each (['Predictability', 'FlavorDevelopment'] as const) as philosophy}
				<button
					type="button"
					onclick={() => updateField('fermentationPhilosophy', philosophy)}
					class="btn btn-sm rounded-xl border-2 h-auto py-2.5 px-3
						{$inputs.fermentationPhilosophy === philosophy
							? 'btn-secondary border-secondary text-secondary-content'
							: 'btn-ghost border-base-300'}"
				>
					{philosophy === 'Predictability' ? t.philosophyPredictability : t.philosophyFlavorDev}
				</button>
			{/each}
		</div>
			<p class="text-xs text-base-content/70 mt-2 leading-snug">
				{$inputs.fermentationPhilosophy === 'Predictability' ? t.philosophyPredictabilityDesc : t.philosophyFlavorDevDesc}
			</p>
		</div>

		<!-- Proof method -->
		<div>
			<p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2">{t.proofMethod}</p>
			<div class="grid grid-cols-2 gap-2">
				{#each (['Room', 'ColdRetard'] as const) as method}
					<button
						type="button"
						onclick={() => updateField('proofMethod', method)}
						class="btn btn-sm rounded-xl border-2 h-auto py-2.5 px-3
							{$inputs.proofMethod === method
								? 'btn-secondary border-secondary text-secondary-content'
								: 'btn-ghost border-base-300'}"
					>
						{method === 'Room' ? t.roomTemp : t.coldRetard}
					</button>
				{/each}
			</div>
		</div>

		<!-- Fridge temp (only for cold retard) -->
		{#if $inputs.proofMethod === 'ColdRetard'}
			<div class="form-control">
				<label for="fridge-temp" class="label">
					<span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.fridgeTemp} (°{$inputs.tempUnit})</span>
				</label>
				<input
					id="fridge-temp"
					type="number"
					min={fridgeTempMin}
					max={fridgeTempMax}
					step="0.5"
					value={fridgeDisplay}
					oninput={onFridgeTempInput}
					class="input input-bordered w-full"
				/>
			</div>
		{/if}

		<!-- Schedule mode -->
		<div>
			<p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2">{t.scheduleMode}</p>
			<div class="grid grid-cols-2 gap-2">
				{#each (['relative', 'clock'] as const) as mode}
					<button
						type="button"
						onclick={() => updateField('scheduleMode', mode)}
						class="btn btn-sm rounded-xl border-2 h-auto py-2.5 px-3
							{$inputs.scheduleMode === mode
								? 'btn-secondary border-secondary text-secondary-content'
								: 'btn-ghost border-base-300'}"
					>
						{mode === 'relative' ? t.relative : t.clock}
					</button>
				{/each}
			</div>
		</div>

		<!-- Start time (clock mode) -->
		{#if $inputs.scheduleMode === 'clock'}
			<div class="form-control">
				<label for="start-time" class="label">
					<span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.startTime}</span>
				</label>
				<input
					id="start-time"
					type="time"
					value={$inputs.startTime ?? '08:00'}
					oninput={(e) => updateField('startTime', (e.target as HTMLInputElement).value || null)}
					class="input input-bordered w-full"
				/>
			</div>
		{/if}

		<!-- Advanced options (always visible) -->
		<div class="border-t border-base-200 pt-4 space-y-4">
			<!-- Ambient temp -->
			<div class="form-control">
				<label for="ambient-temp" class="label">
					<span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.ambientTemp} (°{$inputs.tempUnit})</span>
				</label>
				<input
					id="ambient-temp"
					type="number"
					min={tempMin}
					max={tempMax}
					step="0.5"
					value={ambientDisplay}
					oninput={onAmbientInput}
					class="input input-bordered w-full"
				/>
			</div>

			<!-- Dough temp (optional) -->
			<div class="form-control">
				<label for="dough-temp" class="label">
					<span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide">
						{t.doughTemp} (°{$inputs.tempUnit}) <span class="font-normal text-base-content/50">{t.optional}</span>
					</span>
				</label>
				<input
					id="dough-temp"
					type="number"
					min={tempMin}
					max={tempMax}
					step="0.5"
					value={doughDisplay}
					oninput={onDoughInput}
					placeholder={t.leaveBlankAmbient}
					class="input input-bordered w-full placeholder:text-base-content/30"
				/>
			</div>

			<!-- Salt — auto-computed with optional override -->
			<div>
				<div class="flex items-center justify-between mb-1.5">
					<span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.salt}</span>
					<div class="flex items-center gap-2">
						<span class="text-xs text-base-content/50">
							{#if $inputs.saltAutoCalc}
								{t.saltAutoLabel(autoSaltPct.toFixed(2), String(autoSaltG))}
							{:else}
								{t.saltManual}
							{/if}
						</span>
						<input
							type="checkbox"
							class="toggle toggle-secondary toggle-sm"
							checked={!$inputs.saltAutoCalc}
							onchange={() => updateField('saltAutoCalc', !$inputs.saltAutoCalc)}
							role="switch"
							aria-checked={!$inputs.saltAutoCalc}
							aria-label="Override salt"
						/>
						<span class="text-xs text-base-content/70">{t.saltOverride}</span>
					</div>
				</div>
				{#if !$inputs.saltAutoCalc}
					<div class="form-control">
						<input
							id="salt-pct"
							type="number"
							min="1"
							max="3"
							step="0.1"
							value={$inputs.saltPct}
							oninput={(e) => updateField('saltPct', parseFloat((e.target as HTMLInputElement).value) || 2)}
							class="input input-bordered w-full"
							placeholder="2.0"
						/>
					</div>
					<p class="text-xs text-base-content/50 mt-1">{t.saltBakersPct}</p>
				{/if}
			</div>

			<!-- Starter hydration % -->
			<div class="form-control">
				<label for="starter-hyd" class="label">
					<span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.starterHydration}</span>
				</label>
				<input
					id="starter-hyd"
					type="number"
					min="50"
					max="200"
					step="5"
					value={$inputs.starterHydrationPct}
					oninput={(e) => updateField('starterHydrationPct', parseFloat((e.target as HTMLInputElement).value) || 100)}
					class="input input-bordered w-full"
				/>
			</div>

			<!-- Autolyse toggle + slider -->
			<div>
				<div class="flex items-center justify-between mb-2">
					<span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.autolyse}</span>
						<input
							type="checkbox"
							class="toggle toggle-secondary"
							checked={$inputs.autolyseOn}
							onchange={toggleAutolyse}
							role="switch"
							aria-checked={$inputs.autolyseOn}
							aria-label="Toggle autolyse"
						/>
				</div>
				{#if $inputs.autolyseOn}
					<div>
						<div class="flex justify-between text-xs text-base-content/70 mb-1">
							<span>{t.duration}</span>
							<span class="font-semibold text-base-content">{$inputs.autolyseMins} min</span>
						</div>
						<progress
							class="progress progress-secondary progress-sm w-full"
							value={autolyseProgressValue}
							max={autolyseProgressMax}
							aria-label="Autolyse duration progress"
						></progress>
						<div class="flex justify-between text-xs text-base-content/50 mt-0.5">
							<span>{autolyseMinMins} min</span>
							<span>{autolyseMaxMins} min</span>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<!-- Fermentation Philosophy info modal -->
{#if philosophyModalOpen}
	<div class="modal modal-open">
		<!-- Backdrop -->
		<button
			type="button"
			class="modal-backdrop"
			onclick={() => (philosophyModalOpen = false)}
			aria-label="Close fermentation philosophy modal"
		></button>

		<!-- Modal box -->
		<div
			class="modal-box w-full max-w-sm p-0 overflow-hidden"
			role="dialog"
			aria-modal="true"
			aria-labelledby="philosophy-modal-title"
		>
			<!-- Header -->
			<div class="flex items-center justify-between px-5 py-4 border-b border-base-200">
				<h2 id="philosophy-modal-title" class="text-base font-semibold text-base-content">{t.philosophyModalTitle}</h2>
				<button
					type="button"
					onclick={() => (philosophyModalOpen = false)}
					class="btn btn-ghost btn-sm btn-circle"
					aria-label="Close"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Body -->
			<div class="px-5 py-4 space-y-4">
				<div>
					<p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1">{t.philosophyPredictability}</p>
					<p class="text-sm text-base-content/70 leading-relaxed">{t.philosophyModalPredictabilityBody}</p>
				</div>
				<div class="border-t border-base-200 pt-4">
					<p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1">{t.philosophyFlavorDev}</p>
					<p class="text-sm text-base-content/70 leading-relaxed">{t.philosophyModalFlavorDevBody}</p>
				</div>
			</div>

			<!-- Footer -->
			<div class="px-5 pb-5">
				<button
					type="button"
					onclick={() => (philosophyModalOpen = false)}
					class="btn btn-primary w-full"
				>
					{t.done}
				</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	// No extra styles needed — daisyUI handles range and toggle styling
</style>
