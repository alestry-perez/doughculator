# Doughculator — Independent Verification & Remediation Plan

> Verified directly against `src/lib/calculator.ts` (695 lines) and `src/lib/i18n.ts`.
> All line numbers reference `calculator.ts` unless noted.

---

## 1. Executive Summary

10 findings were audited. **8 are confirmed**, 1 is intentional-by-design (misdiagnosed as a bug), and 1 is partially false.

| # | Finding | Verdict | Severity |
|---|---------|---------|---------|
| 1 | Einkorn absorptionCoeff = 1.12 | **CONFIRMED BUG** | Critical |
| 2 | Room proof missing blendFermentMult | **CONFIRMED BUG** | Critical |
| 3 | Spelt absorptionCoeff = 0.95 | **CONFIRMED WEAK** | Significant |
| 4 | WholeWheat fermentMult = 0.95 | **CONFIRMED WEAK** | Significant |
| 5 | Cold retard ignores fridgeTempC | **CONFIRMED** | Significant |
| 6 | FlavorDevelopment inverted cold inoculation | **NOT A BUG — intentional design** | — |
| 7 | "Freezing" label at <18°C | **CONFIRMED UX BUG** | Moderate |
| 8 | foldCount never used in schedule | **CONFIRMED DEAD CODE** | Low |
| 9 | Open crumb + 100% rye no warning | **CONFIRMED MISSING GUARD** | Moderate |
| 10 | Autolyse doesn't clarify starter inclusion | **PARTIALLY FALSE** | Low |

**Two prior audit summaries contained one error each:**
- Both claimed "room proof also missing inocScale" — FALSE. `inocScale` is present on lines 395–396.
- Finding 6 was labeled "inverted logic" — it is intentional ultra-slow philosophy design, not a bug.

---

## 2. Verification Table

### Finding 1 — Einkorn absorptionCoeff = 1.12
**Status: CONFIRMED BUG**

**Code (line 29):**
```ts
Einkorn: { absorptionCoeff: 1.12, fermentMult: 0.90 },
```

This value is identical to WholeWheat (line 26). Einkorn (*Triticum monococcum*) is an ancient wheat with small, round kernels and relatively weak gluten. Published einkorn recipes consistently target 55–65% hydration — substantially below modern wheat. Setting absorptionCoeff to 1.12 adds ~12% extra water relative to a 1.00 baseline, which is appropriate for whole wheat but over-hydrates einkorn doughs by roughly 20–25%.

- **Baking impact:** Doughs will be slack and unworkable. Einkorn's weak gluten cannot handle excess water; the dough will not hold structure for shaping.
- **Product impact:** Any user selecting Einkorn will receive a formula that produces pan-spreading, unshapeable dough.
- **Scientifically sound alternative:** 0.85–0.88. This is a practical heuristic, not laboratory-derived, but aligns with published einkorn formulas from Jovial Foods, King Arthur, and academic grain research. Cannot be stated as "scientifically exact."
- **Type:** Incorrect constant.

---

### Finding 2 — Room proof missing blendFermentMult
**Status: CONFIRMED BUG**

**Bulk timing (lines 374–375):**
```ts
const bulkMin = bulkBaseMin * hydrationMult * inocScale * blendFermentMult;
const bulkMax = bulkBaseMax * hydrationMult * inocScale * blendFermentMult;
```

**Room proof timing (lines 395–396):**
```ts
const proofMin = proofBaseMin * proofTempMult * hydrationMult * inocScale;
const proofMax = proofBaseMax * proofTempMult * hydrationMult * inocScale;
```

`blendFermentMult` is absent from proof. For a 100% rye dough, `blendFermentMult = 0.72`, meaning bulk correctly shortens by 28%, but room proof stays at full duration — a systematic overestimate of ~39% for high-rye loaves.

- **Baking impact:** User told to proof for too long. Rye + WW loaves will over-proof during room proof mode.
- **Product impact:** High whole-grain users choosing Room Proof will get over-proofed, collapsed loaves.
- **Correction:** Add `* blendFermentMult` to both proof lines. One-line fix, low regression risk.
- **Type:** Missing factor in formula, control-flow gap.

**Note on inocScale:** `inocScale` IS correctly present on lines 395–396. Previous summaries claiming it was missing were wrong.

