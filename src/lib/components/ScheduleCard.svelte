<script lang="ts">
	import type { ScheduleStep } from '$lib/calculator';
	import { formatMins, addMinsToTime } from '$lib/calculator';
	import { lang } from '$lib/store';
	import { translations } from '$lib/i18n';

	const t = $derived(translations[$lang]);

	let { steps, scheduleMode, startTime }: {
		steps: ScheduleStep[];
		scheduleMode: 'relative' | 'clock';
		startTime: string | null;
	} = $props();

	// ------------------------------------------------------------------
	// Completion state — local only, resets whenever `steps` changes
	// ------------------------------------------------------------------
	let completedSteps = $state<Set<number>>(new Set());

	$effect(() => {
		// Re-run whenever `steps` identity changes (new calc result)
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		steps;
		completedSteps = new Set();
	});

	function toggleStep(index: number) {
		const next = new Set(completedSteps);
		if (next.has(index)) {
			next.delete(index);
		} else {
			next.add(index);
		}
		completedSteps = next;
	}

	// ------------------------------------------------------------------
	// Build cumulative clock times
	// ------------------------------------------------------------------
	interface StepDisplay {
		step: ScheduleStep;
		clockTime: string | null;
		endClockTime: string | null;
	}

	const stepsWithTimes = $derived.by(() => {
		if (scheduleMode !== 'clock' || !startTime) {
			return steps.map((s) => ({ step: s, clockTime: null, endClockTime: null } as StepDisplay));
		}

		let cumulativeMins = 0;
		return steps.map((s) => {
			const clockTime = addMinsToTime(startTime, cumulativeMins);
			const durMins = s.durationMins ?? (s.rangeMinMins != null ? s.rangeMinMins : 0);
			cumulativeMins += durMins;
			const endClockTime = addMinsToTime(startTime, cumulativeMins);
			return { step: s, clockTime, endClockTime } as StepDisplay;
		});
	});

	function durationLabel(s: ScheduleStep): string {
		if (s.durationMins !== null && s.durationMins !== undefined) {
			return formatMins(s.durationMins);
		}
		if (s.rangeMinMins !== undefined && s.rangeMaxMins !== undefined) {
			return `${formatMins(s.rangeMinMins)} – ${formatMins(s.rangeMaxMins)}`;
		}
		return '';
	}
</script>

<div class="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 p-5">
	<h2 class="text-base font-semibold text-stone-700 uppercase tracking-wide mb-1">{t.schedule}</h2>
	<p class="text-xs italic text-stone-400 mb-3">press to complete</p>

	<ol class="relative space-y-0">
		{#each stepsWithTimes as { step, clockTime, endClockTime }, i}
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
			<li
				class="flex gap-4 pb-5 relative group cursor-pointer select-none"
				onclick={() => toggleStep(i)}
				onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleStep(i); } }}
				role="checkbox"
				aria-checked={completedSteps.has(i)}
				tabindex="0"
			>
				<!-- Timeline line -->
				{#if i < stepsWithTimes.length - 1}
					<div class="absolute left-4 top-8 bottom-0 w-px bg-stone-100"></div>
				{/if}

				<!-- Step number bubble / checkmark -->
				<div class="shrink-0 w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center z-10 transition-colors
					{completedSteps.has(i)
						? 'bg-stone-200 text-stone-400'
						: 'bg-amber-100 text-amber-700 group-hover:bg-amber-200'}">
					{#if completedSteps.has(i)}
						&#10003;
					{:else}
						{i + 1}
					{/if}
				</div>

				<div class="flex-1 min-w-0 transition-opacity {completedSteps.has(i) ? 'opacity-50' : ''}">
					<div class="flex items-start justify-between gap-2">
						<span class="text-sm font-semibold leading-tight transition-colors
							{completedSteps.has(i) ? 'text-stone-400 line-through' : 'text-stone-800'}">
							{step.label}
						</span>
						<div class="shrink-0 text-right">
							{#if scheduleMode === 'clock' && clockTime}
								<div class="text-xs font-bold tabular-nums {completedSteps.has(i) ? 'text-stone-400 line-through' : 'text-amber-700'}">{clockTime}</div>
								{#if endClockTime && endClockTime !== clockTime}
									<div class="text-xs text-stone-400 tabular-nums {completedSteps.has(i) ? 'line-through' : ''}">→ {endClockTime}</div>
								{/if}
							{:else}
								<div class="text-xs font-bold tabular-nums {completedSteps.has(i) ? 'text-stone-400 line-through' : 'text-amber-700'}">{durationLabel(step)}</div>
							{/if}
						</div>
					</div>
					{#if step.notes}
						<p class="text-xs mt-1 leading-snug {completedSteps.has(i) ? 'text-stone-300 line-through' : 'text-stone-500'}">{step.notes}</p>
					{/if}
				</div>
			</li>
		{/each}
	</ol>
</div>

<style lang="scss">
	// No extra styles needed
</style>
