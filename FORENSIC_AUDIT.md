# Doughculator — Forensic Audit Report
> Conducted 2026-03-27. Scope: full repo (calculator.ts, i18n.ts, store.ts, all UI components).
>
> This report covers NEW findings beyond the 9 previously confirmed issues.

---

## 1. Executive Summary

This forensic pass found **18 new issues** beyond the 9 already confirmed. The most impactful new discoveries are:

- **Fold count is definitively dead code** — schedule hardcodes 3+2 folds regardless of `foldCount`
- **Fermentation philosophy has no effect on room proof timing** — only bulk is adjusted
- **`recommendAutolyseMins()` is never called** — it exists but its result is never piped into the schedule
- **Hydration band `High` is unbounded and un-differentiated** — 76% and 95% doughs get the same timing multiplier
- **Silent clamping of starter hydration** with no warning to the user
- **18 missing test files** — the project has zero unit tests

Previously confirmed issues are referenced only where needed to explain a deeper problem.

---

## 2. New Findings Table

| # | Title | Category | File | Code Evidence | Baking Impact | UX Impact | Severity | Confidence |
|---|-------|----------|------|---------------|---------------|-----------|----------|------------|
| N1 | Fold count is dead code | Dead code | calculator.ts:403, calcSchedule | `foldCount` computed & returned but schedule hardcodes `setCount: 3` and `setCount: 2` | Schedule fold count never adjusts to bulk duration | User sees wrong fold count | High | Confirmed |
| N2 | Philosophy has no effect on room proof | Logic bug | calculator.ts:395-396 | `proofMin = proofBaseMin * proofTempMult * hydrationMult * inocScale` — no philosophy branch | Predictability (20% inocu) and FlavorDev (12% inocu) get different bulk but identical room proof | Misleading timing for FlavorDev bakers | High | Confirmed |
| N3 | `recommendAutolyseMins()` never called | Dead code | calculator.ts:126-136 | Function exists, returns a value, but is never called in `calcSchedule` or wired to schedule output | Autolyse duration guidance shown but never applied | User sees recommendation but schedule ignores it | High | Confirmed |
| N4 | `High` hydration band applies same multiplier at 76% and 95% | Weak heuristic | calculator.ts:191-197 | `else { hydrationBand = 'High' }` — unbounded above 75% | 95% dough gets same bulk extension as 76% dough; extreme hydrations underestimated | False confidence at very high hydrations | Medium | Confirmed |
| N5 | Starter hydration clamped silently to [50%, 200%] | UX bug | calculator.ts:301 | `clamp(50, 200, effectiveStarterHydrationPct)` — no warning emitted | Stiff (50%) or ultra-liquid (200%) starter assumptions used silently | User's formula runs on wrong values with no indication | High | Confirmed |
| N6 | Autolyse warns against >30 min for WW>30% but `recommendAutolyseMins()` can suggest 30 min | Internal contradiction | calculator.ts:126-136, 561-563 | Warning: `if (wwRatio > 0.3 && autolyseMins > 30)` fires; recommendation at 24°C returns 30 min | User gets 30 min recommendation + a warning about 30 min simultaneously | Confusing, contradictory guidance | Medium | Confirmed |
| N7 | Hydration band thresholds are asymmetric and coarse | Weak heuristic | calculator.ts:191-197 | Low: [0,70), Medium: [70,75], High: (75,∞) — Medium is only 5pp wide | Timing multipliers jump discontinuously at band boundaries | Baker at 69.9% and 70.0% gets very different timing | Medium | Confirmed |
| N8 | inocScale exponent (0.35) applied identically to bulk and proof | Weak heuristic | calculator.ts:372, 395 | `Math.pow(20 / inoculationPct, 0.35)` used in both | Bulk and proof have different fermentation kinetics; single exponent likely wrong for proof | Proof timing inaccurate at extreme inoculation | Medium | Heuristic risk |
| N9 | Effective temp is a simple average, ignores dough cooling over time | Simplification | calculator.ts:200-201 | `(ambientTempC + doughTempC) / 2` — no decay model | Dough cools exponentially; using initial average overstates temp for long bulk | Bulk times likely underestimated in warm-start scenarios | Medium | Heuristic risk |
| N10 | foldIntervalMins not adjusted for hydration or crumb goal | Weak heuristic | calculator.ts:407-411 | Temperature-only fold interval table; no hydration or flour adjustments | High-hydration doughs (85%+) need longer fold intervals | Wrong fold timing for extreme hydration | Low | Confirmed |
| N11 | No guard for negative/frozen doughTempC input | Missing validation | calculator.ts:200-201 | User entering −5°C proceeds to schedule generation without hard rejection | Schedule generated for physically impossible frozen dough state | Confusing output for extreme inputs | Low | Confirmed |
| N12 | Schedule rounding can drift between hours display and minutes display | UX precision bug | calculator.ts:436-437, 475-476 | `bulkMin` rounded to 1 decimal for "Xh" display, rounded to nearest minute for schedule — can differ | No baking impact | "3.5h" may show as "208 min" instead of 210 min | Low | Confirmed |
| N13 | `blendAbsorption` and `blendFermentMult` not shown in formula output | UX opacity | AssumptionsDrawer | Hidden in assumptions drawer only, not FormulaCard or TimingCard | No baking impact | Baker cannot see how flour blend affects their numbers | Low | Confirmed |
| N14 | `doughTempC` effective temperature derivation never displayed | UX opacity | +page.svelte, AssumptionsDrawer | effectiveTempC computed but assumptions drawer shows only ambientTempC, not derivation | No baking impact | Baker cannot verify effective temp used in calculations | Low | Confirmed |
| N15 | Cold retard [8h, 16h] is a 2× range — displays as "~15 hours" in all locales | UX/documentation mismatch | i18n.ts:31, 53, 75 | EN/ES/SV all say `'Refrigerate ~15 hours.'`; code output is [8, 16] | Bakers using minimum fridge time (8h) may undershoot; "~15h" implies 14–16h window only | Misleading for bakers who refrigerate 8–10h | High | Confirmed |
| N16 | Salt clamp lower bound (1.8%) is unreachable | Dead clamp | calculator.ts:295 | `clamp(1.8, 2.2, 1.9 + wwRatio * 0.3)` — formula minimum at wwRatio=0 is 1.9, never 1.8 | No impact (unreachable) | Misleads future developers reading code intent | Low | Confirmed |
| N17 | Inoculation asymmetry between philosophies not warned | UX gap | calculator.ts:255, 289 | FlavorDev max 12.5%, Predictability max 26% — same inputs produce up to ~2× inoculation difference | Dramatically different fermentation speeds with no explanation shown | Baker switching philosophy gets surprise timing changes | Medium | Confirmed |
| N18 | No unit tests exist in project | Architecture | project root | Zero `.test.ts` or `.spec.ts` files outside node_modules | All of the above bugs survived because nothing catches regressions | Any future fix risks silent regressions | High | Confirmed |

