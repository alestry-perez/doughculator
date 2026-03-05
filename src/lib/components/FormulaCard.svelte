<script lang="ts">
	import type { FormulaResult } from '$lib/calculator';

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

<div class="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 overflow-hidden">
	<div class="px-5 pt-5 pb-3">
		<h2 class="text-base font-semibold text-stone-700 uppercase tracking-wide">Formula</h2>
		<p class="text-xs text-stone-400 mt-0.5">Baker's percentages relative to total flour</p>
	</div>

	<table class="w-full text-sm">
		<thead>
			<tr class="border-b border-stone-100">
				<th class="text-left px-5 py-2 text-xs font-semibold text-stone-400 uppercase tracking-wide">Ingredient</th>
				<th class="text-right px-5 py-2 text-xs font-semibold text-stone-400 uppercase tracking-wide">Grams</th>
				<th class="text-right px-5 py-2 text-xs font-semibold text-stone-400 uppercase tracking-wide">Baker's %</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-stone-50">
			<tr>
				<td class="px-5 py-2.5 text-stone-700 font-medium">Total Flour</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-stone-800 font-semibold">{round(formula.totalFlourG)}g</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-stone-500">100%</td>
			</tr>
			<tr class="bg-stone-50/50">
				<td class="px-5 py-2 text-stone-500 text-xs pl-8">— White flour</td>
				<td class="px-5 py-2 text-right tabular-nums text-stone-500 text-xs">{round(whiteFlouG)}g</td>
				<td class="px-5 py-2 text-right tabular-nums text-stone-400 text-xs">{pct(whiteFlouG, formula.totalFlourG)}</td>
			</tr>
			{#if wwFlourG > 0}
				<tr class="bg-stone-50/50">
					<td class="px-5 py-2 text-stone-500 text-xs pl-8">— Whole wheat</td>
					<td class="px-5 py-2 text-right tabular-nums text-stone-500 text-xs">{round(wwFlourG)}g</td>
					<td class="px-5 py-2 text-right tabular-nums text-stone-400 text-xs">{pct(wwFlourG, formula.totalFlourG)}</td>
				</tr>
			{/if}
			<tr>
				<td class="px-5 py-2.5 text-stone-700 font-medium">Water</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-stone-800 font-semibold">{round(formula.totalWaterG)}g</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-stone-500">{formula.finalHydrationPct.toFixed(1)}%</td>
			</tr>
			<tr>
				<td class="px-5 py-2.5 text-stone-700 font-medium">Salt</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-stone-800 font-semibold">{round(formula.saltG)}g</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-stone-500">{pct(formula.saltG, formula.totalFlourG)}</td>
			</tr>
			<tr>
				<td class="px-5 py-2.5 text-stone-700 font-medium">Starter</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-stone-800 font-semibold">{round(formula.starterTotalG)}g</td>
				<td class="px-5 py-2.5 text-right tabular-nums text-stone-500">{pct(formula.starterTotalG, formula.totalFlourG)}</td>
			</tr>
		</tbody>
		<tfoot>
			<tr class="border-t-2 border-stone-200 bg-amber-50">
				<td class="px-5 py-3 font-bold text-stone-800">Total Dough</td>
				<td class="px-5 py-3 text-right tabular-nums font-bold text-stone-800">{round(formula.totalDoughWeightG)}g</td>
				<td class="px-5 py-3 text-right"></td>
			</tr>
		</tfoot>
	</table>

	<!-- Starter breakdown -->
	<div class="px-5 py-4 border-t border-stone-100 bg-stone-50/60">
		<p class="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Starter Breakdown</p>
		<div class="grid grid-cols-3 gap-3 text-sm">
			<div class="text-center">
				<div class="text-lg font-bold tabular-nums text-stone-800">{round(formula.starterFlourG)}g</div>
				<div class="text-xs text-stone-500 mt-0.5">Starter flour</div>
			</div>
			<div class="text-center">
				<div class="text-lg font-bold tabular-nums text-stone-800">{round(formula.starterWaterG)}g</div>
				<div class="text-xs text-stone-500 mt-0.5">Starter water</div>
			</div>
			<div class="text-center">
				<div class="text-lg font-bold tabular-nums text-amber-700">{round(formula.starterTotalG)}g</div>
				<div class="text-xs text-stone-500 mt-0.5">Total starter</div>
			</div>
		</div>
	</div>

	<!-- Mix additions -->
	<div class="px-5 py-4 border-t border-stone-100">
		<p class="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">What You Add (from bag/tap)</p>
		<div class="grid grid-cols-2 gap-3 text-sm">
			<div class="rounded-lg bg-stone-50 px-3 py-2 text-center">
				<div class="text-lg font-bold tabular-nums text-stone-800">{round(formula.mixFlourG)}g</div>
				<div class="text-xs text-stone-500 mt-0.5">Mix flour</div>
			</div>
			<div class="rounded-lg bg-stone-50 px-3 py-2 text-center">
				<div class="text-lg font-bold tabular-nums text-stone-800">{round(formula.mixWaterG)}g</div>
				<div class="text-xs text-stone-500 mt-0.5">Mix water</div>
			</div>
		</div>
		<p class="text-xs text-stone-400 mt-2">Starter flour/water is already counted in total formula above.</p>
	</div>
</div>

<style lang="scss">
	// No extra styles needed
</style>
