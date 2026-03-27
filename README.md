# DoughCulator

Sourdough formula, timing, and schedule calculator built with SvelteKit, Tailwind CSS v4, daisyUI, and SCSS.

The app is static-build friendly and tuned for practical home baking inputs: flour blend, temperature, crumb goal, proof method, and schedule mode.

## What Changed Recently

### Formula & Bug Fixes
- **Corrected flour coefficients** — Einkorn `absorptionCoeff` and Spelt/WholeWheat `fermentMult` values were wrong; all corrected to match physical reality.
- **Temperature decay for long bulk ferments** — for bulk >3h, `effectiveTempC` now drifts toward `ambientTempC` at 0.3°C/hour, preventing over-estimation of fermentation speed in long cold bulk scenarios.
- **Stage-specific kinetics** — proof fermentation runs ~15% faster than bulk (`PROOF_KINETICS_FACTOR = 1.15`) due to shaped-dough surface area; each flour now carries its own `proofFermentMult`.
- **Fermentation philosophy → timing** — `FlavorDevelopment` philosophy now scales `proofMin/Max` ×1.2 and `coldRetardMin/Max` ×1.25, reflecting deliberately slower fermentation.
- **`TempBand` boundary fix** — temperature band thresholds were misaligned at boundaries; corrected.
- **Rye + open crumb guard** — high-rye doughs can't realistically achieve open crumb; the UI now blocks this invalid combination.
- **Hydration band edge case fixes** — edge values at band boundaries now handled consistently.
- **`fridgeTempC` out-of-range warning** — added validation; previously silent bad inputs could break the cold retard model.
- **Warning threshold and message fixes** — several warnings fired at wrong thresholds or with misleading text.

### Uncertainty & Confidence Ranges (A6)
- **`RangedValue` type** — `absorptionCoeff`, `fermentMult`, and `proofFermentMult` in `FLOUR_PROPERTIES` are now `{ value, low, high }` instead of plain scalars. Per-flour uncertainty: BreadFlour/AP ±5%, WholeWheat ±10%, Spelt/Einkorn ±15%, Rye ±20%.
- **Range propagation** — `calcFormula` exposes `blendAbsorptionRange` and `blendFermentMultRange`; `calcTiming` uses the bounds to widen `bulkMinRange/bulkMaxRange/proofMinRange`.
- **Assumptions drawer** — blend coefficients now display as `"1.120 (1.008–1.232)"` with a timing confidence note.

### i18n & UX
- Added missing/hardcoded i18n strings across all locales (`en`, `es`, `sv`).
- Added timing output disclaimers.
- Cleaned up dead code and inconsistent rounding.

### Infrastructure
- **34-test suite added** (`src/lib/calculator.test.ts`) — covers `calcFormula`, `calcTiming`, `calcAssumptions`, all flour types, and edge cases (all-rye, high hydration, cold retard). All 34 pass.
- **Vitest config separated** — moved to `vitest.config.ts` to avoid `svelte-check` type conflict with `vite.config.ts`.

---

## Quick Start

```bash
npm install
npm run dev
```

Checks and production build:

```bash
npm run check
npm run build
npm run preview
```

Run tests:

```bash
npm run test
```

If you prefer Bun:

```bash
bun install
bun run dev
bun run check
bun run build
bun run preview
```

Production output is written to `build/`.

## Tech Stack

| Tool | Purpose |
| --- | --- |
| SvelteKit + `@sveltejs/adapter-static` | App framework + static output |
| Vite | Build/dev server |
| Vitest | Unit testing |
| Tailwind CSS v4 + daisyUI | Design system + component classes |
| SCSS | Small custom style layers |
| TypeScript | Type safety |

## Feature Summary

- Formula engine (hydration, inoculation, salt, starter accounting)
- Per-flour absorption + fermentation coefficients with uncertainty ranges (6 flour types)
- Stage-specific proof kinetics (`proofFermentMult` per flour + global `PROOF_KINETICS_FACTOR`)
- Temperature decay model for long bulk ferments
- Timing engine (bulk, room proof, cold retard, folds) with confidence range bounds
- Auto-generated schedule in `relative` or `clock` mode
- Fermentation philosophy: Predictability vs. Flavor Development (affects timing)
- Warnings + assumptions drawer (shows blend coefficients with uncertainty intervals)
- Localized UI (`en`, `es`, `sv`)
- Local persistence for user inputs

