# DoughCulator

Sourdough formula, timing, and schedule calculator built with SvelteKit, Tailwind CSS v4, daisyUI, and SCSS.

The app is static-build friendly and tuned for practical home baking inputs: flour blend, temperature, crumb goal, proof method, and schedule mode.

## What Changed Recently

- Added artisan-bakery warm light/dark styling on top of daisyUI (`bumblebee` + `dark`) with a cleaner header toggle.
- `Autolyse` is now `Off/Auto` and **temperature-driven** when enabled.
- Autolyse duration is display-only (progress bar), not manually draggable.
- `Starter Hydration (%)` now matches Salt behavior: default auto value (`100%`) with optional manual override.
- Schedule step helper text updated to: `Press to mark completed step`.

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
| Tailwind CSS v4 + daisyUI | Design system + component classes |
| SCSS | Small custom style layers |
| TypeScript | Type safety |

## Feature Summary

- Formula engine (hydration, inoculation, salt, starter accounting)
- Timing engine (bulk, room proof, cold retard, folds)
- Auto-generated schedule in `relative` or `clock` mode
- Warnings + assumptions drawer
- Localized UI (`en`, `es`, `sv`)
- Local persistence for user inputs

## Calculation Model (Current)

### 1) Hydration

Base hydration by crumb goal:

| Goal | Base Hydration |
| --- | --- |
| Tight | 65% |
| Balanced | 73% |
| Open | 82% |

Whole wheat hydration adjustment:

```txt
wwHydrationAdjust = clamp(0, 5, wwRatio * 100 * 0.12)
finalHydrationPct = baseHydrationPct + wwHydrationAdjust
```

Hydration band:

- `Low`: `< 70%`
- `Medium`: `70% - 75%`
- `High`: `> 75%`

### 2) Effective Temperature

```txt
effectiveTempC = (ambientTempC + doughTempC) / 2   // if dough temp provided
effectiveTempC = ambientTempC                       // otherwise
```

Temperature bands:

| Band | Range |
| --- | --- |
| Freezing | `< 18C` |
| Cold | `18C - <21C` |
| Standard | `21C - <24C` |
| Warm | `24C - <27C` |
| Hot | `>= 27C` |

### 3) Inoculation (Starter %)

The app supports two fermentation philosophies.

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

### 4) Salt and Starter Hydration Controls

Salt:

```txt
autoSaltPct = clamp(1.8, 2.2, 1.9 + wwRatio * 0.3)
effectiveSaltPct = saltAutoCalc ? autoSaltPct : saltPct
```

Starter hydration:

- Default (auto): `100%`
- Manual override available when toggle is enabled
- Effective starter hydration is clamped to `50-200%`

### 5) Starter Accounting

Starter is included in formula totals, not added on top.

```txt
starterFlourG = totalFlourG * (inoculationPct / 100)
starterTotalG = starterFlourG * (1 + starterHydrationPct / 100)
starterWaterG = starterTotalG - starterFlourG

mixFlourG = totalFlourG - starterFlourG
mixWaterG = totalWaterG - starterWaterG
```

### 6) Timing Model

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
hydrationMult = Low:1.15, Medium:1.0, High:0.85
inocScale = (20 / inoculationPct) ^ 0.35
wwMult = wwRatio >= 0.30 ? 0.95 : 1.0
```

```txt
bulkMin = bulkBaseMin * hydrationMult * inocScale * wwMult
bulkMax = bulkBaseMax * hydrationMult * inocScale * wwMult
```

Room proof baseline is `[1.5h, 3h]` (24-26C reference), then scaled by temperature + hydration + inoculation multipliers.

Cold retard is fixed guidance: `[8h, 16h]`.

Folds:

```txt
foldCount = min(4, floor(bulkMin * 60 / 30))
foldIntervalMins = 30
```

### 7) Autolyse (Off/Auto)

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

### 8) Schedule Order

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
    calculator.ts
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
```

## License

MIT
