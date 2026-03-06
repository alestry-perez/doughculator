<script lang="ts">
	import type { TimingResult, FormulaResult } from '$lib/calculator';
	import { formatMins } from '$lib/calculator';
	import { lang } from '$lib/store';
	import { translations } from '$lib/i18n';

	const t = $derived(translations[$lang]);

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
		Freezing: 'badge-info',
		Standard: 'badge-success',
		Warm: 'badge-warning',
		Hot: 'badge-error'
	};

	// Map hydration band to daisyUI badge variant
	const hydrationBandVariant: Record<string, string> = {
		Low: 'badge-warning',
		Medium: 'badge-success',
		High: 'badge-info'
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
		<h2 class="text-base font-semibold text-base-content uppercase tracking-wide">{t.timing}</h2>

		<!-- Badges -->
		<div class="flex flex-wrap gap-2">
			<span class="badge badge-soft {tempBandVariant[formula.tempBand] ?? 'badge-ghost'} badge-md font-medium">
				{t.tempBands[formula.tempBand]} ({formula.effectiveTempC.toFixed(1)}°C)
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
				{formatMins((timing.bulkMin + (proofMethod === 'Room' ? timing.proofMin : timing.coldRetardMin)) * 60 + 85)} –
				{formatMins((timing.bulkMax + (proofMethod === 'Room' ? timing.proofMax : timing.coldRetardMax)) * 60 + 95)}
			</span>
		</div>
	</div>
</div>

<style lang="scss">
	// No extra styles needed
</style>
