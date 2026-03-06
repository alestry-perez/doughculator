<script lang="ts">
	import type { Inputs, CrumbGoal, FermentationPhilosophy } from '$lib/calculator';
	import { cToF, fToC } from '$lib/calculator';
	import { inputs, result, lang } from '$lib/store';
	import { translations } from '$lib/i18n';

	const t = $derived(translations[$lang]);

	let advancedOpen = $state(false);
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
		inputs.update((prev) => ({ ...prev, [field]: valC }));
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
			updateField('doughTempC', null);
		} else {
			const val = parseFloat(raw);
			if (!isNaN(val)) updateTemp('doughTempC', val);
		}
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
</script>

<div class="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 overflow-hidden">
	<!-- Header row with title and C/F toggle -->
	<div class="flex items-center justify-between px-5 pt-5 pb-3">
		<h2 class="text-base font-semibold text-stone-700 uppercase tracking-wide">{t.parameters}</h2>
		<button
			type="button"
			onclick={toggleUnit}
			class="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors"
			aria-label="Toggle temperature unit"
		>
			<span class:text-amber-600={$inputs.tempUnit === 'C'}>°C</span>
			<span class="text-stone-300">/</span>
			<span class:text-amber-600={$inputs.tempUnit === 'F'}>°F</span>
		</button>
	</div>

	<div class="px-5 pb-5 space-y-5">
		<!-- Total flour input -->
		<div>
			<label for="total-flour" class="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
				{t.totalFlour}
			</label>
			<input
				id="total-flour"
				type="number"
				min="0"
				step="50"
				value={$inputs.totalFlourInputG}
				oninput={onTotalFlourInput}
				class="w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
				placeholder="500"
			/>
		</div>

		<!-- White flour % slider -->
		<div>
			<div class="flex items-center justify-between mb-1.5">
				<span class="text-xs font-semibold text-stone-500 uppercase tracking-wide">{t.flourBlend}</span>
				<span class="text-xs font-semibold text-stone-600">
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
				class="w-full h-2 bg-stone-200 rounded-full accent-amber-500 cursor-pointer"
			/>
			<div class="flex justify-between text-xs text-stone-400 mt-1.5">
				<span class="tabular-nums">{t.white}: {whiteFlourGrams}g</span>
				<span class="tabular-nums">{t.wholeWheat}: {wwFlourGrams}g</span>
			</div>
		</div>

		<!-- Crumb goal -->
		<div>
			<p class="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">{t.crumbGoal}</p>
			<div class="grid grid-cols-3 gap-2">
				{#each crumbGoals as goal}
					<button
						type="button"
						onclick={() => updateField('crumbGoal', goal)}
						class="flex flex-col items-center rounded-xl border-2 px-2 py-3 text-center transition-all"
						class:border-amber-400={$inputs.crumbGoal === goal}
						class:bg-amber-50={$inputs.crumbGoal === goal}
						class:text-amber-800={$inputs.crumbGoal === goal}
						class:border-stone-200={$inputs.crumbGoal !== goal}
						class:text-stone-600={$inputs.crumbGoal !== goal}
						class:hover:bg-stone-50={$inputs.crumbGoal !== goal}
					>
						<span class="text-sm font-bold">{t.crumbGoalNames[goal]}</span>
					</button>
				{/each}
			</div>
			<p class="text-xs text-stone-500 mt-2 leading-snug">{t.crumbDescriptions[$inputs.crumbGoal]}</p>
		</div>

			<!-- Fermentation philosophy -->
			<div>
				<div class="flex items-center gap-1.5 mb-2">
					<p class="text-xs font-semibold text-stone-500 uppercase tracking-wide">{t.fermentationPhilosophyLabel}</p>
					<button
						type="button"
						onclick={() => (philosophyModalOpen = true)}
						class="flex items-center justify-center w-[1.3rem] h-[1.3rem] rounded-full text-stone-400 hover:text-amber-600 hover:bg-amber-50 transition-colors flex-shrink-0"
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
						class="rounded-xl border-2 px-3 py-2.5 text-sm font-semibold transition-all"
						class:border-amber-400={$inputs.fermentationPhilosophy === philosophy}
						class:bg-amber-50={$inputs.fermentationPhilosophy === philosophy}
						class:text-amber-800={$inputs.fermentationPhilosophy === philosophy}
						class:border-stone-200={$inputs.fermentationPhilosophy !== philosophy}
						class:text-stone-600={$inputs.fermentationPhilosophy !== philosophy}
						class:hover:bg-stone-50={$inputs.fermentationPhilosophy !== philosophy}
					>
						{philosophy === 'Predictability' ? t.philosophyPredictability : t.philosophyFlavorDev}
					</button>
				{/each}
			</div>
				<p class="text-xs text-stone-500 mt-2 leading-snug">
					{$inputs.fermentationPhilosophy === 'Predictability' ? t.philosophyPredictabilityDesc : t.philosophyFlavorDevDesc}
				</p>
			</div>

			<!-- Proof method -->
			<div>
				<p class="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">{t.proofMethod}</p>
				<div class="grid grid-cols-2 gap-2">
					{#each (['Room', 'ColdRetard'] as const) as method}
						<button
							type="button"
							onclick={() => updateField('proofMethod', method)}
							class="rounded-xl border-2 px-3 py-2.5 text-sm font-semibold transition-all"
							class:border-amber-400={$inputs.proofMethod === method}
							class:bg-amber-50={$inputs.proofMethod === method}
							class:text-amber-800={$inputs.proofMethod === method}
							class:border-stone-200={$inputs.proofMethod !== method}
							class:text-stone-600={$inputs.proofMethod !== method}
							class:hover:bg-stone-50={$inputs.proofMethod !== method}
						>
							{method === 'Room' ? t.roomTemp : t.coldRetard}
						</button>
					{/each}
				</div>
			</div>

			<!-- Fridge temp (only for cold retard) -->
			{#if $inputs.proofMethod === 'ColdRetard'}
				<div>
					<label for="fridge-temp" class="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
						{t.fridgeTemp} (°{$inputs.tempUnit})
					</label>
					<input
						id="fridge-temp"
						type="number"
						min={fridgeTempMin}
						max={fridgeTempMax}
						step="0.5"
						value={fridgeDisplay}
						oninput={onFridgeTempInput}
						class="w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
					/>
				</div>
			{/if}

			<!-- Schedule mode -->
			<div>
				<p class="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">{t.scheduleMode}</p>
				<div class="grid grid-cols-2 gap-2">
					{#each (['relative', 'clock'] as const) as mode}
						<button
							type="button"
							onclick={() => updateField('scheduleMode', mode)}
							class="rounded-xl border-2 px-3 py-2.5 text-sm font-semibold transition-all"
							class:border-amber-400={$inputs.scheduleMode === mode}
							class:bg-amber-50={$inputs.scheduleMode === mode}
							class:text-amber-800={$inputs.scheduleMode === mode}
							class:border-stone-200={$inputs.scheduleMode !== mode}
							class:text-stone-600={$inputs.scheduleMode !== mode}
							class:hover:bg-stone-50={$inputs.scheduleMode !== mode}
						>
							{mode === 'relative' ? t.relative : t.clock}
						</button>
					{/each}
				</div>
			</div>

			<!-- Start time (clock mode) -->
			{#if $inputs.scheduleMode === 'clock'}
				<div>
					<label for="start-time" class="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
						{t.startTime}
					</label>
					<input
						id="start-time"
						type="time"
						value={$inputs.startTime ?? '08:00'}
						oninput={(e) => updateField('startTime', (e.target as HTMLInputElement).value || null)}
						class="w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
					/>
				</div>
			{/if}

			<!-- Advanced collapsible -->
			<div class="border-t border-stone-100 pt-4">
			<button
				type="button"
				onclick={() => (advancedOpen = !advancedOpen)}
				class="flex items-center justify-between w-full text-sm font-semibold text-stone-600 hover:text-stone-800 transition-colors"
			>
				<span>{t.advancedOptions}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 transition-transform duration-200"
					class:rotate-180={advancedOpen}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			{#if advancedOpen}
				<div class="mt-4 space-y-4">
					<!-- Ambient temp -->
					<div>
						<label for="ambient-temp" class="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
							{t.ambientTemp} (°{$inputs.tempUnit})
						</label>
						<input
							id="ambient-temp"
							type="number"
							min={tempMin}
							max={tempMax}
							step="0.5"
							value={ambientDisplay}
							oninput={onAmbientInput}
							class="w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
						/>
					</div>

					<!-- Dough temp (optional) -->
					<div>
						<label for="dough-temp" class="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
							{t.doughTemp} (°{$inputs.tempUnit}) <span class="font-normal text-stone-400">{t.optional}</span>
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
							class="w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder-stone-300"
						/>
					</div>

					<!-- Salt — auto-computed with optional override -->
					<div>
						<div class="flex items-center justify-between mb-1.5">
							<span class="text-xs font-semibold text-stone-500 uppercase tracking-wide">{t.salt}</span>
							<div class="flex items-center gap-2">
								<span class="text-xs text-stone-400">
									{#if $inputs.saltAutoCalc}
										{t.saltAutoLabel(autoSaltPct.toFixed(2), String(autoSaltG))}
									{:else}
										{t.saltManual}
									{/if}
								</span>
								<button
									type="button"
									onclick={() => updateField('saltAutoCalc', !$inputs.saltAutoCalc)}
									class="relative inline-flex h-5 w-9 items-center rounded-full transition-colors flex-shrink-0"
									class:bg-amber-400={!$inputs.saltAutoCalc}
									class:bg-stone-200={$inputs.saltAutoCalc}
									role="switch"
									aria-checked={!$inputs.saltAutoCalc}
									aria-label="Override salt"
								>
									<span
										class="inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform"
										class:translate-x-4={!$inputs.saltAutoCalc}
										class:translate-x-0.5={$inputs.saltAutoCalc}
									></span>
								</button>
								<span class="text-xs text-stone-500">{t.saltOverride}</span>
							</div>
						</div>
						{#if !$inputs.saltAutoCalc}
							<input
								id="salt-pct"
								type="number"
								min="1"
								max="3"
								step="0.1"
								value={$inputs.saltPct}
								oninput={(e) => updateField('saltPct', parseFloat((e.target as HTMLInputElement).value) || 2)}
								class="w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
								placeholder="2.0"
							/>
							<p class="text-xs text-stone-400 mt-1">{t.saltBakersPct}</p>
						{/if}
					</div>

					<!-- Starter hydration % -->
					<div>
						<label for="starter-hyd" class="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">
							{t.starterHydration}
						</label>
						<input
							id="starter-hyd"
							type="number"
							min="50"
							max="200"
							step="5"
							value={$inputs.starterHydrationPct}
							oninput={(e) => updateField('starterHydrationPct', parseFloat((e.target as HTMLInputElement).value) || 100)}
							class="w-full rounded-xl border border-stone-200 px-3 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
						/>
					</div>

					<!-- Autolyse toggle + slider -->
					<div>
						<div class="flex items-center justify-between mb-2">
							<span class="text-xs font-semibold text-stone-500 uppercase tracking-wide">{t.autolyse}</span>
							<button
								type="button"
								onclick={() => updateField('autolyseOn', !$inputs.autolyseOn)}
								class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
								class:bg-amber-400={$inputs.autolyseOn}
								class:bg-stone-200={!$inputs.autolyseOn}
								role="switch"
								aria-checked={$inputs.autolyseOn}
								aria-label="Toggle autolyse"
							>
								<span
									class="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform"
									class:translate-x-6={$inputs.autolyseOn}
									class:translate-x-1={!$inputs.autolyseOn}
								></span>
							</button>
						</div>
						{#if $inputs.autolyseOn}
							<div>
								<div class="flex justify-between text-xs text-stone-500 mb-1">
									<span>{t.duration}</span>
									<span class="font-semibold text-stone-700">{$inputs.autolyseMins} min</span>
								</div>
								<input
									type="range"
									min="20"
									max="60"
									step="5"
									value={$inputs.autolyseMins}
									oninput={(e) => updateField('autolyseMins', parseInt((e.target as HTMLInputElement).value))}
									class="w-full h-2 bg-stone-200 rounded-full accent-amber-500 cursor-pointer"
								/>
								<div class="flex justify-between text-xs text-stone-400 mt-0.5">
									<span>20 min</span>
									<span>60 min</span>
								</div>
							</div>
						{/if}
					</div>

					</div>
				{/if}
			</div>
	</div>
</div>

<!-- Fermentation Philosophy info modal -->
{#if philosophyModalOpen}
	<!-- Backdrop -->
	<button
		type="button"
		class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
		onclick={() => (philosophyModalOpen = false)}
		aria-label="Close fermentation philosophy modal"
	></button>

	<!-- Modal panel -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center px-4"
		role="dialog"
		aria-modal="true"
		aria-labelledby="philosophy-modal-title"
	>
		<div class="w-full max-w-sm rounded-2xl bg-white shadow-xl ring-1 ring-stone-200 overflow-hidden">
			<!-- Header -->
			<div class="flex items-center justify-between px-5 py-4 border-b border-stone-100">
				<h2 id="philosophy-modal-title" class="text-base font-semibold text-stone-800">{t.philosophyModalTitle}</h2>
				<button
					type="button"
					onclick={() => (philosophyModalOpen = false)}
					class="text-stone-400 hover:text-stone-700 transition-colors p-1 rounded-lg hover:bg-stone-100"
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
					<p class="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">{t.philosophyPredictability}</p>
					<p class="text-sm text-stone-600 leading-relaxed">{t.philosophyModalPredictabilityBody}</p>
				</div>
				<div class="border-t border-stone-100 pt-4">
					<p class="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">{t.philosophyFlavorDev}</p>
					<p class="text-sm text-stone-600 leading-relaxed">{t.philosophyModalFlavorDevBody}</p>
				</div>
			</div>

			<!-- Footer -->
			<div class="px-5 pb-5">
				<button
					type="button"
					onclick={() => (philosophyModalOpen = false)}
					class="w-full py-2.5 rounded-xl bg-stone-100 text-stone-700 text-sm font-semibold hover:bg-stone-200 transition-colors"
				>
					{t.done}
				</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	input[type='range'] {
		-webkit-appearance: none;
		appearance: none;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: #f59e0b;
		cursor: pointer;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	}

	input[type='range']::-moz-range-thumb {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: #f59e0b;
		cursor: pointer;
		border: none;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	}
</style>
