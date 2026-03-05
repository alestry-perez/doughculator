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

	const tempBandColors: Record<string, string> = {
		Cold: 'text-blue-700 bg-blue-50',
		Freezing: 'text-indigo-700 bg-indigo-50',
		Standard: 'text-emerald-700 bg-emerald-50',
		Warm: 'text-amber-700 bg-amber-50',
		Hot: 'text-red-700 bg-red-50'
	};

	const hydrationBandColors: Record<string, string> = {
		Low: 'text-sky-700 bg-sky-50',
		Medium: 'text-teal-700 bg-teal-50',
		High: 'text-violet-700 bg-violet-50'
	};
</script>

<div class="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 p-5 space-y-5">
	<h2 class="text-base font-semibold text-stone-700 uppercase tracking-wide">{t.timing}</h2>

	<!-- Badges -->
	<div class="flex flex-wrap gap-2">
		<span class="text-xs px-3 py-1 rounded-full font-medium {tempBandColors[formula.tempBand] ?? ''}">
			{t.tempBands[formula.tempBand]} ({formula.effectiveTempC.toFixed(1)}°C)
		</span>
		<span class="text-xs px-3 py-1 rounded-full font-medium {hydrationBandColors[formula.hydrationBand] ?? ''}">
			{t.hydrationBands[formula.hydrationBand]} {t.hydration} ({formula.finalHydrationPct.toFixed(1)}%)
		</span>
		<span class="text-xs px-3 py-1 rounded-full font-medium bg-amber-50 text-amber-700">
			{formula.inoculationPct.toFixed(1)}% {t.inoculation}
		</span>
	</div>

	<!-- Bulk fermentation -->
	<div>
		<div class="flex justify-between items-center mb-2">
			<span class="text-sm font-semibold text-stone-700">{t.bulkFermentation}</span>
			<span class="text-sm tabular-nums font-bold text-amber-700">
				{formatMins(timing.bulkMin * 60)} – {formatMins(timing.bulkMax * 60)}
			</span>
		</div>
		<div class="relative h-3 rounded-full bg-stone-100 overflow-hidden">
			<div
				class="absolute left-0 h-full rounded-full bg-amber-200"
				style="width: {widthPct(timing.bulkMax)}%"
			></div>
			<div
				class="absolute left-0 h-full rounded-full bg-amber-400"
				style="width: {widthPct(timing.bulkMin)}%"
			></div>
		</div>
		<div class="flex justify-between text-xs text-stone-400 mt-1">
			<span>{t.fastest}</span>
			<span>{t.slowest}</span>
		</div>
		<p class="text-xs text-stone-500 mt-1">{t.foldSchedule(timing.foldCount, timing.foldIntervalMins)}</p>
	</div>

	<!-- Proof -->
	<div>
		{#if proofMethod === 'Room'}
			<div class="flex justify-between items-center mb-2">
				<span class="text-sm font-semibold text-stone-700">{t.roomProof}</span>
				<span class="text-sm tabular-nums font-bold text-sky-700">
					{formatMins(timing.proofMin * 60)} – {formatMins(timing.proofMax * 60)}
				</span>
			</div>
			<div class="relative h-3 rounded-full bg-stone-100 overflow-hidden">
				<div
					class="absolute left-0 h-full rounded-full bg-sky-200"
					style="width: {widthPct(timing.proofMax)}%"
				></div>
				<div
					class="absolute left-0 h-full rounded-full bg-sky-400"
					style="width: {widthPct(timing.proofMin)}%"
				></div>
			</div>
		{:else}
			<div class="flex justify-between items-center mb-2">
				<span class="text-sm font-semibold text-stone-700">{t.coldRetardProof}</span>
				<span class="text-sm tabular-nums font-bold text-indigo-700">
					{timing.coldRetardMin}h – {timing.coldRetardMax}h
				</span>
			</div>
			<div class="relative h-3 rounded-full bg-stone-100 overflow-hidden">
				<div
					class="absolute left-0 h-full rounded-full bg-indigo-200"
					style="width: 100%"
				></div>
				<div
					class="absolute left-0 h-full rounded-full bg-indigo-400"
					style="width: {widthPct(timing.coldRetardMin)}%"
				></div>
			</div>
			<p class="text-xs text-stone-500 mt-1">{t.bakeColdNote}</p>
		{/if}
	</div>

	<!-- Total estimate -->
	<div class="rounded-xl bg-stone-50 px-4 py-3 text-sm">
		<span class="text-stone-500">{t.totalActiveTime}</span>
		<span class="font-bold text-stone-800 ml-1">
			{formatMins((timing.bulkMin + (proofMethod === 'Room' ? timing.proofMin : timing.coldRetardMin)) * 60 + 85)} –
			{formatMins((timing.bulkMax + (proofMethod === 'Room' ? timing.proofMax : timing.coldRetardMax)) * 60 + 95)}
		</span>
	</div>
</div>

<style lang="scss">
	// No extra styles needed
</style>