---

### Finding 3 — Spelt absorptionCoeff = 0.95
**Status: CONFIRMED WEAK**

**Code (line 28):**
```ts
Spelt: { absorptionCoeff: 0.95, fermentMult: 0.82 },
```

AP flour is set to 0.97 (line 25). Spelt at 0.95 implies it absorbs *less* than AP — the opposite of what most bakers experience. Spelt is extensible and absorbs similarly to or slightly more than bread flour. Common published spelt hydration targets run 70–80%, comparable to bread flour, not below AP.

- **However:** Some bakers do find spelt's extensibility means less water is needed to achieve workable dough. The value is not wildly wrong, just likely reversed relative to AP.
- **Confidence:** This is a heuristic domain. Cannot state a scientifically exact value. A value of 1.00–1.05 better represents mainstream practice.
- **Type:** Scientifically weak constant. Acceptable as a conservative heuristic but directionally questionable.

---

### Finding 4 — WholeWheat fermentMult = 0.95
**Status: CONFIRMED WEAK**

**Code (line 26):**
```ts
WholeWheat: { absorptionCoeff: 1.12, fermentMult: 0.95 },
```

A fermentMult of 0.95 means WW ferments only 5% faster than white flour. In practice, bran introduces additional enzymes (amylases, proteases), minerals, and wild microorganism populations that meaningfully accelerate fermentation. Most experienced bakers and published sourdough resources suggest WW ferments 10–20% faster at the same temperature.

- **Product impact:** WW-heavy loaves in the 30–60% WW range will have bulk times that are mildly too long. Low risk of catastrophic failure but the timing advice is imprecise.
- **Better value:** 0.82–0.88. Cannot be stated as scientifically exact — the real effect varies with bran particle size, extraction rate, and starter activity. 0.85 is a defensible midpoint.
- **Type:** Scientifically weak heuristic.

---

### Finding 5 — Cold retard ignores fridgeTempC
**Status: CONFIRMED**

**Input definition (line 49):**
```ts
fridgeTempC: number;  // default 4
```

**calcTiming signature (line 349):**
```ts
function calcTiming(formula: FormulaResult): TimingResult {
```

`fridgeTempC` lives on `Inputs` but `calcTiming` only receives `FormulaResult`. It is never threaded through. Cold retard output (lines 398–400):
```ts
// Cold retard: always [8, 16] hours
const coldRetardMin = 8;
const coldRetardMax = 16;
```

The range is hardcoded regardless of fridge temperature. A fridge at 2°C vs 7°C produces meaningfully different fermentation rates during retard (roughly 1.5–2× difference in biological activity over that span).

- **Product impact:** User is prompted for fridge temperature with implied precision, but the value is discarded. This is a misleading UX: the input creates a false impression of personalization.
- **Immediate fix option (low effort):** Remove the `fridgeTempC` input field until cold retard logic actually uses it, or add a clarifying note that the field is not yet used in calculations.
- **Proper fix (medium effort):** Model cold retard as a function of fridge temperature using a simplified Arrhenius/Q10 relationship. At 4°C baseline: 8–16h. At 2°C: extend by ~20–30%. At 7°C: shorten by ~15–20%.
- **Type:** Disconnected input / architecture gap.

---

### Finding 6 — FlavorDevelopment reduces inoculation at cold temps
**Status: NOT A BUG — INTENTIONAL DESIGN**

**Code (lines 231–233):**
```ts
if (effectiveTempC < 21) {
    inoculationPct -= 4;  // goes DOWN at cold
```

This is deliberate. The FlavorDevelopment philosophy intentionally uses *less* starter at cold temperatures to extend fermentation time and maximize flavor development — the opposite of Predictability which adds starter at cold to compensate and maintain reasonable timing.

- **Predictability at cold:** `inoculationPct += 4` (more starter → faster, more predictable bulk)
- **FlavorDevelopment at cold:** `inoculationPct -= 4` (less starter → longer, more acidic, more flavorful ferment)

Both are coherent fermentation strategies. The design is internally consistent. The finding of "inverted logic" in previous audits was incorrect.

- **Real issue:** This design intent is not documented anywhere in the UI, README, or assumption strings. Users selecting FlavorDevelopment at cold temps may be confused by unusually low inoculation recommendations.
- **Fix:** UX copy clarification, not code change. Add a tooltip or assumption note explaining the extended-ferment intent.
- **Type:** Documentation/UX gap.

