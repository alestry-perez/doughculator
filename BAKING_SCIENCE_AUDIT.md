# Doughculator — Baking Science Audit
**Audited file:** `src/lib/calculator.ts` (694 lines)
**Date:** 2026-03-27

---

## 1. Executive Summary

The calculator is well-structured and mathematically sound. Baker's percentage math, starter accounting, and weighted-blend logic are all correct. Several core coefficients are within reasonable practical heuristic range for common cases. However, **three issues are serious enough to produce actively wrong recommendations**, and several more are questionable oversimplifications that will mislead experienced bakers.

**Critical errors:**
- Einkorn absorption coefficient (1.12) is wrong by ~25-30% — will produce over-hydrated, unworkable doughs.
- Room proof timing omits the flour-blend fermentation multiplier that bulk fermentation correctly applies — systematic inconsistency for whole-grain loaves.
- FlavorDevelopment philosophy *reduces* inoculation at cold temperatures, which is the inverse of correct behavior.

**Overall verdict:** Solid for common use cases (bread flour / WW blends, 65-78% hydration, 21-27°C). Unreliable for ancient grains, high-rye doughs, cold fermentation, or FlavorDevelopment mode.

---

## 2. Formula-by-Formula Audit Table

### 2a. Per-Flour Absorption Coefficients (`FLOUR_PROPERTIES`, line 23)

| Flour | Coeff | Rating | Notes |
|---|---|---|---|
| BreadFlour | 1.00 | **Sound** | Correct reference baseline (~62-65% absorption). |
| AllPurpose | 0.97 | **Reasonable heuristic** | AP absorbs slightly less than bread flour. -3% is a fair practical adjustment. |
| WholeWheat | 1.12 | **Reasonable heuristic** | WW bran/germ absorbs 5-15% more water. +12% is within the documented range. |
| Rye | 1.20 | **Questionable** | Rye pentosans absorb aggressively. +20% is conservative; practice places rye 25-50% above bread flour depending on extraction rate. Usable for blends but undershoots 100% rye. |
| Spelt | 0.95 | **Inaccurate** | Spelt absorbs similar to or slightly more than AP wheat (~60-68%). Setting it *below* AP (0.95 < 0.97) has no scientific or practical basis. Spelt dough is more extensible but not less thirsty. Correct range: ~1.00-1.05. |
| Einkorn | 1.12 | **Inaccurate — Critical** | Einkorn requires *lower* hydration than modern wheat (typically 55-62%). Assigning 1.12 (same as whole wheat) will produce over-hydrated, sticky, unworkable doughs. Correct coefficient: ~0.82-0.90. This is the single largest factual error in the calculator. |

### 2b. Per-Flour Fermentation Multipliers (`FLOUR_PROPERTIES`, line 23)

| Flour | Mult | Rating | Notes |
|---|---|---|---|
| BreadFlour | 1.00 | **Sound** | Reference. |
| AllPurpose | 1.00 | **Reasonable** | AP and bread flour ferment at comparable rates. |
| WholeWheat | 0.95 | **Questionable** | WW ferments noticeably faster due to mineral content and bran surface area — typically 10-20% faster, not 5%. Most bakers observe a significant difference. A value of ~0.82-0.88 would be more accurate. |
| Rye | 0.72 | **Reasonable heuristic** | Rye ferments significantly faster due to high amylase activity. 28% faster is directionally well-supported and consistent with practice. |
| Spelt | 0.82 | **Reasonable heuristic** | Spelt ferments faster than modern wheat. 0.82 is consistent with baker reports. Cannot be validated scientifically with precision. |
| Einkorn | 0.90 | **Reasonable heuristic** | Einkorn fermentation behavior is complex and poorly documented. 10% faster is a conservative estimate. Cannot be validated scientifically — reasonable for lack of contrary evidence. |

### 2c. Base Hydration by Crumb Goal (line 178)

