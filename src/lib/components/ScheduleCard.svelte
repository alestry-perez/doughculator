<script lang="ts">
	import type { ScheduleStep } from '$lib/calculator';
	import { formatMins, addMinsToTime } from '$lib/calculator';

	let { steps, scheduleMode, startTime }: {
		steps: ScheduleStep[];
		scheduleMode: 'relative' | 'clock';
		startTime: string | null;
	} = $props();

	// Build cumulative clock times
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
	<h2 class="text-base font-semibold text-stone-700 uppercase tracking-wide mb-4">Schedule</h2>

	<ol class="relative space-y-0">
		{#each stepsWithTimes as { step, clockTime, endClockTime }, i}
			<li class="flex gap-4 pb-5 relative">
				<!-- Timeline line -->
				{#if i < stepsWithTimes.length - 1}
					<div class="absolute left-4 top-8 bottom-0 w-px bg-stone-100"></div>
				{/if}

				<!-- Step number bubble -->
				<div class="shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center z-10">
					{i + 1}
				</div>

				<div class="flex-1 min-w-0">
					<div class="flex items-start justify-between gap-2">
						<span class="text-sm font-semibold text-stone-800 leading-tight">{step.label}</span>
						<div class="shrink-0 text-right">
							{#if scheduleMode === 'clock' && clockTime}
								<div class="text-xs font-bold text-amber-700 tabular-nums">{clockTime}</div>
								{#if endClockTime && endClockTime !== clockTime}
									<div class="text-xs text-stone-400 tabular-nums">→ {endClockTime}</div>
								{/if}
							{:else}
								<div class="text-xs font-bold text-amber-700 tabular-nums">{durationLabel(step)}</div>
							{/if}
						</div>
					</div>
					{#if step.notes}
						<p class="text-xs text-stone-500 mt-1 leading-snug">{step.notes}</p>
					{/if}
				</div>
			</li>
		{/each}
	</ol>
</div>

<style lang="scss">
	// No extra styles needed
</style>