---

### Finding 7 — "Freezing" label for <18°C
**Status: CONFIRMED UX BUG**

**Code (lines 205–206):**
```ts
if (effectiveTempC < 18) {
    tempBand = 'Freezing';
```

18°C is approximately 64°F — cool room temperature. Water freezes at 0°C. This label is factually wrong and potentially alarming to users. The `TempBand` type (line 9) exports this string and it likely appears in the UI.

- **Baking impact:** None — the label doesn't affect calculations.
- **Product impact:** Users baking at 17°C will see "Freezing" and may distrust the tool or be confused.
- **Fix:** Rename `'Freezing'` to `'VeryCold'` or `'SubOptimal'` in the type and all references. Add a new, accurate danger threshold if desired (e.g., <10°C = "Near Freezing"). Search: `TempBand`, `Freezing` in all `.ts`, `.svelte` files.
- **Type:** UX / terminology bug.

---

### Finding 8 — foldCount computed but never used in schedule
**Status: CONFIRMED DEAD CODE**

**Computed (line 403):**
```ts
const foldCount = Math.min(4, Math.floor((bulkMin * 60) / 30));
```

**Schedule generation (lines 455–469):**
```ts
steps.push({
    label: s.stretchFold,
    durationMins: 3 * foldIntervalMins,   // hardcoded 3
    setCount: 3
});
steps.push({
    label: s.coilFolds,
    durationMins: 2 * foldIntervalMins,   // hardcoded 2
    setCount: 2
});
```

`calcSchedule` receives `timing: TimingResult` which includes `foldCount`, but never reads it. The schedule always outputs exactly 3 S&F + 2 coil folds regardless of bulk duration or dough temperature. A 12-hour cold bulk (where `foldCount` would compute to 4) gets the same fold schedule as a 3-hour warm bulk.

- **Baking impact:** Low — the hardcoded 5-set fold schedule is reasonable for typical sourdoughs. But it's meaningless for edge cases.
- **Product impact:** `foldCount` is returned in `TimingResult` and likely displayed somewhere in the UI, but the schedule doesn't match it. Potential UI inconsistency.
- **Fix option A (simple):** Remove `foldCount` from `TimingResult` if it's not displayed anywhere. Pure dead code removal.
- **Fix option B (complete):** Wire `foldCount` into schedule generation. Adjust `setCount` on the fold steps dynamically.
- **Type:** Dead code / incomplete feature wiring.

---

### Finding 9 — Open crumb + 100% rye produces no specific warning
**Status: CONFIRMED MISSING GUARD**

**Warning code (lines 565–573):**
```ts
if (crumbGoal === 'Open') {
    warnings.push({ level: 'warn', message: w.warnOpenCrumb });
}
const ryeEntry = inputs.flourBlend.find(e => e.type === 'Rye');
if (ryeEntry && ryeEntry.pct > 30) {
    warnings.push({ level: 'warn', message: w.ryeHighWarning });
}
```

The individual warnings fire, but there is no combined check. Rye has negligible gluten — at 100% rye (or even >70%), an open crumb is physically impossible. The user would receive two separate `warn` messages but no `danger` message communicating the fundamental incompatibility.

- **Baking impact:** User proceeds with a formula that cannot produce its stated goal.
- **Fix:** Add a specific combined check:
```ts
if (crumbGoal === 'Open' && ryeEntry && ryeEntry.pct > 60) {
    warnings.push({ level: 'danger', message: 'Open crumb is not achievable above ~60% rye — rye lacks gluten structure.' });
}
```
- **Type:** Missing validation guard.

---

### Finding 10 — Autolyse never clarifies starter inclusion
**Status: PARTIALLY FALSE**

**Autolyse note in i18n.ts (line 15):**
```ts
autolyseNote: () => 'Mix flour and most of water (hold back ~50g water, all salt, all starter). Cover and rest.',
```

The note explicitly says **"hold back… all starter"** — meaning starter is excluded from autolyse. This is correct traditional autolyse technique. The finding that "it never clarifies" is incorrect.

