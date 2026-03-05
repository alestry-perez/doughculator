<script lang="ts">
	import { inputs, result, assumptionsOpen, lang } from '$lib/store';
	import { translations } from '$lib/i18n';
	import { formatMins } from '$lib/calculator';
	import InputSection from '$lib/components/InputSection.svelte';
	import FormulaCard from '$lib/components/FormulaCard.svelte';
	import TimingCard from '$lib/components/TimingCard.svelte';
	import ScheduleCard from '$lib/components/ScheduleCard.svelte';
	import WarningsCard from '$lib/components/WarningsCard.svelte';
	import GuidanceCard from '$lib/components/GuidanceCard.svelte';
	import AssumptionsDrawer from '$lib/components/AssumptionsDrawer.svelte';

	const t = $derived(translations[$lang]);

	let copied = $state(false);

	function buildCopyText(): string {
		const f = $result.formula;
		const schedule = $result.schedule;
		const assumptions = $result.assumptions;

		const scheduleLines = schedule.map((s, i) => {
			let dur = '';
			if (s.durationMins !== null && s.durationMins !== undefined) {
				dur = formatMins(s.durationMins);
			} else if (s.rangeMinMins !== undefined && s.rangeMaxMins !== undefined) {
				dur = `${formatMins(s.rangeMinMins)} – ${formatMins(s.rangeMaxMins)}`;
			}
			return `${i + 1}. ${s.label}${dur ? ' (' + dur + ')' : ''}${s.notes ? ' — ' + s.notes : ''}`;
		});

		const assumptionLines = Object.entries(assumptions).map(([k, v]) => `${k}: ${v}`);

		return [
			t.copyTitle,
			t.copyDivider,
			`${t.totalFlourRow}: ${Math.round(f.totalFlourG)}g (${t.white}: ${Math.round(f.whiteFlouG)}g, ${t.wholeWheat}: ${Math.round(f.wwFlourG)}g)`,
			`${t.water}: ${Math.round(f.totalWaterG)}g (${f.finalHydrationPct.toFixed(1)}%)`,
			`${t.saltRow}: ${Math.round(f.saltG)}g`,
			`${t.starter}: ${Math.round(f.starterTotalG)}g`,
			'',
			t.copyScheduleHeader,
			t.copyScheduleDivider,
			...scheduleLines,
			'',
			t.copyAssumptionsHeader,
			t.copyAssumptionsDivider,
			...assumptionLines,
			'',
			t.copyFooter
		].join('\n');
	}

	async function copyRecipe() {
		try {
			await navigator.clipboard.writeText(buildCopyText());
			copied = true;
			setTimeout(() => (copied = false), 2500);
		} catch {
			// fallback: select a hidden textarea
		}
	}

	function openAssumptions() {
		assumptionsOpen.set(true);
	}

	function toggleLang(target: 'en' | 'es' | 'sv') {
		lang.set(target);
	}

	const totalFlour = $derived($inputs.totalFlourInputG);
</script>

<svelte:head>
	<title>DoughCulator</title>
</svelte:head>

<!-- App shell -->
<div class="min-h-screen bg-stone-50">
	<!-- Header -->
	<header class="bg-white border-b border-stone-100 sticky top-0 z-30">
		<div class="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
			<div class="flex items-center gap-3">
				<span class="text-2xl" aria-hidden="true">🍞</span>
				<div>
					<h1 class="text-base font-bold text-stone-800 leading-tight">DoughCulator</h1>
					<p class="text-xs text-stone-400 leading-tight">{t.appSubtitle}</p>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<!-- Language toggle -->
				<div
					class="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-200 text-stone-600"
					aria-label="Select language"
				>
					<button type="button" onclick={() => toggleLang('en')} class:text-amber-600={$lang === 'en'} class="hover:text-amber-500 transition-colors">EN</button>
					<span class="text-stone-300">/</span>
					<button type="button" onclick={() => toggleLang('es')} class:text-amber-600={$lang === 'es'} class="hover:text-amber-500 transition-colors">ES</button>
					<span class="text-stone-300">/</span>
					<button type="button" onclick={() => toggleLang('sv')} class:text-amber-600={$lang === 'sv'} class="hover:text-amber-500 transition-colors">SV</button>
				</div>
				<button
					type="button"
					onclick={openAssumptions}
					class="text-xs px-3 py-1.5 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors font-medium"
				>
					{t.assumptions}
				</button>
				<button
					type="button"
					onclick={copyRecipe}
					disabled={totalFlour <= 0}
					class="text-xs px-3 py-1.5 rounded-full font-semibold transition-all"
					class:bg-emerald-500={copied}
					class:bg-amber-500={!copied && totalFlour > 0}
					class:text-white={copied || (!copied && totalFlour > 0)}
					class:bg-stone-200={totalFlour <= 0}
					class:text-stone-400={totalFlour <= 0}
					class:cursor-not-allowed={totalFlour <= 0}
				>
					{copied ? t.copied : t.copyRecipe}
				</button>
			</div>
		</div>
	</header>

	<!-- Main content -->
	<main class="max-w-2xl mx-auto px-4 py-6 space-y-4">
		<!-- Input section -->
		<InputSection />

		{#if totalFlour > 0}
			<!-- Warnings (shown first if any) -->
			<WarningsCard warnings={$result.warnings} />

			<!-- Formula -->
			<FormulaCard formula={$result.formula} />

			<!-- Timing -->
			<TimingCard
				timing={$result.timing}
				formula={$result.formula}
				proofMethod={$inputs.proofMethod}
			/>

			<!-- Schedule -->
			<ScheduleCard
				steps={$result.schedule}
				scheduleMode={$inputs.scheduleMode}
				startTime={$inputs.scheduleMode === 'clock' ? ($inputs.startTime ?? '08:00') : null}
			/>

			<!-- Guidance -->
			<GuidanceCard crumbGoal={$inputs.crumbGoal} />
		{:else}
			<!-- Empty state -->
			<div class="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 p-10 text-center">
				<div class="text-4xl mb-3" aria-hidden="true">⚖️</div>
				<p class="text-stone-600 font-medium">{t.emptyStateTitle}</p>
				<p class="text-stone-400 text-sm mt-1">{t.emptyStateSubtitle}</p>
			</div>
		{/if}
	</main>

	<!-- Footer -->
	<footer class="max-w-2xl mx-auto px-4 py-8 text-center text-xs text-stone-400">
		<p>{t.footerLine1}</p>
		<p class="mt-1">{t.footerLine2}</p>
	</footer>
</div>

<!-- Assumptions drawer (portal-like, rendered at body level) -->
<AssumptionsDrawer assumptions={$result.assumptions} />

<style lang="scss">
	// No extra styles needed — Tailwind handles everything
</style>
