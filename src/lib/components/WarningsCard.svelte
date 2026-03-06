<script lang="ts">
	import type { WarningMessage } from '$lib/calculator';
	import { lang } from '$lib/store';
	import { translations } from '$lib/i18n';

	const t = $derived(translations[$lang]);

	let { warnings }: { warnings: WarningMessage[] } = $props();

	// Map warning level to daisyUI alert variant
	const alertVariant: Record<string, string> = {
		info: 'alert-info alert-soft',
		warn: 'alert-warning alert-soft',
		danger: 'alert-error alert-soft'
	};
</script>

{#if warnings.length > 0}
	<div class="card bg-base-100 shadow-sm ring-1 ring-base-300/70">
		<div class="card-body p-5 gap-3">
			<h2 class="text-base font-semibold text-base-content uppercase tracking-wide">{t.notesWarnings}</h2>
			{#each warnings as w}
				<div class="alert {alertVariant[w.level] ?? 'alert-info'} text-sm py-3 px-4">
					<span class="shrink-0 text-base leading-none">
						{#if w.level === 'info'}ℹ{:else if w.level === 'warn'}⚠{:else}✕{/if}
					</span>
					<p class="leading-snug">{w.message}</p>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	// No extra styles needed — daisyUI handles it
</style>
