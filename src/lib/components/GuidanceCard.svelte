<script lang="ts">
	import type { CrumbGoal } from '$lib/calculator';

	let { crumbGoal }: { crumbGoal: CrumbGoal } = $props();

	const guidance: Record<CrumbGoal, { description: string; underFermented: string; overFermented: string }> = {
		Tight: {
			description: 'Dense but moist interior, small uniform bubbles.',
			underFermented: 'Gummy center, flat rise, pale crust.',
			overFermented: 'Bitter flavor, dense with no oven spring.'
		},
		Balanced: {
			description: 'Mix of small and medium bubbles, even distribution.',
			underFermented: 'Dense patches, brick-like texture on the bottom.',
			overFermented: 'Large irregular holes with weak structure, shaggy crumb.'
		},
		Open: {
			description: 'Large irregular holes, translucent bubble walls — requires high skill.',
			underFermented: 'Closed crumb despite high hydration, no bloom.',
			overFermented: 'Flat, gummy, shredded crumb with sour overload.'
		}
	};

	const info = $derived(guidance[crumbGoal]);
</script>

<div class="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 p-5">
	<h2 class="text-base font-semibold text-stone-700 uppercase tracking-wide mb-3">Reading Your Crumb</h2>
	<div class="text-sm text-stone-700 space-y-2">
		<p>
			<span class="font-semibold text-amber-700">Target ({crumbGoal}):</span>
			{info.description}
		</p>
		<p>
			<span class="font-semibold text-blue-700">Under-fermented:</span>
			{info.underFermented}
		</p>
		<p>
			<span class="font-semibold text-red-700">Over-fermented:</span>
			{info.overFermented}
		</p>
	</div>
	<div class="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-1">
		<p><strong>Float test:</strong> Drop a small piece of dough in water — if it floats, bulk is done.</p>
		<p><strong>Poke test:</strong> Poke proofed dough — slow, partial spring-back = ready to bake.</p>
		<p><strong>Jiggle test:</strong> Shake container — dough should move like jello when bulk is complete.</p>
	</div>
</div>

<style lang="scss">
	// No extra styles needed
</style>