---

## 3. Repo-Wide Consistency Audit

### Mismatches between UI/notes and code

| Claim | Source | Actual code behavior |
|-------|--------|---------------------|
| "Refrigerate ~15 hours" | i18n.ts (all 3 locales) | Code returns [8h, 16h] — "~15h" is wrong |
| Assumptions drawer shows `blendFermentMult: 0.82` | AssumptionsDrawer | Never shown on TimingCard; baker can't connect it to their timing output |
| Autolyse recommendation function exists | calculator.ts:126-136 | Never wired into schedule; shown as guidance text only |
| Salt comment says "1.9–2.2%" | calculator.ts near line 295 | Clamp min is 1.8 — inconsistent with comment |
| `foldCount` in `TimingResult` type | types | Never consumed by `calcSchedule`; schedule hardcodes fold counts |

### Disconnected inputs

| Input | Defined | Effect |
|-------|---------|--------|
| `fridgeTempC` | `Inputs` interface, DEFAULT_INPUTS | None — never read by any formula |
| `doughTempC` | `Inputs` interface | Read only for effectiveTempC; derivation never shown to user |
| `starterHydrationPct` > 200 or < 50 | UI allows | Silently clamped, no warning |

### False precision

- Schedule shows minute-level timing (e.g. "208 min") when underlying model accuracy is ±30–60 min
- `blendAbsorption` shown to 3 decimal places (e.g. `1.123`) — implies precision that does not exist
- Hydration displayed as `82.3%` — single decimal on a value derived from approximate coefficients

---

## 4. Edge-Case Failure Audit

