<script lang="ts">
	import type { CrumbGoal } from '$lib/calculator';
	import { lang } from '$lib/store';
	import { translations } from '$lib/i18n';

	const t = $derived(translations[$lang]);

	let { crumbGoal }: { crumbGoal: CrumbGoal } = $props();

	const info = $derived(t.guidance[crumbGoal]);
	const translatedGoal = $derived(t.crumbGoalNames[crumbGoal]);
</script>

<div class="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 p-5">
	<h2 class="text-base font-semibold text-stone-700 uppercase tracking-wide mb-3">{t.readingYourCrumb}</h2>
	<div class="text-sm text-stone-700 space-y-2">
		<p>
			<span class="font-semibold text-amber-700">{t.target(translatedGoal)}</span>
			{info.description}
		</p>
		<p>
			<span class="font-semibold text-blue-700">{t.underFermented}</span>
			{info.underFermented}
		</p>
		<p>
			<span class="font-semibold text-red-700">{t.overFermented}</span>
			{info.overFermented}
		</p>
	</div>
	<div class="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-1">
		<p><strong>{t.floatTest}</strong> {t.floatTestDesc}</p>
		<p><strong>{t.pokeTest}</strong> {t.pokeTestDesc}</p>
		<p><strong>{t.jiggleTest}</strong> {t.jiggleTestDesc}</p>
	</div>
</div>

<style lang="scss">
	// No extra styles needed
</style>
