<script lang="ts">
	import type { TimingResult, FormulaResult } from '$lib/calculator';
	import { formatMins } from '$lib/calculator';
	import { lang, inputs } from '$lib/store';
	import { translations } from '$lib/i18n';

	const ACTIVE_TIME_BASE_MIN = 85; // mixing + shaping + scoring + bake
	const ACTIVE_TIME_BASE_MAX = 95;

	const t = $derived(translations[$lang]);

	let timingBarsModalOpen = $state(false);

	let { timing, formula, proofMethod }: {
		timing: TimingResult;
		formula: FormulaResult;
		proofMethod: 'Room' | 'ColdRetard';
	} = $props();

	// Visual bar: express range as % of max total
	const maxPossibleBulk = 12; // hours

	function widthPct(hours: number): number {
		return Math.min(100, (hours / maxPossibleBulk) * 100);
	}

	// Map temp band to daisyUI badge variant
	const tempBandVariant: Record<string, string> = {
		Cold: 'badge-info',
		VeryCold: 'badge-info',
		Standard: 'badge-success',
		Warm: 'badge-warning',
		Hot: 'badge-error'
	};

	// Map hydration band to daisyUI badge variant
	const hydrationBandVariant: Record<string, string> = {
		Low: 'badge-warning',
		Medium: 'badge-success',
		High: 'badge-info',
		VeryHigh: 'badge-error'
	};

	// Progress value (0–100) for bulk fermentation bars
	const bulkMaxPct = $derived(widthPct(timing.bulkMax));
	const bulkMinPct = $derived(widthPct(timing.bulkMin));
	const proofMaxPct = $derived(widthPct(timing.proofMax));
	const proofMinPct = $derived(widthPct(timing.proofMin));
	const coldMinPct = $derived(widthPct(timing.coldRetardMin));
</script>

