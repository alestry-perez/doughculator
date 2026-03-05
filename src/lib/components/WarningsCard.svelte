<script lang="ts">
	import type { WarningMessage } from '$lib/calculator';
	import { lang } from '$lib/store';
	import { translations } from '$lib/i18n';

	const t = $derived(translations[$lang]);

	let { warnings }: { warnings: WarningMessage[] } = $props();
</script>

{#if warnings.length > 0}
	<div class="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 p-5 space-y-3">
		<h2 class="text-base font-semibold text-stone-700 uppercase tracking-wide">{t.notesWarnings}</h2>
		{#each warnings as w}
			<div
				class="flex gap-3 rounded-xl px-4 py-3 text-sm"
				class:bg-blue-50={w.level === 'info'}
				class:text-blue-800={w.level === 'info'}
				class:bg-amber-50={w.level === 'warn'}
				class:text-amber-800={w.level === 'warn'}
				class:bg-red-50={w.level === 'danger'}
				class:text-red-800={w.level === 'danger'}
			>
				<span class="mt-0.5 shrink-0 text-base leading-none">
					{#if w.level === 'info'}ℹ{:else if w.level === 'warn'}⚠{:else}✕{/if}
				</span>
				<p class="leading-snug">{w.message}</p>
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	// No extra styles needed — Tailwind handles it
</style>