| Scenario | What happens | Problem |
|----------|-------------|---------|
| 100% rye + open crumb goal | Two independent warnings fire; no compound danger warning | Physically impossible combination not blocked |
| 100% einkorn | absorptionCoeff = 1.12 (wrong); over-hydrated, slack, unworkable dough | Known confirmed bug |
| doughTempC = −5°C (frozen) | effectiveTempC = ~2.5°C; schedule generated; danger warning fires but no hard block | Schedule output for impossible state |
| starterHydrationPct = 250% | Silently clamped to 200%; no user notification | Silent data corruption |
| Predictability + 26% inoculation + 29°C | bulk [2–4h], room proof [1.5–3h] with same multipliers as 12% inoculation FlavorDev | Proof time may be dangerously short with no compound warning |
| Very high hydration (90%+) | `hydrationBand = 'High'` — same multiplier as 76% | Bulk times underestimated; no extra warning |
| 30°C ambient + high inoculation + FlavorDev | Highest possible inoculationPct (~12.5%) × fastest temp multipliers | Could produce 2–3h total schedule with no "very fast" warning |
| Low hydration + 100% whole grain | Low hydration reduces blendAbsorption adjustment; WW still uses multiplier correctly, but no "stiff whole-grain" UX warning | Potentially misleading for dense loaves |

---

## 5. Dead Code / Partial Feature Audit

| Item | Location | Status |
|------|----------|--------|
| `foldCount` in `TimingResult` | calculator.ts:403, types | Computed, returned, never consumed by `calcSchedule` |
| `recommendAutolyseMins()` | calculator.ts:126-136 | Defined, never called in schedule path |
| `fridgeTempC` in `Inputs` | types, DEFAULT_INPUTS | Collected from user, never read |
| Salt clamp lower bound `1.8` | calculator.ts:295 | Unreachable — formula floor is 1.9 |
| `doughTempC` derivation in assumptions | AssumptionsDrawer | effectiveTempC shown but its derivation `(ambient + dough) / 2` never displayed |
| i18n `coldRetardNote` (~15h) | i18n.ts | Does not match computed [8,16] range |

---

## 6. Fix Plan for New Issues

### N1 — Fold count dead code
- **Fix:** Either wire `foldCount` from `TimingResult` into `calcSchedule` to dynamically set `setCount`, or remove it from the type and calculation
- **Files:** `calculator.ts` (calcSchedule, ~line 460–468), `types.ts`
- **Regression risk:** Medium — fold schedule display will change
- **Tests:** `foldCount = 1` at very short bulk, `foldCount = 4` at long bulk

### N2 — Philosophy not affecting room proof
- **Fix:** Add a philosophy-based proofInocScale branch (similar to bulk inocScale) to proofMin/proofMax
- **Files:** `calculator.ts` lines 395-396
- **Regression risk:** Medium — all room proof times change
- **Tests:** Same inputs, different philosophy → different proof times

### N3 — `recommendAutolyseMins()` never called
- **Fix:** Call it in `calcSchedule` or `calcFormula` and use its result for the autolyse step duration when `autolyseOn = true`
- **Files:** `calculator.ts` (calcSchedule, autolyse step)
- **Regression risk:** Low — currently the default 30 min is used anyway
- **Tests:** autolyse at 18°C vs 28°C should produce different schedule durations

### N4 — Unbounded `High` hydration band
- **Fix:** Add a `VeryHigh` band for >82% or >85% with a more aggressive bulk multiplier (e.g. 0.75×)
- **Files:** `calculator.ts` lines 191-197, hydration multiplier table
- **Regression risk:** Medium — high-hydration timing changes
- **Tests:** 78% vs 90% should produce meaningfully different timing

### N5 — Silent starter hydration clamping
- **Fix:** Add a warning to `warnings[]` when `effectiveStarterHydrationPct` is outside [50, 200]
- **Files:** `calculator.ts` warnings section
- **Regression risk:** Low — new warning only
- **Tests:** starterHydrationPct = 30, 250 → warning appears

### N6 — Autolyse contradiction
- **Fix:** Lower `recommendAutolyseMins()` return value for WW>30% scenarios, or raise the warning threshold to >45 min
- **Files:** `calculator.ts` lines 126-136, 561-563
- **Regression risk:** Low
- **Tests:** WW=40%, ambientTemp=24°C → recommendation + no simultaneous warning