**However, a real gap remains:** The Mix step note (line 17) says "Combine starter and water, stir until dissolved. Add flour…" but does not explicitly reference that this is where the held-back ingredients (starter, salt, 50g water) from autolyse are now added. The connection between step 1 (autolyse) and step 2 (mix) is implicit.

- **Fix:** Minor copy clarification in the Mix note when autolyse is on: "Add held-back starter, salt, and reserved water."
- **Type:** Minor UX/copy gap, not a formula issue.

---

## 3. Root-Cause Analysis

| # | Origin | Problem Type | Downstream Effects |
|---|--------|-------------|-------------------|
| 1 | `FLOUR_PROPERTIES` constant, line 29 | Incorrect constant | hydration formula, water grams, dough workability |
| 2 | `calcTiming` lines 395–396 | Missing factor in formula | `proofMin`, `proofMax` for all Room Proof users with WG flour |
| 3 | `FLOUR_PROPERTIES` constant, line 28 | Scientifically weak constant | hydration formula, but minor magnitude |
| 4 | `FLOUR_PROPERTIES` constant, line 26 | Scientifically weak constant | `bulkMin/Max`, `proofMin/Max` for WW doughs |
| 5 | `calcTiming` signature, line 349 | Architecture / missing dependency | cold retard display, misleading UX |
| 6 | `calcFormula` lines 231–233 | Design intent, undocumented | user confusion |
| 7 | `calcFormula` lines 205–206 | UX / taxonomy error | any UI that renders `tempBand` |
| 8 | `calcTiming` line 403 + `calcSchedule` | Dead code / incomplete wiring | `TimingResult.foldCount` value ignored |
| 9 | `calcWarnings` lines 565–573 | Missing validation guard | impossible formula output, no danger signal |
| 10 | `i18n.ts` line 17 | Minor copy gap | user confusion in autolyse mode only |

---

## 4. Recommended Code Changes

### FIX 1 — Einkorn absorption coefficient
**File:** `src/lib/calculator.ts`, line 29
```ts
// BEFORE
Einkorn: { absorptionCoeff: 1.12, fermentMult: 0.90 },

// AFTER
Einkorn: { absorptionCoeff: 0.87, fermentMult: 0.90 },
```
**Rationale:** 0.87 is the midpoint of the 0.85–0.90 range derived from published einkorn formulas. Document this as a practical heuristic, not a scientific constant.

**Size:** Small. **Regression risk:** Low — isolated constant.

---

### FIX 2 — Add blendFermentMult to room proof
**File:** `src/lib/calculator.ts`, lines 395–396
```ts
// BEFORE
const proofMin = proofBaseMin * proofTempMult * hydrationMult * inocScale;
const proofMax = proofBaseMax * proofTempMult * hydrationMult * inocScale;

// AFTER
const proofMin = proofBaseMin * proofTempMult * hydrationMult * inocScale * blendFermentMult;
const proofMax = proofBaseMax * proofTempMult * hydrationMult * inocScale * blendFermentMult;
```
**Size:** Small (2-character change per line). **Regression risk:** Low — brings proof in line with bulk logic. Will shorten proof times for WG users, which is the correct direction.

---

### FIX 3 — Spelt absorption coefficient
**File:** `src/lib/calculator.ts`, line 28
```ts
// BEFORE
Spelt: { absorptionCoeff: 0.95, fermentMult: 0.82 },

// AFTER
Spelt: { absorptionCoeff: 1.02, fermentMult: 0.82 },
```
**Rationale:** 1.02 places spelt slightly above AP (0.97) and slightly below WW (1.12), which reflects mainstream practice. This is a heuristic — document as such.

**Size:** Small. **Regression risk:** Low. Will produce slightly higher hydration for spelt blends.

---

### FIX 4 — WholeWheat fermentation multiplier
**File:** `src/lib/calculator.ts`, line 26
```ts
// BEFORE
WholeWheat: { absorptionCoeff: 1.12, fermentMult: 0.95 },

// AFTER
WholeWheat: { absorptionCoeff: 1.12, fermentMult: 0.85 },
```
**Rationale:** 0.85 represents a 15% fermentation acceleration — midpoint of the 10–20% range reported in practice. Document as a heuristic.

**Size:** Small. **Regression risk:** Medium — will shorten bulk and proof times for WW users. Test at 20%, 50%, and 100% WW blends.