<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70">
	<div class="card-body gap-5 p-5">
		<div class="flex items-center gap-1.5">
			<h2 class="text-base font-semibold text-base-content uppercase tracking-wide">{t.timing}</h2>
			<button
				type="button"
				onclick={() => (timingBarsModalOpen = true)}
				class="btn btn-ghost btn-xs btn-circle flex-shrink-0"
				aria-label="Learn how to read timing bars"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
				</svg>
			</button>
		</div>

		<!-- Badges -->
		<div class="flex flex-wrap gap-2">
			<span class="badge badge-soft {tempBandVariant[formula.tempBand] ?? 'badge-ghost'} badge-md font-medium">
				{t.tempBands[formula.tempBand]} ({$inputs.tempUnit === 'F' ? ((formula.effectiveTempC * 9/5) + 32).toFixed(1) + '°F' : formula.effectiveTempC.toFixed(1) + '°C'})
			</span>
			<span class="badge badge-soft {hydrationBandVariant[formula.hydrationBand] ?? 'badge-ghost'} badge-md font-medium">
				{t.hydrationBands[formula.hydrationBand]} {t.hydration} ({formula.finalHydrationPct.toFixed(1)}%)
			</span>
			<span class="badge badge-soft badge-accent badge-md font-medium">
				{formula.inoculationPct.toFixed(1)}% {t.inoculation}
			</span>
		</div>

		<!-- Bulk fermentation -->
		<div>
			<div class="flex justify-between items-center mb-2">
				<span class="text-sm font-semibold text-base-content">{t.bulkFermentation}</span>
				<span class="text-sm tabular-nums font-bold text-secondary">
					{formatMins(timing.bulkMin * 60)} – {formatMins(timing.bulkMax * 60)}
				</span>
			</div>
			<!-- Layered progress bars: max range (lighter) behind min range (darker) -->
			<div class="relative h-3">
				<progress class="progress progress-warning w-full absolute inset-0" value={bulkMaxPct} max="100"></progress>
				<progress class="progress progress-secondary w-full absolute inset-0 opacity-80" value={bulkMinPct} max="100"></progress>
			</div>
			<div class="flex justify-between text-xs text-base-content/50 mt-1">
				<span>{t.fastest}</span>
				<span>{t.slowest}</span>
			</div>
			<p class="text-xs text-base-content/70 mt-1">{t.foldSchedule(timing.foldCount, timing.foldIntervalMins)}</p>
		</div>

		<!-- Proof -->
		<div>
			{#if proofMethod === 'Room'}
				<div class="flex justify-between items-center mb-2">
					<span class="text-sm font-semibold text-base-content">{t.roomProof}</span>
					<span class="text-sm tabular-nums font-bold text-info">
						{formatMins(timing.proofMin * 60)} – {formatMins(timing.proofMax * 60)}
					</span>
				</div>
				<div class="relative h-3">
					<progress class="progress progress-info w-full absolute inset-0 opacity-50" value={proofMaxPct} max="100"></progress>
					<progress class="progress progress-info w-full absolute inset-0" value={proofMinPct} max="100"></progress>
				</div>
			{:else}
				<div class="flex justify-between items-center mb-2">
					<span class="text-sm font-semibold text-base-content">{t.coldRetardProof}</span>
					<span class="text-sm tabular-nums font-bold text-secondary">
						{timing.coldRetardMin}h – {timing.coldRetardMax}h
					</span>
				</div>
				<div class="relative h-3">
					<progress class="progress progress-secondary w-full absolute inset-0 opacity-50" value="100" max="100"></progress>
					<progress class="progress progress-secondary w-full absolute inset-0" value={coldMinPct} max="100"></progress>
				</div>
				<p class="text-xs text-base-content/70 mt-1">{t.bakeColdNote}</p>
			{/if}
		</div>

		<!-- Total estimate -->
		<div class="rounded-xl bg-secondary/10 ring-1 ring-secondary/20 px-4 py-3 text-sm">
			<span class="text-base-content/70">{t.totalActiveTime}</span>
			<span class="font-bold text-base-content ml-1">
				{formatMins((timing.bulkMin + (proofMethod === 'Room' ? timing.proofMin : timing.coldRetardMin)) * 60 + ACTIVE_TIME_BASE_MIN)} –
				{formatMins((timing.bulkMax + (proofMethod === 'Room' ? timing.proofMax : timing.coldRetardMax)) * 60 + ACTIVE_TIME_BASE_MAX)}
			</span>
		</div>

		<p class="text-xs text-base-content/50 text-center">{t.timingDisclaimer}</p>
	</div>
</div>

{#if timingBarsModalOpen}
	<div class="modal modal-open">
		<button
			type="button"
			class="modal-backdrop"
			onclick={() => (timingBarsModalOpen = false)}
			aria-label="Close timing bar info modal"
		></button>

		<div
			class="modal-box w-full max-w-md p-0 overflow-hidden"
			role="dialog"
			aria-modal="true"
			aria-labelledby="timing-bars-modal-title"
		>
			<div class="flex items-center justify-between px-5 py-4 border-b border-base-200">
				<h2 id="timing-bars-modal-title" class="text-base font-semibold text-base-content">
					{t.timingBarsModalTitle}
				</h2>
				<button
					type="button"
					onclick={() => (timingBarsModalOpen = false)}
					class="btn btn-ghost btn-sm btn-circle"
					aria-label="Close"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<div class="px-5 py-4 space-y-4">
				<p class="text-sm text-base-content/70 leading-relaxed">{t.timingBarsModalIntro}</p>

				<div>
					<p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1">
						{t.timingBarsBulkTitle}
					</p>
					<p class="text-sm text-base-content/70 leading-relaxed">{t.timingBarsBulkBody}</p>
				</div>

				<div class="border-t border-base-200 pt-4">
					<p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1">
						{t.timingBarsColdTitle}
					</p>
					<p class="text-sm text-base-content/70 leading-relaxed">{t.timingBarsColdBody}</p>
				</div>
			</div>

			<div class="px-5 pb-5">
				<button
					type="button"
					onclick={() => (timingBarsModalOpen = false)}
					class="btn btn-primary w-full"
				>
					{t.done}
				</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	// No extra styles needed
</style>