## Calculation Model

### 1) Per-Flour Properties

Each flour type carries absorption coefficient, fermentation multiplier, and proof fermentation multiplier as `RangedValue { value, low, high }`. Per-flour uncertainty reflects real-world variability:

| Flour | Absorption Coeff | Ferment Mult | Proof Ferment Mult | Uncertainty |
| --- | --- | --- | --- | --- |
| Bread Flour | 1.00 | 1.00 | 1.15 | ±5% |
| All-Purpose | 0.97 | 1.00 | 1.15 | ±5% |
| Whole Wheat | 1.12 | 0.95 | 1.09 | ±10% |
| Rye | 1.20 | 0.72 | 0.83 | ±20% |
| Spelt | 0.95 | 0.82 | 0.94 | ±15% |
| Einkorn | 1.12 | 0.90 | 1.04 | ±15% |

Blend values are weighted averages across the active flour blend:

```txt
blendAbsorption  = Σ (pct / blendSum) * absorptionCoeff.value
blendFermentMult = Σ (pct / blendSum) * fermentMult.value

blendAbsorptionRange.low  = Σ (pct / blendSum) * absorptionCoeff.low
blendAbsorptionRange.high = Σ (pct / blendSum) * absorptionCoeff.high
```

### 2) Hydration

Base hydration by crumb goal:

| Goal | Base Hydration |
| --- | --- |
| Tight | 65% |
| Balanced | 73% |
| Open | 82% |

Blend-absorption hydration adjustment:

```txt
wwHydrationAdjust = (blendAbsorption - 1.0) * 100
finalHydrationPct = baseHydrationPct + wwHydrationAdjust
```

Example: a 100% Rye blend adds +20%; a 100% Spelt blend subtracts −5%.

Hydration bands:

- `Low`: `< 70%`
- `Medium`: `70% - 75%`
- `High`: `> 75%`

### 3) Effective Temperature

```txt
effectiveTempC = (ambientTempC + doughTempC) / 2   // if dough temp provided
effectiveTempC = ambientTempC                       // otherwise
```

For bulk fermentations longer than 3 hours, effective temperature drifts toward ambient:

```txt
effectiveTempC += (ambientTempC - effectiveTempC) * 0.3 * (bulkHours - 3)
```

Temperature bands:

| Band | Range |
| --- | --- |
| Freezing | `< 18C` |
| Cold | `18C - <21C` |
| Standard | `21C - <24C` |
| Warm | `24C - <27C` |
| Hot | `>= 27C` |

### 4) Inoculation (Starter %)

Predictability base inoculation:

| Goal | Base % |
| --- | --- |
| Tight | 18% |
| Balanced | 20% |
| Open | 16% |

Flavor Development base inoculation:

| Goal | Base % |
| --- | --- |
| Tight | 12% |
| Balanced | 14% |
| Open | 10% |

Temperature adjustments:

- Predictability: `<21 +4`, `21-24 +0`, `24-27 -2`, `27-29 -4`, `>29 -6`
- Flavor Development: `<21 -4`, `21-24 +0`, `24-27 -3`, `27-29 -5`, `>29 -6`

Shared adjustments:

- Hydration band: `Low +2`, `High -2`
- Whole wheat ratio: if `wwRatio >= 0.30`, then `-1`

Clamps:

- Predictability: `clamp(10, 26, inoculationPct)`
- Flavor Development: `clamp(5, 12.5, inoculationPct)`

### 5) Salt and Starter Hydration Controls

Salt:

```txt
autoSaltPct = clamp(1.8, 2.2, 1.9 + wwRatio * 0.3)
effectiveSaltPct = saltAutoCalc ? autoSaltPct : saltPct
```

Starter hydration:

- Default (auto): `100%`
- Manual override available when toggle is enabled
- Effective starter hydration is clamped to `50-200%`

### 6) Starter Accounting

Starter is included in formula totals, not added on top.

```txt
starterFlourG = totalFlourG * (inoculationPct / 100)
starterTotalG = starterFlourG * (1 + starterHydrationPct / 100)
starterWaterG = starterTotalG - starterFlourG

mixFlourG = totalFlourG - starterFlourG
mixWaterG = totalWaterG - starterWaterG
```

### 7) Timing Model

Bulk baseline (hours):

