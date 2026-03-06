<script lang="ts">
	import type { FormulaResult } from '$lib/calculator';
	import { lang } from '$lib/store';
	import { translations } from '$lib/i18n';

	const t = $derived(translations[$lang]);

	let { formula }: {
		formula: FormulaResult;
	} = $props();

	const whiteFlouG = $derived(formula.whiteFlouG);
	const wwFlourG = $derived(formula.wwFlourG);

	function pct(val: number, base: number): string {
		if (base <= 0) return '—';
		return `${((val / base) * 100).toFixed(1)}%`;
	}

	function round(n: number): string {
		return Math.round(n).toString();
	}
</script>

<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70 overflow-hidden">
	<div class="px-5 pt-5 pb-3">
		<h2 class="text-base font-semibold text-base-content uppercase tracking-wide">{t.formula}</h2>
		<p class="text-xs text-base-content/50 mt-0.5">{t.bakersPctSubtitle}</p>
	</div>

	<table class="w-full text-sm">
		<thead>
			<tr class="border-b border-base-200">
				<th class="text-left px-5 py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wide">{t.ingredient}</th>
				<th class="text-right px-5 py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wide">{t.grams}</th>
				<th class="text-right px-5 py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wide">{t.bakersPct}</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-base-200">
			<tr>
				<td class="px-5 py-2.5 text-base-content font-medium">{t.totalFlourRow}</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-base-content font-semibold">{round(formula.totalFlourG)}g</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-base-content/70">100%</td>
			</tr>
			<tr class="bg-base-200/50">
				<td class="px-5 py-2 text-base-content/70 text-xs pl-8">{t.whiteFlouRow}</td>
				<td class="px-5 py-2 text-right tabular-nums text-base-content/70 text-xs">{round(whiteFlouG)}g</td>
				<td class="px-5 py-2 text-right tabular-nums text-base-content/50 text-xs">{pct(whiteFlouG, formula.totalFlourG)}</td>
			</tr>
			{#if wwFlourG > 0}
				<tr class="bg-base-200/50">
					<td class="px-5 py-2 text-base-content/70 text-xs pl-8">{t.wwFlourRow}</td>
					<td class="px-5 py-2 text-right tabular-nums text-base-content/70 text-xs">{round(wwFlourG)}g</td>
					<td class="px-5 py-2 text-right tabular-nums text-base-content/50 text-xs">{pct(wwFlourG, formula.totalFlourG)}</td>
				</tr>
			{/if}
			<tr>
				<td class="px-5 py-2.5 text-base-content font-medium">{t.water}</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-base-content font-semibold">{round(formula.totalWaterG)}g</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-base-content/70">{formula.finalHydrationPct.toFixed(1)}%</td>
			</tr>
			<tr>
				<td class="px-5 py-2.5 text-base-content font-medium">{t.saltRow}</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-base-content font-semibold">{round(formula.saltG)}g</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-base-content/70">{pct(formula.saltG, formula.totalFlourG)}</td>
			</tr>
			<tr>
				<td class="px-5 py-2.5 text-base-content font-medium">{t.starter}</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-base-content font-semibold">{round(formula.starterTotalG)}g</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-base-content/70">{pct(formula.starterFlourG, formula.totalFlourG)}</td>
			</tr>
		</tbody>
		<tfoot>
			<tr class="border-t-2 border-secondary/30 bg-secondary/10">
				<td class="px-5 py-3 font-bold text-secondary">{t.totalDough}</td>
				<td class="px-5 py-3 text-right tabular-nums font-bold text-secondary">{round(formula.totalDoughWeightG)}g</td>
				<td class="px-5 py-3 text-right"></td>
			</tr>
		</tfoot>
	</table>

	<!-- Starter breakdown -->
	<div class="px-5 py-4 border-t border-base-200 bg-base-200/60">
		<p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2">{t.starterBreakdown}</p>
		<div class="grid grid-cols-3 gap-3 text-sm">
			<div class="text-center">
				<div class="text-lg font-bold tabular-nums text-base-content">{round(formula.starterFlourG)}g</div>
				<div class="text-xs text-base-content/70 mt-0.5">{t.starterFlour}</div>
			</div>
			<div class="text-center">
				<div class="text-lg font-bold tabular-nums text-base-content">{round(formula.starterWaterG)}g</div>
				<div class="text-xs text-base-content/70 mt-0.5">{t.starterWater}</div>
			</div>
			<div class="text-center">
				<div class="text-lg font-bold tabular-nums text-accent">{round(formula.starterTotalG)}g</div>
				<div class="text-xs text-base-content/70 mt-0.5">{t.totalStarter}</div>
			</div>
		</div>
	</div>

	<!-- Mix additions -->
	<div class="px-5 py-4 border-t border-base-200">
		<p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-2">{t.mixAdditions}</p>
		<div class="grid grid-cols-2 gap-3 text-sm">
			<div class="rounded-lg bg-base-200/80 ring-1 ring-base-300/60 px-3 py-2 text-center">
				<div class="text-lg font-bold tabular-nums text-base-content">{round(formula.mixFlourG)}g</div>
				<div class="text-xs text-base-content/70 mt-0.5">{t.mixFlour}</div>
			</div>
			<div class="rounded-lg bg-base-200/80 ring-1 ring-base-300/60 px-3 py-2 text-center">
				<div class="text-lg font-bold tabular-nums text-base-content">{round(formula.mixWaterG)}g</div>
				<div class="text-xs text-base-content/70 mt-0.5">{t.mixWater}</div>
			</div>
		</div>
		<p class="text-xs text-base-content/50 mt-2">{t.starterNote}</p>
	</div>
</div>

<style lang="scss">
	// No extra styles needed
</style>
