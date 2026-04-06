<script lang="ts">
	import { inputs, result, assumptionsOpen, lang } from '$lib/store';
	import { translations } from '$lib/i18n';
	import { formatMins } from '$lib/calculator';
	import InputSection from '$lib/components/InputSection.svelte';
	import FormulaCard from '$lib/components/FormulaCard.svelte';
	import TimingCard from '$lib/components/TimingCard.svelte';
	import ScheduleCard from '$lib/components/ScheduleCard.svelte';
	import GuidanceCard from '$lib/components/GuidanceCard.svelte';
	import AssumptionsDrawer from '$lib/components/AssumptionsDrawer.svelte';

	const t = $derived(translations[$lang]);

	interface BeforeInstallPromptEvent extends Event {
		prompt: () => Promise<void>;
		userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
	}

	let copied = $state(false);
	let deferredInstallPrompt = $state<BeforeInstallPromptEvent | null>(null);
	let installHelpOpen = $state(false);
	let installState = $state<'idle' | 'accepted' | 'dismissed' | 'installed'>('idle');

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
			`${t.totalFlourRow}: ${Math.round(f.totalFlourG)}g (${$inputs.flourBlend.map(e => `${t.flourTypes[e.type] ?? e.type}: ${Math.round(f.totalFlourG * e.pct / 100)}g`).join(', ')})`,
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
		const text = buildCopyText();
		try {
			if (!navigator.clipboard?.writeText) {
				throw new Error('Clipboard API unavailable');
			}
			await navigator.clipboard.writeText(text);
			copied = true;
			setTimeout(() => (copied = false), 2500);
		} catch {
			// Mobile fallback for browsers where navigator.clipboard is blocked/unavailable.
			const textarea = document.createElement('textarea');
			textarea.value = text;
			textarea.setAttribute('readonly', '');
			textarea.style.position = 'fixed';
			textarea.style.opacity = '0';
			textarea.style.pointerEvents = 'none';
			document.body.appendChild(textarea);
			textarea.focus();
			textarea.select();

			try {
				const copiedWithFallback = document.execCommand('copy');
				if (copiedWithFallback) {
					copied = true;
					setTimeout(() => (copied = false), 2500);
				}
			} finally {
				document.body.removeChild(textarea);
			}
		}
	}

	function openAssumptions() {
		assumptionsOpen.set(true);
	}

	function toggleLang(target: 'en' | 'es' | 'sv') {
		lang.set(target);
	}

	function isStandaloneMode() {
		if (typeof window === 'undefined') return false;
		const navigatorWithStandalone = navigator as Navigator & { standalone?: boolean };
		return (
			window.matchMedia('(display-mode: standalone)').matches ||
			navigatorWithStandalone.standalone === true
		);
	}

	async function promptInstall() {
		if (isStandaloneMode()) {
			installState = 'installed';
			return;
		}

		if (!deferredInstallPrompt) {
			installHelpOpen = true;
			return;
		}

		await deferredInstallPrompt.prompt();
		const { outcome } = await deferredInstallPrompt.userChoice;
		installState = outcome;
		deferredInstallPrompt = null;
		installHelpOpen = false;
	}

	function closeInstallHelp() {
		installHelpOpen = false;
	}

	const totalFlour = $derived($inputs.totalFlourInputG);

	let darkMode = $state(false);

	$effect(() => {
		if (isStandaloneMode()) {
			installState = 'installed';
			deferredInstallPrompt = null;
			return;
		}

		const onBeforeInstallPrompt = (event: Event) => {
			const installEvent = event as BeforeInstallPromptEvent;
			installEvent.preventDefault();
			deferredInstallPrompt = installEvent;
			installState = 'idle';
		};

		const onAppInstalled = () => {
			installState = 'installed';
			deferredInstallPrompt = null;
			installHelpOpen = false;
		};

		window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt as EventListener);
		window.addEventListener('appinstalled', onAppInstalled);

		return () => {
			window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt as EventListener);
			window.removeEventListener('appinstalled', onAppInstalled);
		};
	});

	$effect(() => {
		darkMode = localStorage.getItem('theme') === 'dark';
	});

	$effect(() => {
		const theme = darkMode ? 'dark' : 'bumblebee';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	});
</script>

<svelte:head>
	<title>DoughCulator</title>
</svelte:head>