---

### FIX 5 — Cold retard: remove misleading fridgeTempC input (interim fix)
**Option A (immediate):** Add a comment/note in the UI that fridge temperature is not yet factored into timing.
**Option B (proper):** Thread `fridgeTempC` into `calcTiming` and model it:

```ts
// In calcTiming, add fridgeTempC parameter via formula or inputs
// Simple Q10 approximation (Q10 ≈ 2 for yeast activity):
const fridgeBaseTempC = 4;
const q10 = 2.0;
const fridgeActivityMult = Math.pow(q10, (inputs.fridgeTempC - fridgeBaseTempC) / 10);
// Higher fridge temp → shorter retard (more activity)
const coldRetardMin = Math.round(8 / fridgeActivityMult);
const coldRetardMax = Math.round(16 / fridgeActivityMult);
```
Note: This introduces a biological model — appropriate to document as an approximation, not science.

**Size:** Option A = tiny. Option B = medium. **Regression risk:** Option B = medium.

---

### FIX 6 — FlavorDevelopment cold inoculation — documentation only
**No code change needed.** Add a tooltip or assumption note:
> "FlavorDevelopment at low temperatures uses a reduced starter percentage intentionally, to enable an extended 24–48h slow ferment for maximum flavor complexity."

---

### FIX 7 — Rename "Freezing" TempBand
**File:** `src/lib/calculator.ts`, lines 9, 205–206 and any `.svelte` files that render `tempBand`
```ts
// BEFORE
export type TempBand = 'Freezing' | 'Cold' | 'Standard' | 'Warm' | 'Hot';
// line 205
if (effectiveTempC < 18) { tempBand = 'Freezing'; }

// AFTER
export type TempBand = 'VeryCold' | 'Cold' | 'Standard' | 'Warm' | 'Hot';
// line 205
if (effectiveTempC < 18) { tempBand = 'VeryCold'; }
```
Also update the danger warning message in `warningStrings` — the `dangerLow` string for <18°C should say "too cold for active fermentation" not "freezing".

**Size:** Small. **Regression risk:** Low, but must grep for all `'Freezing'` string references in UI components.

---

### FIX 8 — Resolve foldCount dead code
**Option A:** Delete `foldCount` from `TimingResult` if it's not displayed in the UI. Clean up the dead compute.
**Option B:** Wire it into schedule generation:
```ts
// In calcSchedule, replace hardcoded setCount with computed values
// e.g., if foldCount >= 4: 3 S&F + 2 coil; if foldCount <= 2: 2 S&F + 1 coil
```
Verify whether `foldCount` is rendered anywhere in `.svelte` files before removing.

**Size:** Small (removal) or Medium (wiring). **Regression risk:** Low.

---

### FIX 9 — Open crumb + high rye danger warning
**File:** `src/lib/calculator.ts`, in `calcWarnings`, after line 573
```ts
if (crumbGoal === 'Open' && ryeEntry && ryeEntry.pct > 60) {
    warnings.push({
        level: 'danger',
        message: 'Open crumb is not achievable at high rye percentages — rye lacks the gluten structure required for an open cell structure.'
    });
}
```
Add corresponding i18n strings for ES and SV.

**Size:** Small. **Regression risk:** None.

---

### FIX 10 — Autolyse mix step copy (minor)
**File:** `src/lib/i18n.ts`, line 17 — make `mixNote` a function that accepts `autolyseOn`:
```ts
mixNote: (autolyseOn: boolean) => autolyseOn
    ? 'Add held-back starter, salt, and reserved ~50g water. Mix until fully incorporated.'
    : 'Combine starter and water, stir until dissolved. Add flour to form a shaggy dough. Rest covered.',
```
**Size:** Small. **Regression risk:** Low — requires updating call sites that reference `s.mixNote`.

---

## 5. Test Plan

### Unit tests to add (calculator.ts logic)

