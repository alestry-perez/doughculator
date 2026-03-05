<script lang="ts">
	import { assumptionsOpen, lang } from '$lib/store';
	import { translations } from '$lib/i18n';

	const t = $derived(translations[$lang]);

	let { assumptions }: { assumptions: Record<string, string> } = $props();

	function close() {
		assumptionsOpen.set(false);
	}
</script>

{#if $assumptionsOpen}
	<!-- Backdrop -->
	<button
		type="button"
		class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
		onclick={close}
		aria-label="Close assumptions drawer"
	></button>

	<!-- Drawer panel -->
	<div
		class="fixed bottom-0 left-0 right-0 z-50 max-h-[70vh] overflow-y-auto rounded-t-2xl bg-white shadow-xl ring-1 ring-stone-200"
		role="dialog"
		aria-modal="true"
		aria-label={t.calculationAssumptions}
	>
		<div class="sticky top-0 flex items-center justify-between px-5 py-4 bg-white border-b border-stone-100">
			<h2 class="text-base font-semibold text-stone-800">{t.calculationAssumptions}</h2>
			<button
				type="button"
				onclick={close}
				class="text-stone-400 hover:text-stone-700 transition-colors p-1 rounded-lg hover:bg-stone-100"
				aria-label="Close"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>

		<div class="px-5 py-4">
			<p class="text-sm text-stone-500 mb-4">
				{t.assumptionsDesc}
			</p>
			<dl class="space-y-2">
				{#each Object.entries(assumptions) as [key, value]}
					<div class="flex justify-between items-center py-2 border-b border-stone-50">
						<dt class="text-sm text-stone-600">{key}</dt>
						<dd class="text-sm font-semibold text-stone-800 tabular-nums">{value}</dd>
					</div>
				{/each}
			</dl>
		</div>

		<div class="px-5 pb-6">
			<button
				type="button"
				onclick={close}
				class="w-full py-3 rounded-xl bg-stone-100 text-stone-700 text-sm font-semibold hover:bg-stone-200 transition-colors"
			>
				{t.done}
			</button>
		</div>
	</div>
{/if}

<style lang="scss">
	// No extra styles needed
</style>