| Effective Temp | Min | Max |
| --- | --- | --- |
| `<21C` | 8 | 12 |
| `21-24C` | 5 | 8 |
| `24-27C` | 3.5 | 6 |
| `27-29C` | 3 | 5 |
| `>29C` | 2 | 4 |

Multipliers:

```txt
hydrationMult        = Low:1.15, Medium:1.0, High:0.85
inocScale            = (20 / inoculationPct) ^ 0.35
blendFermentMult     = weighted average of per-flour fermentMult.value
PROOF_KINETICS_FACTOR = 1.15
blendProofFermentMult = blendFermentMult * PROOF_KINETICS_FACTOR
```

```txt
bulkMin = bulkBaseMin * hydrationMult * inocScale * blendFermentMult
bulkMax = bulkBaseMax * hydrationMult * inocScale * blendFermentMult
```

Coefficient uncertainty widens the range bounds:

```txt
bulkMinRange = bulkMin scaled by blendFermentMultRange.low
bulkMaxRange = bulkMax scaled by blendFermentMultRange.high
```

Room proof baseline is `[1.5h, 3h]` (24-26C reference), scaled by temperature + hydration + inoculation multipliers using `blendProofFermentMult`.

**Fermentation philosophy scaling:**

| Philosophy | proofMin/Max | coldRetardMin/Max |
| --- | --- | --- |
| Predictability | ×1.0 | ×1.0 |
| Flavor Development | ×1.2 | ×1.25 |

Cold retard baseline is `[8h, 16h]`, adjusted by philosophy.

Folds:

```txt
foldCount = min(4, floor(bulkMin * 60 / 30))
foldIntervalMins = 30
```

### 8) Autolyse (Off/Auto)

When `Autolyse` is toggled to `Auto`, minutes are derived from effective temperature.

| Effective Temp | Autolyse |
| --- | --- |
| `>=29C` | 20 min |
| `>=27C` | 25 min |
| `>=24C` | 30 min |
| `>=21C` | 35 min |
| `>=18C` | 40 min |
| `<18C` | 45 min |

In UI, this is shown as a non-editable progress bar.

### 9) Warnings

| Warning | Condition | Level |
| --- | --- | --- |
| Temp too low | `effectiveTempC < 18` | danger |
| Temp too high | `effectiveTempC >= 30` | danger |
| Warm temp | `27 ≤ temp < 30` | warn |
| Sweet spot | `24 ≤ temp < 27` | info |
| Slow zone | `20 ≤ temp < 24` | info |
| High hydration + warm | `hydration=High AND temp > 26` | warn |
| High hydration | `hydration=High` | info |
| WW autolyse length | `wwRatio > 0.3 AND autolyse > 30min` | info |
| Open crumb | `crumbGoal='Open'` | warn |
| High rye | `Rye > 30%` | warn |
| Rye + open crumb | `Rye > 30% AND crumbGoal='Open'` | danger |
| Fridge temp out of range | `fridgeTempC < 1 OR > 6` | warn |

### 10) Schedule Order

1. Autolyse (if enabled)
2. Add starter + salt
3. Bulk fermentation (range)
4. Stretch and fold sets
5. Rest (remaining bulk)
6. Pre-shape
7. Bench rest
8. Final shape
9. Proof (room or cold retard)
10. Preheat oven
11. Score + bake

## Theme and UI Notes

- Theme is toggled with `data-theme` and persisted in `localStorage` (`theme`).
- Default is `bumblebee` (light), dark mode is `dark`.
- Color tokens are customized in [`src/app.css`](src/app.css) using daisyUI CSS variables.

## Persistence and Localization

- Inputs are persisted in `localStorage` under `sourdough_cal_inputs`.
- Language is persisted under `sourdough_cal_lang`.
- `tempUnit` is intentionally not persisted and resets to default on reload.

## Project Structure

```txt
src/
  lib/
    calculator.ts       # formula, timing, assumptions engine
    calculator.test.ts  # 34-test vitest suite
    store.ts
    i18n.ts
    components/
      InputSection.svelte
      FormulaCard.svelte
      TimingCard.svelte
      ScheduleCard.svelte
      WarningsCard.svelte
      GuidanceCard.svelte
      AssumptionsDrawer.svelte
  routes/
    +layout.svelte
    +page.svelte
  app.css
vitest.config.ts        # vitest config (separate from vite.config.ts)
```

## License

MIT