| Test | What to verify |
|------|---------------|
| `einkorn_hydration` | 100% einkorn + Balanced crumb → finalHydrationPct ≈ 73 + (0.87-1.0)*100 = ~59.7% |
| `room_proof_rye_blend` | 50% rye blend + Room Proof → proofMin shortened by blendFermentMult |
| `spelt_vs_ap_hydration` | 100% spelt hydration > 100% AP hydration |
| `ww_bulk_faster_than_white` | 100% WW bulk < 100% BreadFlour bulk (same temp) |
| `cold_retard_range_fixed` | Verify new fridgeTempC logic produces expected outputs at 2°C, 4°C, 7°C |
| `foldCount_range` | At 8h bulk, foldCount = 4; at 2h bulk, foldCount = 4 — verify logic |
| `open_crumb_rye_danger` | Open + 100% rye → danger warning present |
| `tempband_labeling` | 17°C → 'VeryCold', 21°C → 'Cold', 25°C → 'Warm' |

### Manual edge cases to test

- 100% Einkorn, Open crumb, 24°C → verify dough water is not over-hydrated
- 100% Rye, Room Proof → verify proof time shortened vs bread flour
- 80% Rye + Open crumb → verify danger warning appears
- FlavorDevelopment + 15°C → verify very low inoculation + assumption note explains why
- fridgeTempC = 7°C vs 2°C → verify UI note or calculation difference (post Fix 5)
- Autolyse on → verify mix step note changes

---

## 6. Prioritized Implementation Roadmap

### Tier 1 — Immediate hotfixes (highest accuracy/harm impact, lowest effort)

| Priority | Fix | Impact | Effort | Regression Risk |
|----------|-----|--------|--------|-----------------|
| 1 | Einkorn absorptionCoeff → 0.87 | Critical — produces unworkable dough | Trivial | Negligible |
| 2 | Room proof + blendFermentMult | Critical — systematic WG overtiming | 2 lines | Low |
| 3 | "Freezing" → "VeryCold" label | UX trust issue | Small | Low |
| 4 | Open crumb + rye danger warning | Misleading output for impossible goal | Small | None |

### Tier 2 — Next-release improvements

| Priority | Fix | Impact | Effort | Regression Risk |
|----------|-----|--------|--------|-----------------|
| 5 | WholeWheat fermentMult → 0.85 | Moderate — WW timing 10% off | Trivial | Medium — test carefully |
| 6 | Spelt absorptionCoeff → 1.02 | Minor — rarely chosen alone | Trivial | Low |
| 7 | fridgeTempC: remove input or add note | UX misleading precision | Small | None |
| 8 | FlavorDevelopment UX documentation | User confusion | Copy only | None |
| 9 | Autolyse mix step copy | Minor UX | Small | Low |

### Tier 3 — Longer-term model improvements

| Priority | Fix | Impact | Effort | Regression Risk |
|----------|-----|--------|--------|-----------------|
| 10 | Cold retard temperature model (Q10) | Genuine personalization | Medium | Medium |
| 11 | Wire foldCount into schedule | Feature completeness | Medium | Low |
| 12 | Document all heuristics explicitly | Scientific transparency | Docs only | None |

---

## 7. Open Questions / Uncertainties

1. **Where is `tempBand` rendered?** The `'Freezing'` string may appear in multiple `.svelte` components. A grep across all `.svelte` and `.ts` files is needed before renaming.

2. **Is `foldCount` displayed in the UI?** If `TimingCard.svelte` or `ScheduleCard.svelte` renders it, it may create a visible inconsistency with the hardcoded schedule. Check before deciding Fix 8 approach.

3. **What is the stated intent of FlavorDevelopment philosophy?** The design is internally coherent but undocumented. The product owner should confirm the intended user persona (experienced baker doing 24–48h cold slow-ferment) so UX copy can be written accurately.

4. **Einkorn absorptionCoeff — which varieties?** Einkorn sold in the US (Jovial Foods etc.) behaves differently from European landrace einkorn. A range display (e.g., 0.83–0.90) with a note may be more honest than a single coefficient.

5. **Salt formula lower clamp:** `clamp(1.8, 2.2, 1.9 + wwRatio * 0.3)` — the lower bound is 1.8% but the note says "1.9–2.2%". The 1.8 clamp is unreachable with this formula but the discrepancy between the comment and the clamp could cause confusion if the formula ever changes. Minor documentation fix recommended.

6. **`coldRetardNote` in i18n (line 31) says "~15 hours"** but the actual range is 8–16h. These should be reconciled.

---

*Verified against commit state at time of audit. All line numbers reference `src/lib/calculator.ts`.*
