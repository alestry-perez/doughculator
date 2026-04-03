<script lang="ts">
	import type { FormulaResult, FlourBlendEntry } from '$lib/calculator';
	import { lang, showFullFormula } from '$lib/store';
	import { translations } from '$lib/i18n';

	const t = $derived(translations[$lang]);

	let { formula, flourBlend }: {
		formula: FormulaResult;
		flourBlend: FlourBlendEntry[];
	} = $props();

	function pct(val: number, base: number): string {
		if (base <= 0) return '—';
		return `${((val / base) * 100).toFixed(1)}%`;
	}

	function round(n: number): string {
		return Math.round(n).toString();
	}

	let formulaModalOpen = $state(false);

	const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

	function trapFocus(node: HTMLElement, open: boolean) {
		if (!open) return;
		const focusables = Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE));
		if (focusables.length) focusables[0].focus();

		function onKeyDown(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				formulaModalOpen = false;
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
</script>

<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70 overflow-hidden">
	<!-- Header with title + dough weight badge -->
	<div class="flex items-center justify-between px-5 pt-5 pb-3">
		<div>
			<div class="flex items-center gap-1.5">
				<h2 class="text-base font-semibold text-base-content uppercase tracking-wide">{t.formula}</h2>
				<button
					type="button"
					onclick={() => (formulaModalOpen = true)}
					class="btn btn-ghost btn-xs btn-circle flex-shrink-0"
					aria-label={t.ariaLabels.learnFormula}
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="w-[1.14rem] h-[1.14rem]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
					</svg>
				</button>
			</div>
			<p class="text-xs text-base-content/50 mt-0.5">{t.bakersPctSubtitle}</p>
		</div>
		<div class="badge badge-secondary badge-lg tabular-nums font-bold gap-1">
			{round(formula.totalDoughWeightG)}g
		</div>
	</div>

	<!-- Zone 1: What You Add — hero section -->
	<div class="px-5 pb-4">
		<p class="text-xs font-semibold text-base-content/70 uppercase tracking-wide mb-3">{t.mixAdditions}</p>
		<div class="grid grid-cols-2 gap-3">
			<div class="rounded-xl bg-base-200/80 ring-1 ring-base-300/60 px-3 py-3 text-center">
				<div class="text-2xl font-bold tabular-nums text-base-content">{round(formula.mixFlourG)}g</div>
				<div class="text-xs text-base-content/60 mt-1 font-medium">{t.mixFlour}</div>
			</div>
			<div class="rounded-xl bg-base-200/80 ring-1 ring-base-300/60 px-3 py-3 text-center">
				<div class="text-2xl font-bold tabular-nums text-base-content">{round(formula.mixWaterG)}g</div>
				<div class="text-xs text-base-content/60 mt-1 font-medium">{t.mixWater}</div>
			</div>
			<div class="rounded-xl bg-accent/10 ring-1 ring-accent/20 px-3 py-3 text-center">
				<div class="text-2xl font-bold tabular-nums text-accent">{round(formula.starterTotalG)}g</div>
				<div class="text-xs text-accent/70 mt-1 font-medium">{t.starter}</div>
			</div>
			<div class="rounded-xl bg-base-200/80 ring-1 ring-base-300/60 px-3 py-3 text-center">
				<div class="text-2xl font-bold tabular-nums text-base-content">{round(formula.saltG)}g</div>
				<div class="text-xs text-base-content/60 mt-1 font-medium">{t.saltRow}</div>
			</div>
		</div>
		<p class="text-xs text-base-content/50 mt-2.5 italic">
			{t.starterContains(round(formula.starterFlourG), round(formula.starterWaterG))}
		</p>
	</div>

	<!-- Zone 2: Full Baker's Formula — collapsible reference -->
	<div class="border-t border-base-200">
		<button
			type="button"
			onclick={() => showFullFormula.update(v => !v)}
			class="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-base-200/50 transition-colors"
		>
			<span class="text-xs font-semibold text-base-content/70 uppercase tracking-wide">{t.fullFormula}</span>
			<svg
				class="w-4 h-4 text-base-content/40 transition-transform {$showFullFormula ? 'rotate-180' : ''}"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
			</svg>
		</button>

		{#if $showFullFormula}
			<div class="px-5 pb-4">
				<table class="w-full text-sm">
					<thead>
						<tr class="border-b border-base-200">
							<th class="text-left py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wide">{t.ingredient}</th>
							<th class="text-right py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wide">{t.grams}</th>
							<th class="text-right py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wide">{t.bakersPct}</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-base-200">
						<tr>
							<td class="py-2.5 text-base-content font-medium">{t.totalFlourRow}</td>
							<td class="py-2.5 text-right tabular-nums text-base-content font-semibold">{round(formula.totalFlourG)}g</td>
							<td class="py-2.5 text-right tabular-nums text-base-content/70">100%</td>
						</tr>
						{#each flourBlend as entry (entry.type)}
							<tr class="bg-base-200/30">
								<td class="py-1.5 text-base-content/70 text-xs pl-4">— {t.flourTypes[entry.type] ?? entry.type}</td>
								<td class="py-1.5 text-right tabular-nums text-base-content/70 text-xs">{round(formula.totalFlourG * entry.pct / 100)}g</td>
								<td class="py-1.5 text-right tabular-nums text-base-content/50 text-xs">{entry.pct}%</td>
							</tr>
						{/each}
						<tr>
							<td class="py-2.5 text-base-content font-medium">{t.water}</td>
							<td class="py-2.5 text-right tabular-nums text-base-content font-semibold">{round(formula.totalWaterG)}g</td>
							<td class="py-2.5 text-right tabular-nums text-base-content/70">{formula.finalHydrationPct.toFixed(1)}%</td>
						</tr>
						<tr>
							<td class="py-2.5 text-base-content font-medium">{t.saltRow}</td>
							<td class="py-2.5 text-right tabular-nums text-base-content font-semibold">{round(formula.saltG)}g</td>
							<td class="py-2.5 text-right tabular-nums text-base-content/70">{pct(formula.saltG, formula.totalFlourG)}</td>
						</tr>
						<tr>
							<td class="py-2.5 text-base-content font-medium">{t.starter}</td>
							<td class="py-2.5 text-right tabular-nums text-base-content font-semibold">{round(formula.starterTotalG)}g</td>
							<td class="py-2.5 text-right tabular-nums text-base-content/70">
								{pct(formula.starterFlourG, formula.totalFlourG)}
								<span class="text-[10px] text-base-content/40 block leading-tight">{t.preFermentedFlour}</span>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="border-t-2 border-secondary/30 bg-secondary/10">
							<td class="py-3 font-bold text-secondary">{t.totalDough}</td>
							<td class="py-3 text-right tabular-nums font-bold text-secondary">{round(formula.totalDoughWeightG)}g</td>
							<td class="py-3 text-right"></td>
						</tr>
					</tfoot>
				</table>
			</div>
		{/if}
	</div>
</div>

<!-- Formula info modal -->
{#if formulaModalOpen}
	<div class="modal modal-open">
		<button
			type="button"
			class="modal-backdrop"
			onclick={() => (formulaModalOpen = false)}
			aria-label={t.ariaLabels.closeFormulaModal}
		></button>

		<div
			class="modal-box w-full max-w-sm p-0 overflow-hidden"
			role="dialog"
			aria-modal="true"
			aria-labelledby="formula-modal-title"
			use:useTrapFocus
		>
			<div class="flex items-center justify-between px-5 py-4 border-b border-base-200">
				<h2 id="formula-modal-title" class="text-base font-semibold text-base-content">{t.formulaInfoTitle}</h2>
				<button
					type="button"
					onclick={() => (formulaModalOpen = false)}
					class="btn btn-ghost btn-sm btn-circle"
					aria-label={t.ariaLabels.closeFormulaModal}
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<div class="px-5 py-4 space-y-4">
				<div>
					<p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1">{t.mixAdditions}</p>
					<p class="text-sm text-base-content/70 leading-relaxed">{t.formulaInfoMixBody}</p>
				</div>
				<div class="border-t border-base-200 pt-4">
					<p class="text-xs font-semibold text-secondary uppercase tracking-wide mb-1">{t.fullFormula}</p>
					<p class="text-sm text-base-content/70 leading-relaxed">{t.formulaInfoFormulaBody}</p>
				</div>
			</div>

			<div class="px-5 pb-5">
				<button
					type="button"
					onclick={() => (formulaModalOpen = false)}
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