| Goal | Hydration | Rating | Notes |
|---|---|---|---|
| Tight | 65% | **Reasonable** | Widely used for tight-crumb sandwich loaves with bread flour. Solid baseline. |
| Balanced | 73% | **Sound** | Sits in the well-documented "everyday sourdough" range (68-78%). Good choice. |
| Open | 82% | **Questionable for some cases** | Achievable with high-gluten bread flour and strong technique, but applying this base to any flour blend before adjustment creates dangerous edge cases (e.g., before adding the einkorn wrong-coefficient adjustment, or with 100% rye where open crumb is impossible). |

### 2d. Hydration Adjustment Formula (lines 185-187)

```ts
wwHydrationAdjust = (blendAbsorption - 1.0) * 100
finalHydrationPct = baseHydrationPct + wwHydrationAdjust
```

**Rating: Reasonable heuristic**

Linear scaling of hydration relative to blendAbsorption is a defensible simplification. For 100% rye (coeff 1.20), this adds +20%, yielding ~102% at Open — appropriate for rye pan bread. Mathematically consistent. Limitations:
- Assumes 1:1 linear relationship between absorption capacity and required hydration (real curves are non-linear).
- Because einkorn's absorption coefficient is wrong, its hydration adjustment will be wrong by ~25%.
- No upper-bound cap — nothing prevents recommending 100%+ hydration for free-form loaves.

### 2e. Effective Temperature Formula (lines 200-201)

```ts
effectiveTempC = (ambientTempC + doughTempC) / 2   OR   ambientTempC
```

**Rating: Reasonable heuristic**

Professional baking uses DDT (Desired Dough Temperature), which accounts for flour temp, ambient temp, water temp, and a friction factor. The simple average of ambient and dough temp is a practical shortcut. The key omission: dough temperature changes continuously during bulk — the model treats it as static. Acceptable for a simple calculator.

### 2f. Temperature Band Labels (lines 204-215)

| Band | Range | Rating | Notes |
|---|---|---|---|
| "Freezing" | <18°C | **Misleading label** | 18°C is not freezing. Dough ferments fine (slowly) at 18°C. Typical fridges are 3-5°C. "Very Cold" would be accurate. |
| "Cold" | 18-21°C | **Accurate** | Correct. |
| "Standard" | 21-24°C | **Accurate** | Ideal home baking range. |
| "Warm" | 24-27°C | **Accurate** | Correct. |
| "Hot" | ≥27°C | **Accurate** | Correct. |

### 2g. Inoculation — Predictability Philosophy (lines 257-289)

Base: Tight 18%, Balanced 20%, Open 16%.

**Rating: Reasonable heuristic**

18-20% is on the higher end of typical same-day sourdough inoculation (range 10-25%). Open < Balanced (16% < 20%) is intentional: less starter → longer bulk → more extensible dough → better open crumb. Consistent with published technique (Tartine, FWSY). Temperature adjustments (+4%@cold, -2%@warm, -4%@hot, -6%@very hot) are directionally correct heuristics. Clamp 10-26% is reasonable.

### 2h. Inoculation — FlavorDevelopment Philosophy (lines 222-255)

Base: Tight 12%, Balanced 14%, Open 10%.

**Rating: Cold logic is inverted — Partially incorrect**

Temperature adjustments:
- `<21°C: -4%` ← **problematic**
- `21-24°C: 0%`
- `24-27°C: -3%`
- `27-29°C: -5%`
- `>29°C: -6%`

At cold temps (<21°C), the model *reduces* inoculation. For Open crumb + FlavorDevelopment at 18°C: 10% - 4% = 6%, nearly at the 5% floor. This could produce 24-36h+ bulk times that the timing model can't represent accurately. If the intent is "cold + low inoculation = maximum flavor development," it should be documented explicitly in the UI. Otherwise, this adjustment should mirror Predictability's direction (add inoculation at cold temps to keep timing reasonable).

