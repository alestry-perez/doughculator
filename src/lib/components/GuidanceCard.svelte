<script lang="ts">
	import type { CrumbGoal } from '$lib/calculator';
	import { lang } from '$lib/store';
	import { translations } from '$lib/i18n';

	const t = $derived(translations[$lang]);

	let { crumbGoal }: { crumbGoal: CrumbGoal } = $props();

	const info = $derived(t.guidance[crumbGoal]);
	const translatedGoal = $derived(t.crumbGoalNames[crumbGoal]);
</script>

<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70">
	<div class="card-body p-5">
		<h2 class="text-base font-semibold text-base-content uppercase tracking-wide mb-3">{t.readingYourCrumb}</h2>
		<div class="text-sm text-base-content space-y-2">
			<p>
				<span class="font-semibold text-secondary">{t.target(translatedGoal)}</span>
				{info.description}
			</p>
			<p>
				<span class="font-semibold text-warning">{t.underFermented}</span>
				{info.underFermented}
			</p>
			<p>
				<span class="font-semibold text-error">{t.overFermented}</span>
				{info.overFermented}
			</p>
		</div>
		<div class="mt-4 pt-4 border-t border-base-200 text-xs text-base-content/70 space-y-1">
			<p><strong>{t.floatTest}</strong> {t.floatTestDesc}</p>
			<p><strong>{t.pokeTest}</strong> {t.pokeTestDesc}</p>
			<p><strong>{t.jiggleTest}</strong> {t.jiggleTestDesc}</p>
		</div>
	</div>
</div>

<style lang="scss">
	// No extra styles needed
</style>
