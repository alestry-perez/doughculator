<script lang="ts">
	import type { Inputs, CrumbGoal, FermentationPhilosophy, FlourType, FlourBlendEntry } from '$lib/calculator';
	import { cToF, fToC, recommendAutolyseMins, WHOLE_GRAIN_FLOURS, ALL_FLOUR_TYPES } from '$lib/calculator';
	import { inputs, result, lang } from '$lib/store';
	import { translations } from '$lib/i18n';
	import WarningsCard from './WarningsCard.svelte';
	import CrumbTight from './icons/CrumbTight.svelte';
	import CrumbBalanced from './icons/CrumbBalanced.svelte';
	import CrumbOpen from './icons/CrumbOpen.svelte';

	const t = $derived(translations[$lang]);

	let philosophyModalOpen = $state(false);
	let autolyseModalOpen = $state(false);
	let proofMethodModalOpen = $state(false);

	const crumbGoals: CrumbGoal[] = ['Tight', 'Balanced', 'Open'];
	const crumbIcons: Record<CrumbGoal, typeof CrumbTight> = {
		Tight: CrumbTight,
		Balanced: CrumbBalanced,
		Open: CrumbOpen,
	};

	// Flour blend helpers
	let blendTotal = $derived($inputs.flourBlend.reduce((s, e) => s + e.pct, 0));
	let blendValid = $derived(Math.round(blendTotal) === 100);

	function isFlourSelected(type: FlourType): boolean {
		return $inputs.flourBlend.some(e => e.type === type);
	}

	function toggleFlour(type: FlourType) {
		inputs.update(prev => {
			const existing = prev.flourBlend.find(e => e.type === type);
			if (existing) {
				// Can't remove the last flour
				if (prev.flourBlend.length <= 1) return prev;
				const remaining = prev.flourBlend.filter(e => e.type !== type);
				const totalOther = remaining.reduce((s, e) => s + e.pct, 0);
				let redistributed: FlourBlendEntry[];
				if (totalOther > 0) {
					const scale = 100 / totalOther;
					redistributed = remaining.map(e => ({ ...e, pct: Math.round(e.pct * scale) }));
				} else {
					const each = Math.floor(100 / remaining.length);
					redistributed = remaining.map((e, i) => ({
						...e,
						pct: i === 0 ? each + (100 - each * remaining.length) : each
					}));
				}
				// Fix rounding drift
				const sum = redistributed.reduce((s, e) => s + e.pct, 0);
				if (sum !== 100 && redistributed.length > 0) {
					redistributed[0] = { ...redistributed[0], pct: redistributed[0].pct + (100 - sum) };
				}
				return { ...prev, flourBlend: redistributed };
			} else {
				// Add: give new flour an equal share, scale others down
				const newCount = prev.flourBlend.length + 1;
				const newPct = Math.round(100 / newCount);
				const scale = (100 - newPct) / 100;
				const updated: FlourBlendEntry[] = prev.flourBlend.map(e => ({ ...e, pct: Math.round(e.pct * scale) }));
				updated.push({ type, pct: newPct });
				const sum = updated.reduce((s, e) => s + e.pct, 0);
				if (sum !== 100 && updated.length > 0) {
					updated[0] = { ...updated[0], pct: updated[0].pct + (100 - sum) };
				}
				return { ...prev, flourBlend: updated };
			}
		});
	}

	function updateFlourPct(type: FlourType, raw: string) {
		const val = Math.max(0, Math.min(100, parseFloat(raw) || 0));
		inputs.update(prev => {
			const others = prev.flourBlend.filter(e => e.type !== type);
			const otherTotal = others.reduce((s, e) => s + e.pct, 0);
			const remaining = 100 - val;
			let updated: typeof prev.flourBlend;
			if (others.length === 0) {
				updated = prev.flourBlend.map(e => ({ ...e, pct: 100 }));
			} else if (otherTotal === 0) {
				const share = Math.floor(remaining / others.length);
				const leftover = remaining - share * others.length;
				updated = prev.flourBlend.map((e, i) => {
					if (e.type === type) return { ...e, pct: val };
					const idx = others.indexOf(e);
					return { ...e, pct: share + (idx === 0 ? leftover : 0) };
				});
			} else {
				const scale = remaining / otherTotal;
				const scaled = others.map(e => ({ ...e, pct: e.pct * scale }));
				const floored = scaled.map(e => ({ ...e, pct: Math.floor(e.pct) }));
				const flooredSum = floored.reduce((s, e) => s + e.pct, 0);
				let leftover = remaining - flooredSum;
				// Distribute rounding remainder to flours with largest fractional parts
				const fracs = scaled.map((e, i) => ({ i, frac: e.pct - Math.floor(e.pct) }))
					.sort((a, b) => b.frac - a.frac);
				for (let j = 0; j < leftover; j++) floored[fracs[j].i].pct += 1;
				const otherMap = new Map(floored.map(e => [e.type, e.pct]));
				updated = prev.flourBlend.map(e =>
					e.type === type ? { ...e, pct: val } : { ...e, pct: otherMap.get(e.type) ?? e.pct }
				);
			}
			return { ...prev, flourBlend: updated };
		});
	}

	function normalizeBlend() {
		inputs.update(prev => {
			const total = prev.flourBlend.reduce((s, e) => s + e.pct, 0);
			if (total === 0 || total === 100) return prev;
			const scale = 100 / total;
			const normalized = prev.flourBlend.map(e => ({ ...e, pct: Math.round(e.pct * scale) }));
			const sum = normalized.reduce((s, e) => s + e.pct, 0);
			if (sum !== 100 && normalized.length > 0) {
				normalized[0] = { ...normalized[0], pct: normalized[0].pct + (100 - sum) };
			}
			return { ...prev, flourBlend: normalized };
		});
	}

	const flourColors: Record<string, string> = {
		BreadFlour: '#F59E0B',
		AllPurpose: '#60A5FA',
		WholeWheat: '#92400E',
		Rye: '#059669',
		Spelt: '#7C3AED',
		Einkorn: '#F43F5E'
	};

	// Donut ring geometry
	const RING_RADIUS = 80;
	const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

	let ringSegments = $derived.by(() => {
		let offset = 0;
		return $inputs.flourBlend.map(entry => {
			const segLength = (entry.pct / 100) * RING_CIRCUMFERENCE;
			const segment = {
				type: entry.type,
				color: flourColors[entry.type],
				dasharray: `${segLength} ${RING_CIRCUMFERENCE - segLength}`,
				dashoffset: -offset,
			};
			offset += segLength;
			return segment;
		});
	});

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

	function onAmbientInput(e: Event) {
		const input = e.target as HTMLInputElement;
		let val = parseFloat(input.value);
		if (!isNaN(val)) {
			val = Math.min(tempMax, Math.max(tempMin, val));
			updateTemp('ambientTempC', val);
		}
	}

	function onDoughInput(e: Event) {
		const input = e.target as HTMLInputElement;
		const raw = input.value;
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
			let val = parseFloat(raw);
			if (!isNaN(val)) {
				val = Math.min(tempMax, Math.max(tempMin, val));
				updateTemp('doughTempC', val);
			}
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
		let val = parseFloat((e.target as HTMLInputElement).value);
		if (!isNaN(val)) {
			val = Math.min(fridgeTempMax, Math.max(fridgeTempMin, val));
			updateTemp('fridgeTempC', val);
		}
	}

	function clampPct(v: number) {
		return Math.max(0, Math.min(100, v));
	}

	const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

	function trapFocus(node: HTMLElement, open: boolean) {
		if (!open) return;
		const focusables = Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE));
		if (focusables.length) focusables[0].focus();

		function onKeyDown(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				philosophyModalOpen = false;
				autolyseModalOpen = false;
				proofMethodModalOpen = false;
				return;
			}
			if (e.key !== 'Tab') return;
			const first = focusables[0];
			const last = focusables[focusables.length - 1];
			if (e.shiftKey) {
				if (document.activeElement === first) { e.preventDefault(); last.focus(); }
			} else {
				if (document.activeElement === last) { e.preventDefault(); first.focus(); }
			}
		}
		node.addEventListener('keydown', onKeyDown);
		return { destroy() { node.removeEventListener('keydown', onKeyDown); } };
	}

	function useTrapFocus(node: HTMLElement) {
		return trapFocus(node, true);
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
	<!-- Header -->
	<div class="px-5 pt-5 pb-3">
		<h2 class="text-base font-semibold text-base-content uppercase tracking-wide">{t.parameters}</h2>
	</div>

	<div class="px-5 pb-5 space-y-5">
		<!-- Flour Donut Ring with editable center -->
		<div class="flex flex-col items-center">
			<div class="relative w-44 h-44">
				<svg viewBox="0 0 200 200" class="w-full h-full">
					<!-- Background track -->
					<circle cx="100" cy="100" r={RING_RADIUS}
						fill="none" class="stroke-base-300/30" stroke-width="18" />
					<!-- Flour segments -->
					{#each ringSegments as seg (seg.type)}
						<circle cx="100" cy="100" r={RING_RADIUS}
							fill="none"
							stroke={seg.color}
							stroke-width="18"
							stroke-dasharray={seg.dasharray}
							stroke-dashoffset={seg.dashoffset}
							stroke-linecap="butt"
							transform="rotate(-90 100 100)"
							class="transition-all duration-300"
						/>
					{/each}
				</svg>
				<!-- Editable center overlay -->
				<div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
					<div class="flex items-baseline pointer-events-auto">
						<input
							id="total-flour"
							type="number"
							min="0"
							step="50"
							value={$inputs.totalFlourInputG}
							oninput={onTotalFlourInput}
							class="w-28 bg-transparent border-none text-center text-3xl font-bold text-base-content focus:outline-none tabular-nums [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
							placeholder="500"
						/>
						<span class="text-lg font-bold text-base-content/70 -ml-1">g</span>
					</div>
					<span class="text-xs text-base-content/50">{t.totalFlour}</span>
				</div>
			</div>
			<!-- Compact flour legend -->
			{#if $inputs.flourBlend.length > 1}
				<div class="flex flex-wrap justify-center gap-x-3 gap-y-0.5 mt-1">
					{#each $inputs.flourBlend as entry (entry.type)}
						<span class="flex items-center gap-1 text-xs text-base-content/50 tabular-nums">
							<span class="inline-block w-2 h-2 rounded-full flex-shrink-0" style="background-color: {flourColors[entry.type]}"></span>
							{t.flourTypes[entry.type]}: {Math.round($inputs.totalFlourInputG * entry.pct / 100)}g
						</span>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Flour Selection -->
		<div>
			<span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.flourSelection}</span>

			<!-- Flour type toggle grid -->
			<div class="grid grid-cols-3 gap-2 mt-2">
				{#each ALL_FLOUR_TYPES as flourType}
					<button
						type="button"
						onclick={() => toggleFlour(flourType)}
						class="btn btn-sm rounded-xl border-2 h-auto py-2 px-1 text-xs
							{isFlourSelected(flourType)
								? 'btn-secondary border-secondary text-secondary-content'
								: 'btn-ghost border-base-300'}"
					>
						{t.flourTypes[flourType]}
					</button>
				{/each}
			</div>

			<!-- Selected flour percentage inputs (only shown for multi-flour blends) -->
			{#if $inputs.flourBlend.length > 1}
				<div class="mt-3 space-y-2">
					{#each $inputs.flourBlend as entry (entry.type)}
						<div class="flex items-center gap-2">
							<span
								class="inline-block w-3 h-3 rounded-full flex-shrink-0"
								style="background-color: {flourColors[entry.type]}"
							></span>
							<span class="text-xs text-base-content/70 flex-1 min-w-0 truncate">{t.flourTypes[entry.type]}</span>
							<div class="flex items-center gap-2 flex-1">
								<input
									type="range"
									min="0"
									max="100"
									step="1"
									value={entry.pct}
									oninput={(e) => updateFlourPct(entry.type, (e.target as HTMLInputElement).value)}
									class="range range-sm range-secondary flex-1"
								/>
								<input
									type="number"
									min="0"
									max="100"
									step="1"
									value={Math.round(entry.pct)}
									onchange={(e) => updateFlourPct(entry.type, (e.target as HTMLInputElement).value)}
									class="input input-xs w-14 text-right tabular-nums"
								/>
								<span class="text-xs text-base-content/70">%</span>
							</div>
						</div>
					{/each}
				</div>

				<!-- Blend total indicator -->
				<div class="flex items-center justify-between mt-2">
					<span class="text-xs text-base-content/50">{t.blendTotal}: <span class="font-semibold tabular-nums {blendValid ? 'text-success' : 'text-error'}">{Math.round(blendTotal)}%</span></span>
					{#if !blendValid}
						<button
							type="button"
							onclick={normalizeBlend}
							class="btn btn-xs btn-ghost text-secondary border border-secondary/30"
						>
							{t.blendNormalize}
						</button>
					{/if}
				</div>

			{/if}
		</div>

		<!-- Temperatures — side by side -->
		<div>
			<div class="flex items-center justify-between mb-2">
				<span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.temperatures}</span>
				<button
					type="button"
					onclick={toggleUnit}
					class="btn btn-ghost btn-xs rounded-full border border-base-300 bg-base-100"
					aria-label={t.ariaLabels.toggleTempUnit}
				>
					<span class={$inputs.tempUnit === 'C' ? 'text-secondary font-semibold' : 'text-base-content/50'}>°C</span>
					<span class="text-base-content/30">/</span>
					<span class={$inputs.tempUnit === 'F' ? 'text-secondary font-semibold' : 'text-base-content/50'}>°F</span>
				</button>
			</div>
			<div class="grid grid-cols-2 gap-3">
				<div class="form-control">
					<label for="ambient-temp" class="label py-1">
						<span class="label-text text-xs text-base-content/70">{t.kitchenTemp}</span>
					</label>
					<input
						id="ambient-temp"
						type="number"
						min={tempMin}
						max={tempMax}
						step="0.5"
						value={ambientDisplay}
						oninput={onAmbientInput}
						class="input border-0 border-b-2 border-base-300 rounded-none focus:border-secondary focus:outline-none bg-transparent w-full"
					/>
				</div>
				<div class="form-control">
					<label for="dough-temp" class="label py-1">
						<span class="label-text text-xs text-base-content/70">
							{t.doughTemp} <span class="text-base-content/40">{t.optional}</span>
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
						class="input border-0 border-b-2 border-base-300 rounded-none focus:border-secondary focus:outline-none bg-transparent w-full placeholder:text-base-content/30"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Warnings & Guidance inline after kitchen temp -->
	{#if $inputs.totalFlourInputG > 0}
		<div class="px-5 pb-3">
			<WarningsCard warnings={$result.warnings} />
		</div>
	{/if}

	<!-- Tier 2: Baking Profile (always visible) -->
	<div class="border-t border-base-200">
		<div class="px-5 py-3">
			<span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.bakingProfile}</span>
		</div>
		<div class="px-5 pb-5 space-y-5">
			<!-- Crumb goal -->
			<div>
				<p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2">{t.crumbGoal}</p>
				<div class="grid grid-cols-3 gap-2">
					{#each crumbGoals as goal}
						{@const Icon = crumbIcons[goal]}
						<button
							type="button"
							onclick={() => updateField('crumbGoal', goal)}
							class="btn rounded-xl border-2 flex-col h-auto py-3 px-2 gap-1.5
								{$inputs.crumbGoal === goal
									? 'btn-secondary border-secondary text-secondary-content'
									: 'btn-ghost border-base-300'}"
						>
							<Icon class="w-full h-auto max-h-full" />
							<span class="text-xs font-bold">{t.crumbGoalNames[goal]}</span>
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
						aria-label={t.ariaLabels.learnFermentationPhilosophy}
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

			<!-- Proof method + nested fridge temp -->
			<div>
				<div class="flex items-center gap-1.5 mb-2">
					<p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.proofMethod}</p>
					<button
						type="button"
						onclick={() => (proofMethodModalOpen = true)}
						class="btn btn-ghost btn-xs btn-circle flex-shrink-0"
						aria-label={t.ariaLabels.learnProofMethod}
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
						</svg>
					</button>
				</div>
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
				{#if $inputs.proofMethod === 'ColdRetard'}
					<div class="form-control mt-3 pl-4 border-l-2 border-secondary/20">
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
							class="input border-0 border-b-2 border-base-300 rounded-none focus:border-secondary focus:outline-none bg-transparent w-full"
						/>
					</div>
				{/if}
			</div>

			<!-- Schedule mode + nested start time -->
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
				{#if $inputs.scheduleMode === 'clock'}
					<div class="form-control mt-3 pl-4 border-l-2 border-secondary/20">
						<label for="start-time" class="label">
							<span class="label-text text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.startTime}</span>
						</label>
						<input
							id="start-time"
							type="time"
							value={$inputs.startTime ?? '08:00'}
							oninput={(e) => updateField('startTime', (e.target as HTMLInputElement).value || null)}
							class="input border-0 border-b-2 border-base-300 rounded-none focus:border-secondary focus:outline-none bg-transparent w-full"
						/>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Tier 3: Fine Tuning (always visible) -->
	<div class="border-t border-base-200">
		<div class="px-5 py-3">
			<span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.fineTuning}</span>
		</div>
		<div class="px-5 pb-5 space-y-4">
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
							aria-label={t.ariaLabels.overrideSalt}
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
							class="input border-0 border-b-2 border-base-300 rounded-none focus:border-secondary focus:outline-none bg-transparent w-full"
							placeholder="2.0"
						/>
					</div>
					<p class="text-xs text-base-content/50 mt-1">{t.saltBakersPct}</p>
				{/if}
			</div>

			<!-- Starter hydration — default 100% with optional override -->
			<div>
				<div class="flex items-center justify-between mb-1.5">
					<span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.starterHydration}</span>
					<div class="flex items-center gap-2">
						<span class="text-xs text-base-content/50">
							{$inputs.starterHydrationAutoCalc ? t.starterHydrationDefaultLabel : t.starterHydrationManual}
						</span>
						<input
							type="checkbox"
							class="toggle toggle-secondary toggle-sm"
							checked={!$inputs.starterHydrationAutoCalc}
							onchange={() => updateField('starterHydrationAutoCalc', !$inputs.starterHydrationAutoCalc)}
							role="switch"
							aria-checked={!$inputs.starterHydrationAutoCalc}
							aria-label={t.ariaLabels.overrideStarterHydration}
						/>
						<span class="text-xs text-base-content/70">{t.starterHydrationOverride}</span>
					</div>
				</div>
				{#if !$inputs.starterHydrationAutoCalc}
					<div class="form-control">
						<input
							id="starter-hyd"
							type="number"
							min="50"
							max="200"
							step="5"
							value={$inputs.starterHydrationPct}
							oninput={(e) => updateField('starterHydrationPct', parseFloat((e.target as HTMLInputElement).value) || 100)}
							class="input border-0 border-b-2 border-base-300 rounded-none focus:border-secondary focus:outline-none bg-transparent w-full"
						/>
					</div>
				{/if}
			</div>

			<!-- Autolyse toggle + progress -->
			<div>
				<div class="flex items-center justify-between mb-1.5">
					<div class="flex items-center gap-1.5">
						<span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.autolyse}</span>
						<button
							type="button"
							onclick={() => (autolyseModalOpen = true)}
							class="btn btn-ghost btn-xs btn-circle flex-shrink-0"
							aria-label={t.ariaLabels.learnAutolyse}
						>
							<svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
							</svg>
						</button>
					</div>
					<div class="flex items-center gap-2">
						<span class={$inputs.autolyseOn ? 'text-xs text-base-content/40' : 'text-xs text-base-content/70 font-semibold'}>
							{t.off}
						</span>
						<input
							type="checkbox"
							class="toggle toggle-secondary toggle-sm"
							checked={$inputs.autolyseOn}
							onchange={toggleAutolyse}
							role="switch"
							aria-checked={$inputs.autolyseOn}
							aria-label={t.ariaLabels.toggleAutolyseAuto}
						/>
						<span class={$inputs.autolyseOn ? 'text-xs text-base-content/70 font-semibold' : 'text-xs text-base-content/40'}>
							{t.auto}
						</span>
					</div>
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
							aria-label={t.ariaLabels.autolyseDurationProgress}
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
			aria-label={t.ariaLabels.closeFermentationPhilosophyModal}
		></button>

		<!-- Modal box -->
		<div
			class="modal-box w-full max-w-sm p-0 overflow-hidden"
			role="dialog"
			aria-modal="true"
			aria-labelledby="philosophy-modal-title"
			use:useTrapFocus
		>
			<!-- Header -->
			<div class="flex items-center justify-between px-5 py-4 border-b border-base-200">
				<h2 id="philosophy-modal-title" class="text-base font-semibold text-base-content">{t.philosophyModalTitle}</h2>
				<button
					type="button"
					onclick={() => (philosophyModalOpen = false)}
					class="btn btn-ghost btn-sm btn-circle"
					aria-label={t.ariaLabels.closeButton}
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

	<!-- Autolyse info modal -->
	{#if autolyseModalOpen}
		<div class="modal modal-open">
			<button
				type="button"
				class="modal-backdrop"
				onclick={() => (autolyseModalOpen = false)}
				aria-label={t.ariaLabels.closeAutolyseModal}
			></button>

			<div
				class="modal-box w-full max-w-md p-0 overflow-hidden"
				role="dialog"
				aria-modal="true"
				aria-labelledby="autolyse-modal-title"
				use:useTrapFocus
			>
				<div class="flex items-center justify-between px-5 py-4 border-b border-base-200">
					<h2 id="autolyse-modal-title" class="text-base font-semibold text-base-content">{t.autolyseModalTitle}</h2>
					<button
						type="button"
						onclick={() => (autolyseModalOpen = false)}
						class="btn btn-ghost btn-sm btn-circle"
						aria-label={t.ariaLabels.closeButton}
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div class="px-5 py-4 space-y-4">
					<p class="text-sm text-base-content/70 leading-relaxed">{t.autolyseModalIntro}</p>

					<div>
						<p class="text-xs font-semibold text-success uppercase tracking-wide mb-1">{t.autolyseModalUseTitle}</p>
						<ul class="list-disc pl-5 space-y-1 text-sm text-base-content/70 leading-relaxed">
							{#each t.autolyseModalUseItems as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>

					<div class="border-t border-base-200 pt-4">
						<p class="text-xs font-semibold text-warning uppercase tracking-wide mb-1">{t.autolyseModalAvoidTitle}</p>
						<ul class="list-disc pl-5 space-y-1 text-sm text-base-content/70 leading-relaxed">
							{#each t.autolyseModalAvoidItems as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				</div>

				<div class="px-5 pb-5">
					<button
						type="button"
						onclick={() => (autolyseModalOpen = false)}
						class="btn btn-primary w-full"
					>
						{t.done}
					</button>
				</div>
			</div>
		</div>
	{/if}

	<!-- Proof Method info modal -->
	{#if proofMethodModalOpen}
		<div class="modal modal-open">
			<button
				type="button"
				class="modal-backdrop"
				onclick={() => (proofMethodModalOpen = false)}
				aria-label={t.ariaLabels.closeProofMethodModal}
			></button>

			<div
				class="modal-box w-full max-w-sm p-0 overflow-hidden"
				role="dialog"
				aria-modal="true"
				aria-labelledby="proof-method-modal-title"
				use:useTrapFocus
			>
				<div class="flex items-center justify-between px-5 py-4 border-b border-base-200">
					<h2 id="proof-method-modal-title" class="text-base font-semibold text-base-content">{t.proofMethodModalTitle}</h2>
					<button
						type="button"
						onclick={() => (proofMethodModalOpen = false)}
						class="btn btn-ghost btn-sm btn-circle"
						aria-label={t.ariaLabels.closeProofMethodModal}
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div class="px-5 py-4 space-y-4">
					<div>
						<p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1">{t.roomTemp}</p>
						<p class="text-sm text-base-content/70 leading-relaxed">{t.proofMethodRoomBody}</p>
					</div>
					<div class="border-t border-base-200 pt-4">
						<p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1">{t.coldRetard}</p>
						<p class="text-sm text-base-content/70 leading-relaxed">{t.proofMethodColdRetardBody}</p>
					</div>
				</div>

				<div class="px-5 pb-5">
					<button
						type="button"
						onclick={() => (proofMethodModalOpen = false)}
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