### 2i. Salt Logic (lines 295-296)

```ts
autoSaltPct = clamp(1.8, 2.2, 1.9 + wwRatio * 0.3)
```

**Rating: Sound industry practice**

1.9% all-white → 2.2% at 100% WW is within standard range (1.8-2.5% baker's percentage). Tartine and similar professional formulas use 2-2.2%. Rationale (WW needs more salt for flavor balance) is a recognized heuristic. Salt correctly calculated on totalFlourG. No issues.

### 2j. Starter Accounting (lines 301-308)

```ts
starterFlourG = totalFlourG * (inoculationPct / 100)
starterTotalG = starterFlourG * (1 + starterHydrationPct / 100)
starterWaterG = starterTotalG - starterFlourG
mixFlourG = totalFlourG - starterFlourG
mixWaterG = totalWaterG - starterWaterG
```

**Rating: Correct**

Starter flour is correctly treated as part of `totalFlourG` (not added on top). Baker's percentage math is sound. Mix additions correctly represent what the user physically adds. Internally consistent.

### 2k. Bulk Fermentation Timing (lines 352-375)

Baselines: <21°C → [8,12]h, 21-24°C → [5,8]h, 24-27°C → [3.5,6]h, 27-29°C → [3,5]h, ≥29°C → [2,4]h.

**Rating: Reasonable heuristic**

No scientific formula exists for fermentation timing — this is empirical. The ranges are slightly conservative (at 24°C with 20% starter, most bakers report 4-6h) but not wrong. Hydration multiplier (Low ×1.15, High ×0.85) is directionally correct; ±15% magnitude is arbitrary. `blendFermentMult` correctly applied.

**Inoculation scaling:** `(20 / inoculationPct)^0.35`

**Rating: Reasonable heuristic.** Power-law shape is more realistic than linear. Exponent 0.35 is not scientifically derived but produces defensible output across the 10-26% range.

### 2l. Room Proof Timing (lines 377-396)

```ts
proofMin = proofBaseMin * proofTempMult * hydrationMult * inocScale;
proofMax = proofBaseMax * proofTempMult * hydrationMult * inocScale;
```

**Rating: Bug — missing `blendFermentMult`**

Bulk correctly multiplies by `blendFermentMult`. Room proof does not. For a 50% rye dough (blendFermentMult ≈ 0.86), bulk shortens correctly but room proof does not — the model systematically overestimates proof time for whole-grain loaves in Room Proof mode. One-line fix.

Also missing from room proof: there is a secondary argument that `inocScale` applied to final proof is conceptually weaker than for bulk (by proof time the microbial population is decoupled from original inoculation %). Minor.

### 2m. Cold Retard (lines 398-400)

```ts
const coldRetardMin = 8;
const coldRetardMax = 16;
```

**Rating: Oversimplified**

Fixed 8-16h regardless of:
- `fridgeTempC` (collected at line 49, never used in timing)
- Inoculation percentage
- Dough temperature at time of retarding
- Hydration

A 6°C fridge proofs noticeably faster than a 2°C fridge over 12h. High-inoculation doughs can over-proof in 8h at 5°C. `fridgeTempC` is dead input data.

### 2n. Fold Count (line 403)

```ts
foldCount = Math.min(4, Math.floor((bulkMin * 60) / 30))
```

**Rating: Dead code**

`foldCount` is computed but never referenced in schedule generation. The schedule hardcodes 3 stretch-and-fold + 2 coil fold sets (lines 456-469) unconditionally. `foldCount` has no effect on any output.

### 2o. Fold Intervals (lines 406-411)

≥29°C: 20min → <21°C: 35min.

**Rating: Reasonable heuristic**

Warmer dough ferments faster; shorter intervals between folds are appropriate. Range 20-35min is within typical practice (20-45min). No significant issue.

### 2p. Autolyse Durations (lines 126-136)

≥29°C: 20min → <18°C: 45min.

**Rating: Reasonable heuristic — missing key context**

Shorter autolyse at high temps prevents over-proteolysis. Range 20-45min is within standard practice. Critical missing context: the calculator does not specify whether autolyse is flour+water only (classical Calvel method) or includes starter. Sourdough starter acidifies the dough during autolyse, which significantly alters enzyme behavior. This distinction should be documented.

### 2q. Warning Thresholds (lines 533-572)

| Condition | Level | Rating | Notes |
|---|---|---|---|
| effectiveTempC < 18 | danger | **Reasonable** | Below 18°C fermentation is very slow. "Freezing" label is misleading. |
| effectiveTempC ≥ 30 | danger | **Sound** | Above 30°C bacterial activity increases, gluten weakens. |
| effectiveTempC 27-30 | warn | **Sound** | Hot zone — accelerated, risky fermentation. |
| effectiveTempC 24-27 | info | **Sound** | Sweet spot. Correct. |
| effectiveTempC 20-24 | info | **Reasonable** | Cool zone. Correct direction. |
| High hydration + >26°C | warn | **Sound** | High hydration at high temp = rapid over-fermentation risk. |
| High hydration | info | **Reasonable** | General caution appropriate. |
| WW >30% + autolyse >30min | info | **Reasonable** | Long autolyse with WW can produce overly extensible/sticky dough. |
| Open crumb goal | warn | **Reasonable** | Requires advanced technique. Fair. |
| Rye > 30% | warn | **Reasonable** | High rye requires pan, different shaping, different hydration expectations. |
| **Missing:** Einkorn > 20% | — | **Gap** | Given the wrong absorption coefficient, high-einkorn blends are especially problematic. A warning would catch the worst cases until the coefficient is corrected. |
| **Missing:** Open crumb + Rye > 50% | — | **Gap** | 100% rye cannot form an open crumb structure (no gluten network). No warning fires. |

---

## 3. Scientifically Weak or Risky Assumptions

1. **Einkorn absorptionCoeff = 1.12** — Factually wrong. Will recommend 15-25% excess water for einkorn-dominant doughs.

2. **Spelt absorptionCoeff = 0.95** — No scientific or practical basis for spelt absorbing less than AP wheat. Understates spelt's water need.

3. **WholeWheat fermentMult = 0.95** — Understates WW's fermentation acceleration. High-WW doughs given timing ranges that are too long.

4. **FlavorDevelopment reduces inoculation at cold temps** — Potentially produces extreme (24h+) bulk times that the timing model cannot represent accurately. Contradicts standard practice.

5. **Cold retard ignores fridgeTempC** — User input collected but never used. Users with warm refrigerators (6°C) and cool ones (2°C) receive identical recommendations.

6. **Fermentation temperature is static** — A dough starting at 27°C that cools to 22°C during 8h bulk is modeled identically to constant 22°C. No concept of temperature drift.

7. **Room proof missing blendFermentMult** — Systematic inconsistency: bulk and room proof diverge in behavior for whole-grain blends. Code bug.

8. **Open crumb at 100% rye is unwarned** — The model will recommend 82%+ hydration for "Open" crumb with 100% rye. While the hydration is physically appropriate for rye pan bread, the Open crumb goal is physically impossible without gluten and no warning fires.

9. **Autolyse type unspecified** — Flour+water autolyse vs. starter-included autolyse produce different dough chemistry. The calculator recommends autolyse without specifying the method.

---

## 4. Recommended Corrections

### P1 — Einkorn absorption coefficient (Critical)
**Line 29**
```ts
// Current:
Einkorn: { absorptionCoeff: 1.12, fermentMult: 0.90 }
// Correct to:
Einkorn: { absorptionCoeff: 0.85, fermentMult: 0.90 }
```
Einkorn requires 55-62% hydration vs ~62-65% for bread flour. Coefficient ~0.85 (range 0.82-0.90).

### P2 — Room proof missing blendFermentMult (Bug)
**Lines 395-396**
```ts
// Current:
const proofMin = proofBaseMin * proofTempMult * hydrationMult * inocScale;
const proofMax = proofBaseMax * proofTempMult * hydrationMult * inocScale;
// Correct to:
const proofMin = proofBaseMin * proofTempMult * hydrationMult * inocScale * blendFermentMult;
const proofMax = proofBaseMax * proofTempMult * hydrationMult * inocScale * blendFermentMult;
```
`blendFermentMult` is available on `formula`. One-line change.

### P3 — Spelt absorption coefficient (Significant)
**Line 28**
```ts
// Current:
Spelt: { absorptionCoeff: 0.95, ... }
// Correct to:
Spelt: { absorptionCoeff: 1.03, ... }  // range 1.00-1.08
```

### P4 — WholeWheat fermentMult (Significant)
**Line 26**
```ts
// Current:
WholeWheat: { ..., fermentMult: 0.95 }
// Correct to:
WholeWheat: { ..., fermentMult: 0.85 }  // range 0.80-0.88
```

### P5 — Cold retard should use fridgeTempC (Significant)
**Lines 398-400** — Replace fixed values with fridge-temperature-responsive ranges:
```ts
// Suggested:
// fridgeTempC ≤ 3: [10, 20]h
// fridgeTempC ≤ 5: [8, 16]h  (current default)
// fridgeTempC ≤ 8: [6, 12]h
```

### P6 — FlavorDevelopment cold inoculation logic (Significant)
**Line 231-233** — Either:
- Change to `inoculationPct += 2` (small positive adjustment, consistent with needing more starter to hit reasonable timing in cold), or
- Document clearly in the UI that cold + FlavorDevelopment = extreme slow fermentation (24h+).

### P7 — "Freezing" label for <18°C
Replace "Freezing" with "Very Cold" in i18n/display code.

### P8 — Add missing warnings
```ts
// Einkorn > 20%
const einkorEntry = inputs.flourBlend.find(e => e.type === 'Einkorn');
if (einkornEntry && einkornEntry.pct > 20) {
    warnings.push({ level: 'warn', message: '...' });
}
// Open crumb + high rye
const ryePct = inputs.flourBlend.find(e => e.type === 'Rye')?.pct ?? 0;
if (inputs.crumbGoal === 'Open' && ryePct > 50) {
    warnings.push({ level: 'warn', message: '...' });
}
```

### P9 — Remove dead foldCount variable
**Line 403** — Either use `foldCount` to drive schedule fold steps dynamically, or remove it.

---

## 5. Priority Fixes Ranked by Impact on Accuracy

| Priority | Fix | Severity | Impact |
|---|---|---|---|
| **P1** | Einkorn absorptionCoeff 1.12 → 0.85 | Critical | Will produce unworkable dough for any einkorn blend. Most likely to cause real baking failures. |
| **P2** | Room proof add `blendFermentMult` | Bug | Systematic overestimate of proof time for all whole-grain doughs in Room Proof mode. One-line fix. |
| **P3** | Spelt absorptionCoeff 0.95 → 1.03 | Significant | Incorrect but lower severity; affects spelt-heavy blends. |
| **P4** | WholeWheat fermentMult 0.95 → 0.85 | Significant | Conservative; produces timing too long for WW-heavy doughs. |
| **P5** | Cold retard use fridgeTempC | Significant | Makes collected user input meaningful; moderate accuracy improvement. |
| **P6** | FlavorDevelopment cold inoculation | Significant | Risk of extreme unmeasurable fermentation times; needs fix or clear documentation. |
| **P7** | "Freezing" label fix | UX | Mislabels a normal slow-fermentation temperature as dangerous. |
| **P8** | Add einkorn/open-rye warnings | Safety net | Guards users until P1 is applied. |
| **P9** | Remove/fix dead `foldCount` | Code hygiene | No user-facing impact currently. |
