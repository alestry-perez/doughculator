# Sourdough Parameters Calculator

A fully static SvelteKit web app that calculates formula, timing, and bake schedule for sourdough bread based on your flour amounts, crumb goal, and environment.

## Quick Start

```bash
# Install dependencies
bun install

# Run dev server
bun dev

# Build for production (static output)
bun build

# Preview the production build
bun preview
```

The production output is written to `build/` and is fully static — deploy anywhere (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Bun | Package manager + scripts |
| Vite | Build tool |
| SvelteKit + adapter-static | UI framework, static output |
| Tailwind CSS v4 + SCSS | Styling |
| TypeScript | Type safety |

---

## Calculation Model

### 1. Hydration

**Base hydration by crumb goal:**

| Goal | Base Hydration |
|------|---------------|
| Tight | 65% |
| Balanced | 73% |
| Open | 82% |

**Whole-wheat (WW) adjustment:**
```
wwHydrationAdjust = clamp(0, 5, wwRatio * 100 * 0.12)
```
Example: 30% WW -> +3.6%, 42% WW -> +5% (clamped at 5%).

**Final hydration:**
```
finalHydrationPct = baseHydrationPct + wwHydrationAdjust
```

**Hydration band classification:**
- `Low`: finalHydrationPct < 70%
- `Medium`: 70% <= finalHydrationPct <= 75%
- `High`: finalHydrationPct > 75%

---

### 2. Temperature Bands

Effective temperature is computed as:
```
effectiveTempC = (ambientTempC + doughTempC) / 2   // if doughTempC provided
effectiveTempC = ambientTempC                        // otherwise
```

| Band | Range | Effect |
|------|-------|--------|
| Cold | < 18 C | Very slow / near dormant |
| Freezing | 18-21 C | Extremely slow fermentation |
| Standard | 21-24 C | Slow and sour, great flavor |
| Warm | 24-27 C | Active, sweet spot |
| Hot | > 27 C | Fast, risk of overproofing |

---

### 3. Inoculation (Starter %)

**Base inoculation by crumb goal:**

| Goal | Base % |
|------|--------|
| Tight | 18% |
| Balanced | 20% |
| Open | 16% |

**Temperature adjustment:**

| Effective Temp | Adjustment |
|----------------|-----------|
| < 21 C | +4% |
| 21-24 C | +/-0% |
| 24-27 C | -2% |
| 27-29 C | -4% |
| > 29 C | -6% |

**Hydration band adjustment:**

| Band | Adjustment |
|------|-----------|
| Low | +2% |
| Medium | +/-0% |
| High | -2% |

**WW ratio adjustment:**
- wwRatio >= 0.30 -> -1%

**Clamping:**
```
inoculationPct = clamp(10, 26, rawInoculationPct)
```

**Starter breakdown:**
```
starterFlourG = totalFlourG * (inoculationPct / 100)
starterTotalG = starterFlourG * (1 + starterHydrationPct / 100)
starterWaterG = starterTotalG - starterFlourG
```

The starter flour and starter water are **included in** the total formula flour and water. The "Mix additions" shown to the user are what they physically add from the bag/tap (excluding what's already in the starter).

```
mixFlourG = totalFlourG - starterFlourG
mixWaterG = totalWaterG - starterWaterG
```

---

### 4. Timing Model

**Bulk fermentation baseline (hours) by effective temp:**

| Temp | Min | Max |
|------|-----|-----|
| < 21 C | 8h | 12h |
| 21-24 C | 5h | 8h |
| 24-27 C | 3.5h | 6h |
| 27-29 C | 3h | 5h |
| > 29 C | 2h | 4h |

**Multipliers applied to both min and max:**

1. Hydration multiplier:
   - Low -> x1.15
   - Medium -> x1.0
   - High -> x0.85

2. Inoculation scaling:
   ```
   inocScale = (20 / inoculationPct) ^ 0.35
   ```

3. WW ratio (if wwRatio >= 0.30) -> x0.95

**Final bulk range:**
```
bulkMin = bulkBaseMin * hydrationMult * inocScale * wwMult
bulkMax = bulkBaseMax * hydrationMult * inocScale * wwMult
```

**Room proof:** baseline [1.5h, 3h] at 24-26 C, then apply a temp multiplier relative to that baseline, plus hydration and inoculation multipliers.

**Cold retard:** always [8h, 16h] -- simple guidance range regardless of other factors.

**Stretch-and-fold folds:**
```
foldCount = min(4, floor(bulkMin * 60 / 30))
foldIntervalMins = 30
```

---

### 5. Starter Accounting in the Total Formula

The starter is **not additive on top of the flour/water**. Instead:

- `totalFlourG` = whiteFlouG + wwFlourG (the flour weight you target)
- The starter provides `starterFlourG` grams of that flour and `starterWaterG` of that water
- You add the remainder (`mixFlourG`, `mixWaterG`) from the bag and tap

This keeps baker's percentages consistent: everything divides by `totalFlourG`.

---

### 6. Schedule

Steps are generated in this order:
1. Autolyse (if enabled)
2. Add starter + salt
3. Bulk fermentation (range)
4. Stretch and fold sets (1-4, every 30 min)
5. Rest (remaining bulk)
6. Pre-shape
7. Bench rest (30 min)
8. Final shape
9. Proof (room or cold retard)
10. Preheat oven (45 min)
11. Score + Bake (45 min total: 20 min covered + 25 min uncovered)

In **clock mode**, each step shows an absolute start time calculated from your chosen start time. In **relative mode**, each step shows a duration or range.

---

## Project Structure

```
src/
  lib/
    calculator.ts        -- core calculation logic, types, utilities
    store.ts             -- Svelte stores, localStorage persistence
    components/
      InputSection.svelte   -- flour inputs, crumb goal, advanced options
      FormulaCard.svelte    -- baker's percentage table
      TimingCard.svelte     -- bulk/proof timing with visual bar
      ScheduleCard.svelte   -- step-by-step schedule
      WarningsCard.svelte   -- alerts (info/warn/danger)
      GuidanceCard.svelte   -- reading your crumb
      AssumptionsDrawer.svelte -- slide-up drawer with assumptions
  routes/
    +layout.svelte       -- imports app.css
    +page.svelte         -- main page wiring all components
  app.css                -- Tailwind v4 import
```

---

## License

MIT