### N15 — Cold retard note mismatch
- **Fix:** Change i18n strings in EN/ES/SV from `'~15 hours'` to `'8–16 hours'`
- **Files:** `i18n.ts` lines ~31, 53, 75
- **Regression risk:** None
- **Tests:** Visual/string comparison

### N17 — Inoculation asymmetry not warned
- **Fix:** Add an informational note when `fermentationPhilosophy` is changed showing approximate inoculation difference
- **Files:** warnings or guidance section
- **Regression risk:** None

### N18 — No tests
- **Fix:** Add `vitest` (already in Svelte ecosystem) with tests for `calcFormula`, `calcTiming`, `calcSchedule`
- **Files:** `src/lib/calculator.test.ts` (new)
- **Regression risk:** None — only adds tests

---

## 7. Priority Ranking (New Issues Only)

| Priority | Issue | Scientific Accuracy Risk | Misleading Baker Risk | Effort | Regression Risk |
|----------|-------|--------------------------|----------------------|--------|-----------------|
| 1 | N15: cold retard note "~15h" | Low | **High** — causes consistent underproofing | Trivial | None |
| 2 | N1: foldCount dead code | Medium | High — fold schedule always wrong for short/long bulk | Small | Medium |
| 3 | N3: autolyse rec never used | Medium | High — recommendation shown but not applied | Small | Low |
| 4 | N2: philosophy not affecting proof | Medium | High — FlavorDev proof times identical to Predictability | Medium | Medium |
| 5 | N5: silent starter hydration clamp | Low | Medium — wrong formula used silently | Small | None |
| 6 | N4: unbounded High hydration band | Medium | Medium — 90%+ doughs undertimed | Small | Medium |
| 7 | N6: autolyse contradiction | Low | Medium — user gets warning + recommendation that conflict | Small | Low |
| 8 | N17: inoculation asymmetry | Low | Medium — surprise timing changes when switching philosophy | Small | None |
| 9 | N8: inocScale exponent same for bulk/proof | Medium | Low | Medium | High |
| 10 | N18: no unit tests | None | None (defensive) | Large | None |
| 11 | N9: temp averaging without decay | Low | Low — acceptable product simplification | Large | High |
| 12 | N7, N12, N10, N11, N13, N14, N16 | Low | Low | Trivial–Small | None |

---

## 8. Model Design Weaknesses and Refactor Opportunities

1. **All coefficients are hardcoded scalars with no uncertainty range.** The model presents a single number (e.g. `absorptionCoeff: 0.97`) when in reality these values vary with brand, freshness, and milling. A min/max range per flour type would be more honest.

2. **Bulk and room proof use the same multiplier stack with no stage-specific logic.** Fermentation kinetics differ between bulk (open vessel, exponential growth) and final proof (shaped, gluten network constrained). They should have at least partially independent coefficient tables.

3. **Temperature model is point-in-time, not dynamic.** The calculator assumes ambient temperature is constant throughout fermentation. A simple linear decay model for `effectiveTempC` over time would meaningfully improve timing accuracy.

4. **`fermentationPhilosophy` affects inoculation but nothing else.** It should also affect: proof timing, fold strategy, retard duration, and potentially salt. It's architecturally half-implemented.

5. **i18n strings contain numerical claims** (`~15 hours`) that can silently go stale when code changes. Numeric values in localization strings are an anti-pattern — they should be derived from the same constants the code uses.

6. **No test harness.** A calculator with this level of formula complexity and no tests is a regression-waiting-to-happen. Every fix in this plan carries regression risk precisely because there's no safety net.

---

## 9. What Did Previous Audits Likely Miss?

- **`recommendAutolyseMins()` being dead code** — it exists, is non-trivial, and looks active. Prior audits checked whether autolyse was mentioned, not whether the function result was ever consumed.
- **Philosophy having zero effect on proof** — prior audits confirmed `inocScale` was applied to proof (correctly), but missed that philosophy's *inoculation level difference* produces identical proof times despite different fermentation loads.
- **The contradiction between the autolyse warning (>30 min, WW>30%) and the autolyse recommendation (30 min at 24°C)** — both are in the same file but auditors checked them independently.
- **The 2× range of cold retard [8h, 16h] being described as "~15 hours"** — looks like documentation, easy to skip.
- **The unreachable salt clamp floor** — requires tracing the formula minimum, not just reading the clamp call.
- **The complete absence of unit tests** — not a calculation audit item, so auditors focused on formulas and skipped project structure.
