<script lang="ts">
  import type {ScheduleStep} from '$lib/calculator';
  import {formatMins, addMinsToTime} from '$lib/calculator';
  import {lang} from '$lib/store';
  import {translations} from '$lib/i18n';

  const t = $derived(translations[$lang]);

  let {
    steps,
    scheduleMode,
    startTime,
  }: {
    steps: ScheduleStep[];
    scheduleMode: 'relative' | 'clock';
    startTime: string | null;
  } = $props();

  // ------------------------------------------------------------------
  // Completion state — local only, resets only when step content changes
  // ------------------------------------------------------------------
  let completedSteps = $state<Set<number>>(new Set());
  let completedSets = $state<Map<number, Set<number>>>(new Map());

  let lastStepsHash = $state('');

  $effect(() => {
    const hash = JSON.stringify(steps.map(s => s.label + '|' + s.durationMins + '|' + s.rangeMinMins));
    if (hash !== lastStepsHash) {
      lastStepsHash = hash;
      completedSteps = new Set();
      completedSets = new Map();
    }
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

  function toggleSet(stepIndex: number, setIndex: number) {
    const nextMap = new Map(completedSets);
    const setDone = new Set(nextMap.get(stepIndex) ?? []);
    if (setDone.has(setIndex)) {
      setDone.delete(setIndex);
    } else {
      setDone.add(setIndex);
    }
    nextMap.set(stepIndex, setDone);
    completedSets = nextMap;

    // Auto-complete the parent step when every set has been ticked off
    const totalSets = steps[stepIndex]?.setCount ?? 0;
    if (totalSets > 0 && setDone.size === totalSets) {
      const nextSteps = new Set(completedSteps);
      nextSteps.add(stepIndex);
      completedSteps = nextSteps;
    }
  }

  function isSetDone(stepIndex: number, setIndex: number): boolean {
    return completedSets.get(stepIndex)?.has(setIndex) ?? false;
  }

  // ------------------------------------------------------------------
  // Build cumulative clock times
  // ------------------------------------------------------------------
  interface StepDisplay {
    step: ScheduleStep;
    clockTime: string | null;
    endClockTime: string | null;
    topLevelIndex: number; // index among top-level steps only
  }

  const stepsWithTimes = $derived.by(() => {
    let topLevelCounter = 0;
    if (scheduleMode !== 'clock' || !startTime) {
      return steps.map((s) => {
        const topLevelIndex = s.isSubStep ? -1 : topLevelCounter++;
        return {step: s, clockTime: null, endClockTime: null, topLevelIndex} as StepDisplay;
      });
    }

    let cumulativeMins = 0;
    return steps.map((s) => {
      const topLevelIndex = s.isSubStep ? -1 : topLevelCounter++;
      const clockTime = addMinsToTime(startTime, cumulativeMins);
      const durMins = s.durationMins ?? (s.rangeMinMins != null ? s.rangeMinMins : 0);
      cumulativeMins += durMins;
      const endClockTime = addMinsToTime(startTime, cumulativeMins);
      return {step: s, clockTime, endClockTime, topLevelIndex} as StepDisplay;
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

<div class="shadow-sm card bg-base-100 ring-1 ring-base-300/70">
  <div class="p-5 card-body">
    <h2 class="mb-1 text-base font-semibold tracking-wide uppercase text-base-content">{t.schedule}</h2>
    <p class="mb-3 text-xs italic text-base-content/60">{t.scheduleComplete}</p>

    <ol class="relative space-y-0">
      {#each stepsWithTimes as { step, clockTime, endClockTime, topLevelIndex }, i}
        {#if step.isSubStep}
          <!-- Sub-step: stretch & fold nested under Bulk Fermentation -->
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
          <!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
          <li
            class="relative flex gap-3 pb-3 cursor-pointer select-none group pl-11"
            onclick={() => toggleStep(i)}
            onkeydown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleStep(i);
              }
            }}
            role="checkbox"
            aria-checked={completedSteps.has(i)}
            tabindex="0"
          >
            <!-- Vertical connector line continuing from parent -->
            <div class="absolute top-0 bottom-0 w-px left-4 bg-secondary/20"></div>

            <!-- Sub-step marker: small diamond -->
            <div
              class="shrink-0 w-5 h-5 rounded-sm rotate-45 text-[9px] font-bold flex items-center justify-center z-10 transition-colors mt-0.5
							{completedSteps.has(i) ? 'bg-success/15 text-success' : 'bg-secondary/10 text-secondary/70 group-hover:bg-secondary/20'}"
            >
              <span class="-rotate-45">
                {#if completedSteps.has(i)}
                  &#10003;
                {/if}
              </span>
            </div>

            <div class="flex-1 min-w-0 transition-opacity {completedSteps.has(i) ? 'opacity-50' : ''}">
              <div class="flex items-start justify-between gap-2">
                <span
                  class="text-xs font-medium leading-tight transition-colors
									{completedSteps.has(i) ? 'text-base-content/40 line-through' : 'text-base-content/80'}"
                >
                  {step.label}
                </span>
                <div class="text-right shrink-0">
                  {#if scheduleMode === 'clock' && clockTime}
                    <div class="text-xs tabular-nums {completedSteps.has(i) ? 'text-base-content/40 line-through' : 'text-secondary/70'}">{clockTime}</div>
                  {:else}
                    <div class="text-xs tabular-nums {completedSteps.has(i) ? 'text-base-content/40 line-through' : 'text-secondary/70'}">{durationLabel(step)}</div>
                  {/if}
                </div>
              </div>
              {#if step.notes}
                <p class="text-[11px] mt-0.5 leading-snug {completedSteps.has(i) ? 'text-base-content/25 line-through' : 'text-base-content/55'}">{step.notes}</p>
              {/if}
            </div>
          </li>
        {:else}
          <!-- Top-level step -->
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
          <!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
          <li
            class="relative flex gap-4 pb-5 cursor-pointer select-none group"
            onclick={() => toggleStep(i)}
            onkeydown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleStep(i);
              }
            }}
            role="checkbox"
            aria-checked={completedSteps.has(i)}
            tabindex="0"
          >
            <!-- Timeline line -->
            {#if i < stepsWithTimes.length - 1}
              <div class="absolute bottom-0 w-px left-4 top-8 bg-secondary/20"></div>
            {/if}

            <!-- Step number bubble / checkmark -->
            <div
              class="shrink-0 w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center z-10 transition-colors
							{completedSteps.has(i) ? 'bg-success/15 text-success' : 'bg-secondary/15 text-secondary group-hover:bg-secondary/25'}"
            >
              {#if completedSteps.has(i)}
                &#10003;
              {:else}
                {topLevelIndex + 1}
              {/if}
            </div>

            <div class="flex-1 min-w-0 transition-opacity {completedSteps.has(i) ? 'opacity-50' : ''}">
              <div class="flex items-start justify-between gap-2">
                <span
                  class="text-sm font-semibold leading-tight transition-colors
									{completedSteps.has(i) ? 'text-base-content/50 line-through' : 'text-base-content'}"
                >
                  {step.label}
                </span>
                <div class="text-right shrink-0">
                  {#if scheduleMode === 'clock' && clockTime}
                    <div class="text-xs font-bold tabular-nums {completedSteps.has(i) ? 'text-base-content/50 line-through' : 'text-secondary'}">{clockTime}</div>
                    {#if endClockTime && endClockTime !== clockTime}
                      <div class="text-xs text-base-content/50 tabular-nums {completedSteps.has(i) ? 'line-through' : ''}">→ {endClockTime}</div>
                    {/if}
                  {:else}
                    <div class="text-xs font-bold tabular-nums {completedSteps.has(i) ? 'text-base-content/50 line-through' : 'text-secondary'}">{durationLabel(step)}</div>
                  {/if}
                </div>
              </div>
              {#if step.notes}
                <p class="text-xs mt-1 leading-snug {completedSteps.has(i) ? 'text-base-content/30 line-through' : 'text-base-content/70'}">{step.notes}</p>
              {/if}
              {#if step.setCount && !completedSteps.has(i)}
                <div class="flex flex-wrap items-center gap-2 mt-2">
                  {#each Array.from({length: step.setCount}, (_, si) => si) as si}
                    <button
                      class="w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center transition-colors {isSetDone(i, si) ? 'bg-success/15 text-success' : 'bg-secondary/15 text-secondary hover:bg-secondary/25'}"
                      onclick={(e) => {
                        e.stopPropagation();
                        toggleSet(i, si);
                      }}
                    >
                      {#if isSetDone(i, si)}
                        &#10003;
                      {:else}
                        {si + 1}
                      {/if}
                    </button>
                  {/each}
                </div>
              {/if}
            </div>
          </li>
        {/if}
      {/each}
    </ol>
  </div>
</div>

<style lang="scss">
  // No extra styles needed
</style>