<!-- App shell -->
<div class="min-h-screen bg-gradient-to-b from-base-200 via-base-200 to-base-300/40">
	<!-- Header -->
	<header class="bg-neutral/95 text-neutral-content border-b border-primary/25 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-neutral/90 sticky top-0 z-30">
		{#if installState !== 'installed'}
			<div class="install-cta-row border-b border-neutral-content/15 bg-neutral/70">
				<div class="max-w-2xl mx-auto px-4 py-2 flex justify-end">
					<button
						type="button"
						onclick={promptInstall}
						class="btn btn-xs sm:btn-sm rounded-full shadow-sm {deferredInstallPrompt
							? 'btn-primary'
							: 'btn-outline border-neutral-content/30 text-neutral-content hover:border-neutral-content/45 hover:bg-neutral-content/10 hover:text-neutral-content'}"
					>
						{t.saveToHomeScreen}
					</button>
				</div>
			</div>
		{/if}
		<div class="max-w-2xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-y-3">
			<div class="flex items-center gap-3 min-w-0">
				<span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-xl text-primary ring-1 ring-primary/35" aria-hidden="true">🍞</span>
				<div>
					<h1 class="text-base font-bold text-neutral-content leading-tight">DoughCulator</h1>
					<p class="text-xs text-neutral-content/70 leading-tight">{t.appSubtitle}</p>
				</div>
			</div>
			<div class="flex items-center flex-wrap justify-end gap-2">
				<!-- Dark mode toggle -->
				<label
					class="swap swap-rotate inline-grid h-9 w-9 place-items-center rounded-full border border-transparent bg-transparent text-neutral-content/75 transition-colors duration-200 hover:border-neutral-content/35 hover:bg-neutral-content/10 hover:text-neutral-content focus-within:border-primary/45 focus-within:ring-2 focus-within:ring-primary/55 focus-within:ring-offset-2 focus-within:ring-offset-neutral/95"
					aria-label={t.ariaLabels.toggleDarkMode}
				>
					<input
						type="checkbox"
						bind:checked={darkMode}
						class="sr-only appearance-none"
					/>
					<!-- Sun icon — shown when dark mode is active -->
					<svg class="swap-on h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
					</svg>
					<!-- Moon icon — shown when light mode is active -->
					<svg class="swap-off h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
					</svg>
				</label>
				<!-- Language toggle -->
				<div class="join border border-neutral-content/25 rounded-full bg-neutral-content/5 p-0.5" aria-label={t.ariaLabels.selectLanguage}>
					<button
						type="button"
						onclick={() => toggleLang('en')}
						class="btn btn-xs join-item rounded-l-full border-0 {$lang === 'en' ? 'btn-primary' : 'btn-ghost text-neutral-content/70 hover:text-neutral-content hover:bg-neutral-content/10'}"
					>EN</button>
					<button
						type="button"
						onclick={() => toggleLang('es')}
						class="btn btn-xs join-item border-0 {$lang === 'es' ? 'btn-primary' : 'btn-ghost text-neutral-content/70 hover:text-neutral-content hover:bg-neutral-content/10'}"
					>ES</button>
					<button
						type="button"
						onclick={() => toggleLang('sv')}
						class="btn btn-xs join-item rounded-r-full border-0 {$lang === 'sv' ? 'btn-primary' : 'btn-ghost text-neutral-content/70 hover:text-neutral-content hover:bg-neutral-content/10'}"
					>SV</button>
				</div>
				<button
					type="button"
					onclick={openAssumptions}
					class="btn btn-outline btn-sm rounded-full border-neutral-content/25 text-neutral-content/80 hover:border-neutral-content/40 hover:bg-neutral-content/10 hover:text-neutral-content"
				>
					{t.assumptions}
				</button>
				<button
					type="button"
					onclick={copyRecipe}
					disabled={totalFlour <= 0}
					class="btn btn-sm rounded-full shadow-sm {copied ? 'btn-success' : totalFlour > 0 ? 'btn-primary' : 'btn-disabled'}"
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
			<!-- Formula -->
			<FormulaCard formula={$result.formula} flourBlend={$inputs.flourBlend} />

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
			<div class="card bg-base-100/95 shadow-sm ring-1 ring-base-300/70">
				<div class="card-body items-center text-center">
					<div class="text-4xl mb-3" aria-hidden="true">⚖️</div>
					<p class="text-base-content/70 font-medium">{t.emptyStateTitle}</p>
					<p class="text-base-content/50 text-sm mt-1">{t.emptyStateSubtitle}</p>
				</div>
			</div>
		{/if}
	</main>

	<!-- Footer -->
	<footer class="max-w-2xl mx-auto px-4 py-8 text-center text-xs text-base-content/60">
		<p>{t.footerLine1}</p>
		<p class="mt-1">{t.footerLine2}</p>
		<div class="mt-6 flex justify-center">
			<a href="https://www.buymeacoffee.com/alestryperez" target="_blank" rel="noopener noreferrer">
				<img
					src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
					alt="Buy Me A Coffee"
					style="height: 60px !important; width: 217px !important;"
					loading="lazy"
				/>
			</a>
		</div>
	</footer>

	{#if installHelpOpen}
		<dialog class="modal modal-open" aria-modal="true" aria-labelledby="install-help-title">
			<div class="modal-box max-w-lg">
				<h3 id="install-help-title" class="text-lg font-semibold">{t.installHelpTitle}</h3>
				<p class="mt-2 text-sm text-base-content/80">{t.installHelpIntro}</p>
				<ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-base-content/90">
					<li>{t.installHelpIOS}</li>
					<li>{t.installHelpAndroid}</li>
					<li>{t.installHelpDesktop}</li>
				</ul>
				<div class="modal-action">
					<button type="button" class="btn btn-primary btn-sm rounded-full" onclick={closeInstallHelp}>
						{t.close}
					</button>
				</div>
			</div>
			<form method="dialog" class="modal-backdrop">
				<button type="button" aria-label={t.close} onclick={closeInstallHelp}>{t.close}</button>
			</form>
		</dialog>
	{/if}
</div>

<!-- Assumptions drawer (portal-like, rendered at body level) -->
<AssumptionsDrawer assumptions={$result.assumptions} />

<style lang="scss">
	@media (display-mode: standalone) {
		.install-cta-row {
			display: none;
		}
	}
</style>
