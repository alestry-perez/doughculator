// ============================================================
// Sourdough Parameters Calculator — Core Logic
// ============================================================

import { type Lang, scheduleStrings, warningStrings, assumptionStrings } from './i18n';

export type CrumbGoal = 'Tight' | 'Balanced' | 'Open';
export type HydrationBand = 'Low' | 'Medium' | 'High' | 'VeryHigh';
export type TempBand = 'VeryCold' | 'Cold' | 'Standard' | 'Warm' | 'Hot';
export type ProofMethod = 'Room' | 'ColdRetard';
export type FermentationPhilosophy = 'Predictability' | 'FlavorDevelopment';

export type FlourType = 'BreadFlour' | 'AllPurpose' | 'WholeWheat' | 'Rye' | 'Spelt' | 'Einkorn';

export interface FlourBlendEntry {
	type: FlourType;
	pct: number; // percentage of total flour, entries should sum to 100
}

export const WHOLE_GRAIN_FLOURS: FlourType[] = ['WholeWheat', 'Rye', 'Spelt', 'Einkorn'];
export const ALL_FLOUR_TYPES: FlourType[] = ['BreadFlour', 'AllPurpose', 'WholeWheat', 'Rye', 'Spelt', 'Einkorn'];

// A6: Uncertainties per flour type — wider for less-predictable whole grains
const FLOUR_PROPERTIES: Record<FlourType, { absorptionCoeff: RangedValue; fermentMult: RangedValue; proofFermentMult: RangedValue }> = {
	BreadFlour:  { absorptionCoeff: ranged(1.00, 0.05), fermentMult: ranged(1.00, 0.05), proofFermentMult: ranged(1.00, 0.05) },
	AllPurpose:  { absorptionCoeff: ranged(0.97, 0.05), fermentMult: ranged(1.00, 0.05), proofFermentMult: ranged(1.00, 0.05) },
	WholeWheat:  { absorptionCoeff: ranged(1.12, 0.10), fermentMult: ranged(0.85, 0.10), proofFermentMult: ranged(0.88, 0.10) },
	Rye:         { absorptionCoeff: ranged(1.20, 0.15), fermentMult: ranged(0.72, 0.15), proofFermentMult: ranged(0.78, 0.20) }, // Rye proof is faster but not 45% faster; high-rye doughs have limited oven spring
	Spelt:       { absorptionCoeff: ranged(1.02, 0.15), fermentMult: ranged(0.82, 0.15), proofFermentMult: ranged(0.85, 0.15) },
	Einkorn:     { absorptionCoeff: ranged(1.02, 0.15), fermentMult: ranged(0.90, 0.20), proofFermentMult: ranged(0.88, 0.20) },
};

export interface Inputs {
	totalFlourInputG: number;    // total flour grams (primary input)
	flourBlend: FlourBlendEntry[]; // custom flour mix, percentages should sum to 100
	crumbGoal: CrumbGoal;
	// Advanced
	ambientTempC: number;        // default 24
	doughTempC: number | null;   // default null => use ambient
	saltAutoCalc: boolean;       // default true — auto-compute salt from flour composition
	saltPct: number;             // used only when saltAutoCalc is false; default 2.0
	starterHydrationAutoCalc: boolean; // default true — use 100% unless manually overridden
	starterHydrationPct: number; // default 100
	autolyseMins: number;        // default 30
	autolyseOn: boolean;         // default false
	proofMethod: ProofMethod;    // default 'ColdRetard'
	fermentationPhilosophy: FermentationPhilosophy; // default 'Predictability'
	scheduleMode: 'relative' | 'clock'; // default 'relative'
	startTime: string | null;    // HH:MM if clock mode
	fridgeTempC: number;         // default 4
	tempUnit: 'C' | 'F';        // display pref
}

export interface FormulaResult {
	totalFlourG: number;
	whiteFlourG: number;            // derived: totalFlourG * whitePct/100
	wwFlourG: number;               // derived: totalFlourG - whiteFlourG
	wwRatio: number;
	baseHydrationPct: number;
	wwHydrationAdjust: number;
	blendAbsorption: number;
	blendAbsorptionRange: RangedValue;
	blendFermentMult: number;
	blendFermentMultRange: RangedValue;
	blendProofFermentMult: number;
	blendProofFermentMultRange: RangedValue;
	finalHydrationPct: number;
	hydrationBand: HydrationBand;
	totalWaterG: number;
	autoSaltPct: number;            // auto-computed salt %
	effectiveSaltPct: number;       // actual salt % used (auto or override)
	saltG: number;
	effectiveStarterHydrationPct: number; // actual starter hydration used (auto 100% or override)
	inoculationPct: number;         // clamped
	starterFlourG: number;
	starterWaterG: number;
	starterTotalG: number;
	// Total formula (everything including starter)
	totalFormulaFlourG: number;     // totalFlourG (starter flour is PART of total)
	totalFormulaWaterG: number;
	totalDoughWeightG: number;
	// Mix additions (what user physically adds after starter)
	mixFlourG: number;              // totalFlourG - starterFlourG
	mixWaterG: number;              // totalWaterG - starterWaterG (clamped to 0)
	negativeWater: boolean;         // true when mixWaterG would have been negative (F-1)
	effectiveTempC: number;
	tempBand: TempBand;
}

export interface TimingResult {
	bulkMin: number;
	bulkMax: number;
	bulkMinRange: RangedValue;  // A6: coefficient-uncertainty bounds on bulkMin
	bulkMaxRange: RangedValue;  // A6: coefficient-uncertainty bounds on bulkMax
	proofMin: number;
	proofMax: number;
	proofMinRange: RangedValue;  // A6: coefficient-uncertainty bounds on proofMin
	coldRetardMin: number;
	coldRetardMax: number;
	foldCount: number;
	foldIntervalMins: number;
}

export interface ScheduleStep {
	label: string;
	durationMins: number | null;
	rangeMinMins?: number;
	rangeMaxMins?: number;
	notes?: string;
	isSubStep?: boolean;
	setCount?: number; // number of checkable sets within this step (e.g. 3 S&F, 2 coil folds)
}

export interface WarningMessage {
	level: 'info' | 'warn' | 'danger';
	message: string;
}

export interface CalcResult {
	formula: FormulaResult;
	timing: TimingResult;
	schedule: ScheduleStep[];
	warnings: WarningMessage[];
	assumptions: Record<string, string>;
}

// ============================================================
// Helpers
// ============================================================

function clamp(min: number, max: number, val: number): number {
	return Math.max(min, Math.min(max, val));
}

// A6: Uncertainty/confidence range system
export interface RangedValue {
	value: number;
	low: number;   // pessimistic bound (longer fermentation time)
	high: number;  // optimistic bound (shorter fermentation time)
}

function ranged(value: number, pct = 0.12): RangedValue {
	return {
		value,
		low: value * (1 + pct),   // higher coeff → slower → longer time
		high: value * (1 - pct),   // lower coeff → faster → shorter time
	};
}

export function recommendAutolyseMins(ambientTempC: number, doughTempC: number | null): number {
	const effectiveTempC =
		doughTempC !== null ? (ambientTempC + doughTempC) / 2 : ambientTempC;

	if (effectiveTempC >= 29) return 20;
	if (effectiveTempC >= 27) return 25;
	if (effectiveTempC >= 24) return 30;
	if (effectiveTempC >= 21) return 35;
	if (effectiveTempC >= 18) return 40;
	return 45;
}

// ============================================================
// Formula Calculation
// ============================================================

function calcFormula(inputs: Inputs): FormulaResult {
	let {
		totalFlourInputG,
		flourBlend,
		crumbGoal,
		ambientTempC,
		doughTempC,
		saltAutoCalc,
		saltPct,
		starterHydrationAutoCalc,
		starterHydrationPct
	} = inputs;

	// F-7: empty flour blend → default to 100% BreadFlour to avoid NaN chain
	if (!flourBlend.length || flourBlend.every(f => f.pct <= 0)) {
		flourBlend = [{ type: 'BreadFlour', pct: 100 }];
	}

	// F-8: zero flour input → clamp to 100g minimum (warning emitted in calcWarnings)
	if (totalFlourInputG <= 0) {
		totalFlourInputG = 100;
	}

	const totalFlourG = totalFlourInputG;

	// Normalize blend in case percentages don't sum to exactly 100
	const totalBlendPct = flourBlend.reduce((s, e) => s + e.pct, 0);
	const normFactor = totalBlendPct > 0 ? 100 / totalBlendPct : 1;
	const wwPctNorm = flourBlend
		.filter(e => WHOLE_GRAIN_FLOURS.includes(e.type))
		.reduce((s, e) => s + e.pct * normFactor, 0);
	const wwRatio = totalFlourG > 0 ? wwPctNorm / 100 : 0;
	const wwFlourG = Math.round(totalFlourG * wwRatio);
	const whiteFlourG = totalFlourG - wwFlourG;

	// Per-flour blend coefficients (weighted average)
	const blendSum = flourBlend.reduce((s, e) => s + e.pct, 0);
	const norm = blendSum > 0 ? blendSum : 1;

	// A6: compute center value and uncertainty bounds separately
	const blendAbsorptionObj = flourBlend.reduce(
		(acc, e) => {
			const p = FLOUR_PROPERTIES[e.type].absorptionCoeff;
			const w = e.pct / norm;
			return {
				value: acc.value + w * p.value,
				low: acc.low + w * p.low,
				high: acc.high + w * p.high,
			};
		},
		{ value: 0, low: 0, high: 0 } as { value: number; low: number; high: number }
	);
	const blendAbsorption = blendAbsorptionObj.value;
	const blendAbsorptionRange: RangedValue = {
		value: blendAbsorptionObj.value,
		low: blendAbsorptionObj.low,
		high: blendAbsorptionObj.high,
	};

	const blendFermentMultObj = flourBlend.reduce(
		(acc, e) => {
			const p = FLOUR_PROPERTIES[e.type].fermentMult;
			const w = e.pct / norm;
			return {
				value: acc.value + w * p.value,
				low: acc.low + w * p.low,
				high: acc.high + w * p.high,
			};
		},
		{ value: 0, low: 0, high: 0 } as { value: number; low: number; high: number }
	);
	const blendFermentMult = blendFermentMultObj.value;
	const blendFermentMultRange: RangedValue = {
		value: blendFermentMultObj.value,
		low: blendFermentMultObj.low,
		high: blendFermentMultObj.high,
	};

	// A3: weighted proof-specific ferment multiplier (mirrors blendFermentMult but from proofFermentMult)
	const blendProofFermentMultObj = flourBlend.reduce(
		(acc, e) => {
			const p = FLOUR_PROPERTIES[e.type].proofFermentMult;
			const w = e.pct / norm;
			return {
				value: acc.value + w * p.value,
				low: acc.low + w * p.low,
				high: acc.high + w * p.high,
			};
		},
		{ value: 0, low: 0, high: 0 } as { value: number; low: number; high: number }
	);

	// Base hydration by crumb goal
	const baseHydrationMap: Record<CrumbGoal, number> = {
		Tight: 65,
		Balanced: 73,
		Open: 82
	};
	const baseHydrationPct = baseHydrationMap[crumbGoal];

	// Blend-absorption-based hydration adjustment
	const wwHydrationAdjust = (blendAbsorption - 1.0) * 100;
	// F-12: cap at 95% to prevent unbounded hydration (e.g. 100% Rye + Open → 102%)
	const finalHydrationPct = Math.min(baseHydrationPct + wwHydrationAdjust, 95);

	// Hydration band
	let hydrationBand: HydrationBand;
	if (finalHydrationPct < 70) {
		hydrationBand = 'Low';
	} else if (finalHydrationPct <= 75) {
		hydrationBand = 'Medium';
	} else if (finalHydrationPct <= 83) {
		hydrationBand = 'High';
	} else {
		hydrationBand = 'VeryHigh'; // >83% — extreme hydration, faster fermentation risk
	}

	// Effective temp
	const effectiveTempC =
		doughTempC !== null ? (ambientTempC + doughTempC) / 2 : ambientTempC;

	// Temp band
	let tempBand: TempBand;
	if (effectiveTempC < 18) {
		tempBand = 'VeryCold'; // renamed from 'Freezing' — 18°C is cool, not freezing (0°C freezes water)
	} else if (effectiveTempC < 21) {
		tempBand = 'Cold';
	} else if (effectiveTempC < 24) {
		tempBand = 'Standard';
	} else if (effectiveTempC < 27) {
		tempBand = 'Warm';
	} else {
		tempBand = 'Hot';
	}

	// Inoculation calculation
	const { fermentationPhilosophy } = inputs;

	let inoculationPct: number;

	if (fermentationPhilosophy === 'FlavorDevelopment') {
		// FlavorDevelopment: lower base, inverted temp delta, tighter clamp
		const inocBase: Record<CrumbGoal, number> = {
			Tight: 12,
			Balanced: 14,
			Open: 10
		};
		inoculationPct = inocBase[crumbGoal];

		if (effectiveTempC < 21) {
			inoculationPct -= 4;
		} else if (effectiveTempC < 24) {
			inoculationPct += 0;
		} else if (effectiveTempC < 27) {
			inoculationPct -= 3;
		} else if (effectiveTempC <= 29) {
			inoculationPct -= 5;
		} else {
			inoculationPct -= 6;
		}

		// F-4: cold temp compensation — FlavorDevelopment reduces inoculation, but cold temps
		// slow fermentation further; bump inoculation up slightly to avoid stalling.
		if (effectiveTempC < 21) {
			inoculationPct += Math.min(3, (21 - effectiveTempC) * 0.5);
		}

		// Hydration band adjustment (same for both)
		if (hydrationBand === 'Low') {
			inoculationPct += 2;
		} else if (hydrationBand === 'High') {
			inoculationPct -= 2;
		} else if (hydrationBand === 'VeryHigh') {
			inoculationPct -= 3;
		}

		// WW ratio adjustment (same for both)
		if (wwRatio >= 0.3) {
			inoculationPct -= 1;
		}

		inoculationPct = clamp(5, 12.5, inoculationPct);
	} else {
		// Predictability (default): original logic
		const inocBase: Record<CrumbGoal, number> = {
			Tight: 18,
			Balanced: 20,
			Open: 16
		};
		inoculationPct = inocBase[crumbGoal];

		if (effectiveTempC < 21) {
			inoculationPct += 4;
		} else if (effectiveTempC < 24) {
			inoculationPct += 0;
		} else if (effectiveTempC < 27) {
			inoculationPct -= 2;
		} else if (effectiveTempC <= 29) {
			inoculationPct -= 4;
		} else {
			inoculationPct -= 6;
		}

		// Hydration band adjustment
		if (hydrationBand === 'Low') {
			inoculationPct += 2;
		} else if (hydrationBand === 'High') {
			inoculationPct -= 2;
		} else if (hydrationBand === 'VeryHigh') {
			inoculationPct -= 3;
		}

		// WW ratio adjustment
		if (wwRatio >= 0.3) {
			inoculationPct -= 1;
		}

		inoculationPct = clamp(10, 26, inoculationPct);
	}

	// Water and salt
	const totalWaterG = (finalHydrationPct / 100) * totalFlourG;
	// Auto salt: 1.9% for all-white → up to 2.2% at 100% WW (flavor balance). Lower bound is 1.9, not 1.8.
	const autoSaltPct = clamp(1.9, 2.2, 1.9 + wwRatio * 0.3);
	const effectiveSaltPct = saltAutoCalc ? autoSaltPct : saltPct;
	const saltG = (effectiveSaltPct / 100) * totalFlourG;

	// Starter
	const effectiveStarterHydrationPct = starterHydrationAutoCalc ? 100 : starterHydrationPct;
	const clampedStarterHydrationPct = clamp(50, 200, effectiveStarterHydrationPct);
	const starterFlourG = totalFlourG * (inoculationPct / 100);
	const starterTotalG = starterFlourG * (1 + clampedStarterHydrationPct / 100);
	const starterWaterG = starterTotalG - starterFlourG;

	// Mix additions
	const mixFlourG = totalFlourG - starterFlourG;
	// F-1: clamp to 0 — at low hydration + high inoculation + high starter hydration,
	// starterWaterG can exceed totalWaterG producing negative water
	const mixWaterGRaw = totalWaterG - starterWaterG;
	const mixWaterG = Math.max(0, mixWaterGRaw);
	const negativeWater = mixWaterGRaw < 0;

	// Total formula
	const totalFormulaFlourG = totalFlourG;
	const totalFormulaWaterG = totalWaterG;
	const totalDoughWeightG = totalFlourG + totalWaterG + saltG;

	// A3: proof-specific ferment multiplier — shaped dough proofs ~15% slower than open bulk mass
	// Uses per-flour proofFermentMult (not bulk fermentMult) for accurate proof timing
	const blendProofFermentMult = blendProofFermentMultObj.value * PROOF_KINETICS_FACTOR;
	const blendProofFermentMultRange: RangedValue = {
		value: blendProofFermentMultObj.value * PROOF_KINETICS_FACTOR,
		low: blendProofFermentMultObj.low * PROOF_KINETICS_FACTOR,
		high: blendProofFermentMultObj.high * PROOF_KINETICS_FACTOR,
	};

	return {
		totalFlourG,
		whiteFlourG,
		wwFlourG,
		wwRatio,
		baseHydrationPct,
		wwHydrationAdjust,
		blendAbsorption,
		blendAbsorptionRange,
		blendFermentMult,
		blendFermentMultRange,
		blendProofFermentMult,
		blendProofFermentMultRange,
		finalHydrationPct,
		hydrationBand,
		totalWaterG,
		autoSaltPct,
		effectiveSaltPct,
		saltG,
		effectiveStarterHydrationPct: clampedStarterHydrationPct,
		inoculationPct,
		starterFlourG,
		starterWaterG,
		starterTotalG,
		totalFormulaFlourG,
		totalFormulaWaterG,
		totalDoughWeightG,
		mixFlourG,
		mixWaterG,
		negativeWater,
		effectiveTempC,
		tempBand
	};
}

// ============================================================
// Timing Calculation
// ============================================================

function calcTiming(formula: FormulaResult, inputs: Inputs): TimingResult {
	const { effectiveTempC: rawEffectiveTempC, hydrationBand, inoculationPct, blendFermentMult, blendFermentMultRange, blendProofFermentMult, blendProofFermentMultRange } = formula;
	const { fermentationPhilosophy, ambientTempC } = inputs;

	// F-9: compute effective temp (with A4 cooling model) BEFORE bulk timing so it's used correctly.
	// A4: Temperature cooling model for long bulk ferments.
	// For bulk >3h, dough temperature gradually drifts toward ambient as heat dissipates.
	// Each hour past the 3h mark, effective temp drops 0.3°C, clamped so it never goes below ambient.
	// We use a preliminary bulk estimate based on raw temp to compute the correction, then use the
	// corrected temp for the actual bulk timing calculation.
	let effectiveTempC = rawEffectiveTempC;
	{
		// Preliminary bulk estimate using raw temp (just for computing temp correction magnitude)
		let prelimBulkBaseMin: number;
		if (rawEffectiveTempC < 21) prelimBulkBaseMin = 8;
		else if (rawEffectiveTempC < 24) prelimBulkBaseMin = 5;
		else if (rawEffectiveTempC < 27) prelimBulkBaseMin = 3.5;
		else if (rawEffectiveTempC < 29) prelimBulkBaseMin = 3;
		else prelimBulkBaseMin = 2;
		const hydrationMultPrelim =
			hydrationBand === 'Low' ? 1.15
			: hydrationBand === 'High' ? 0.85
			: hydrationBand === 'VeryHigh' ? 0.75
			: 1.0;
		const inocScalePrelim = Math.pow(20 / inoculationPct, 0.35);
		const prelimBulkMin = prelimBulkBaseMin * hydrationMultPrelim * inocScalePrelim * blendFermentMult;
		const prelimBulkMinMins = prelimBulkMin * 60;
		if (prelimBulkMinMins > 180) {
			const correctedTemp = rawEffectiveTempC - (prelimBulkMinMins / 60 - 3) * 0.3;
			effectiveTempC = Math.max(ambientTempC, Math.min(rawEffectiveTempC, correctedTemp));
		}
	}

	// Baseline bulk range (hours) by effective temp (now using corrected effectiveTempC)
	let bulkBaseMin: number;
	let bulkBaseMax: number;
	if (effectiveTempC < 21) {
		[bulkBaseMin, bulkBaseMax] = [8, 12];
	} else if (effectiveTempC < 24) {
		[bulkBaseMin, bulkBaseMax] = [5, 8];
	} else if (effectiveTempC < 27) {
		[bulkBaseMin, bulkBaseMax] = [3.5, 6];
	} else if (effectiveTempC < 29) {
		[bulkBaseMin, bulkBaseMax] = [3, 5];
	} else {
		[bulkBaseMin, bulkBaseMax] = [2, 4];
	}

	// Hydration multiplier — VeryHigh (>83%) ferments noticeably faster than High band
	const hydrationMult =
		hydrationBand === 'Low' ? 1.15
		: hydrationBand === 'High' ? 0.85
		: hydrationBand === 'VeryHigh' ? 0.75
		: 1.0;

	// Inoculation scaling
	const inocScale = Math.pow(20 / inoculationPct, 0.35);

	// A6: center estimate uses blendFermentMult scalar; bounds use .low/.high from blendFermentMultRange
	const bulkMin = bulkBaseMin * hydrationMult * inocScale * blendFermentMult;
	const bulkMax = bulkBaseMax * hydrationMult * inocScale * blendFermentMult;
	const bulkMinLow  = bulkBaseMin * hydrationMult * inocScale * blendFermentMultRange.low;   // pessimistic (longer)
	const bulkMaxHigh = bulkBaseMax * hydrationMult * inocScale * blendFermentMultRange.high;  // optimistic (shorter)

	// Room proof baseline at 24–26°C: [1.5, 3] hours, apply same multipliers
	const proofBaseMin = 1.5;
	const proofBaseMax = 3.0;

	// Temp adjustment for proof (relative to 24-26 baseline)
	let proofTempMult: number;
	if (effectiveTempC < 21) {
		proofTempMult = 2.0;
	} else if (effectiveTempC < 24) {
		proofTempMult = 1.4;
	} else if (effectiveTempC < 27) {
		proofTempMult = 1.0;
	} else if (effectiveTempC < 29) {
		proofTempMult = 0.75;
	} else {
		proofTempMult = 0.6;
	}

	// C2: blendFermentMult applied to proof (was missing — whole-grain doughs proof faster too)
	// A3: blendProofFermentMult already incorporates PROOF_KINETICS_FACTOR (computed in calcFormula)
	// A6: coefficient range bounds widen the proof window
	let proofMin = proofBaseMin * proofTempMult * hydrationMult * inocScale * blendProofFermentMult;
	let proofMax = proofBaseMax * proofTempMult * hydrationMult * inocScale * blendProofFermentMult;
	let proofMinLow  = proofBaseMin * proofTempMult * hydrationMult * inocScale * blendProofFermentMultRange.low;
	let proofMinHigh = proofBaseMin * proofTempMult * hydrationMult * inocScale * blendProofFermentMultRange.high;

	// A5: fermentationPhilosophy extends to proof and cold retard.
	// FlavorDevelopment: longer proof (+20%) and longer cold retard (+25%) to develop organic acids.
	// Predictability: no change — values are already calibrated for consistent results.
	const baseRetardMin = COLD_RETARD_MIN_H;
	const baseRetardMax = COLD_RETARD_MAX_H;

	// F-5: scale cold retard by fridge temperature; 4°C is baseline, warmer = shorter retard
	const { fridgeTempC } = inputs;
	const fridgeFactor = clamp(0.7, 1.5, 1 - (fridgeTempC - 4) * 0.08); // warmer fridge → factor < 1 → shorter retard
	let coldRetardMin = Math.round(baseRetardMin * fridgeFactor);
	let coldRetardMax = Math.round(baseRetardMax * fridgeFactor);

	if (fermentationPhilosophy === 'FlavorDevelopment') {
		proofMin *= 1.2;
		proofMax *= 1.2;
		proofMinLow *= 1.2;
		proofMinHigh *= 1.2;
		coldRetardMin = Math.round(coldRetardMin * 1.25);
		coldRetardMax = Math.round(coldRetardMax * 1.25);
	}

	// Fold interval scales with temp: warmer = shorter intervals
	let foldIntervalMins: number;
	if (effectiveTempC >= 29) foldIntervalMins = 20;
	else if (effectiveTempC >= 27) foldIntervalMins = 22;
	else if (effectiveTempC >= 24) foldIntervalMins = 25;
	else if (effectiveTempC >= 21) foldIntervalMins = 30;
	else foldIntervalMins = 35;

	// Folds during bulk — use actual foldIntervalMins instead of hardcoded 30
	const foldCount = Math.min(4, Math.floor((bulkMin * 60) / foldIntervalMins));

	// A6: coefficient-uncertainty range for bulk and proof
	const coeffRatio = blendFermentMultRange.low / blendFermentMult;  // >1 when there's uncertainty
	const bulkMinRange: RangedValue = { value: bulkMin, low: bulkMinLow, high: bulkMin / coeffRatio };
	const bulkMaxRange: RangedValue = { value: bulkMax, low: bulkMax * coeffRatio, high: bulkMaxHigh };
	const proofMinRange: RangedValue = { value: proofMin, low: proofMinLow, high: proofMin / coeffRatio };

	return {
		bulkMin,
		bulkMax,
		bulkMinRange,
		bulkMaxRange,
		proofMin,
		proofMax,
		proofMinRange,
		coldRetardMin,
		coldRetardMax,
		foldCount,
		foldIntervalMins
	};
}

// ============================================================
// Schedule Steps
// ============================================================

function calcSchedule(inputs: Inputs, formula: FormulaResult, timing: TimingResult, lang: Lang): ScheduleStep[] {
	const { autolyseOn, autolyseMins, proofMethod } = inputs;
	const { proofMin, proofMax, coldRetardMin, coldRetardMax, foldIntervalMins, bulkMin, bulkMax, foldCount } = timing;
	const s = scheduleStrings[lang];
	const steps: ScheduleStep[] = [];

	// Round bulk hours to one decimal for display
	const bulkMinH = Math.round(bulkMin * 10) / 10;
	const bulkMaxH = Math.round(bulkMax * 10) / 10;

	// L3: use temperature-adjusted autolyse recommendation
	const recommendedAutolyse = recommendAutolyseMins(inputs.ambientTempC, inputs.doughTempC);

	// 1. Autolyse (if on)
	if (autolyseOn) {
		const scheduledAutolyse = recommendedAutolyse;
		const userNote = autolyseMins !== recommendedAutolyse ? ` (your input: ${autolyseMins} min)` : '';
		steps.push({
			label: s.autolyse,
			durationMins: scheduledAutolyse,
			notes: s.autolyseNote() + userNote
		});
	}

	// 2. Mix
	steps.push({
		label: s.mix,
		durationMins: MIX_DURATION_MINS,
		notes: s.mixNote
	});

	// L2: distribute foldCount proportionally — S&F gets ~60%, coil gets remainder
	const sfSets = foldCount >= 2 ? Math.ceil(foldCount * 0.6) : Math.max(1, foldCount);
	const cfSets = Math.max(0, foldCount - sfSets) + 1;

	// 3. Stretch & Fold
	steps.push({
		label: s.stretchFold,
		durationMins: sfSets * foldIntervalMins,
		notes: s.stretchFoldNote(foldIntervalMins, sfSets),
		setCount: sfSets
	});

	// 4. Coil Folds (skip if cfSets === 0, e.g. very short bulk)
	if (cfSets > 0) {
		steps.push({
			label: s.coilFolds,
			durationMins: cfSets * foldIntervalMins,
			notes: s.coilFoldsNote(foldIntervalMins, cfSets),
			setCount: cfSets
		});
	}

	// 5. Bulk Ferment
	steps.push({
		label: s.bulkFermentation,
		durationMins: null,
		rangeMinMins: Math.round(bulkMin * 60),
		rangeMaxMins: Math.round(bulkMax * 60),
		notes: s.bulkNote(bulkMinH, bulkMaxH)
	});

	// 6. Preshape
	steps.push({
		label: s.preShape,
		durationMins: PRESHAPE_DURATION_MINS,
		notes: s.preShapeNote
	});

	// 7. Final Shape
	steps.push({
		label: s.finalShape,
		durationMins: FINAL_SHAPE_DURATION_MINS,
		notes: s.finalShapeNote
	});

	// 8. Proof
	if (proofMethod === 'Room') {
		steps.push({
			label: s.roomProof,
			durationMins: null,
			rangeMinMins: Math.round(proofMin * 60),
			rangeMaxMins: Math.round(proofMax * 60),
			notes: s.roomProofNote
		});
	} else {
		steps.push({
			label: s.coldRetard,
			durationMins: null,
			rangeMinMins: coldRetardMin * 60,
			rangeMaxMins: coldRetardMax * 60,
			notes: s.coldRetardNote(coldRetardMin, coldRetardMax)
		});
	}

	// 9. Bake — parent step (duration driven by sub-steps) + two phases
	steps.push({
		label: s.bake,
		durationMins: null,
		notes: s.bakeNote
	});
	steps.push({
		label: s.bakeCovered,
		durationMins: BAKE_COVERED_MINS,
		notes: s.bakeCoveredNote,
		isSubStep: true
	});
	steps.push({
		label: s.bakeUncovered,
		durationMins: BAKE_UNCOVERED_MINS,
		notes: s.bakeUncoveredNote,
		isSubStep: true
	});

	return steps;
}

// ============================================================
// Warnings
// ============================================================

function calcWarnings(inputs: Inputs, formula: FormulaResult, lang: Lang): WarningMessage[] {
	const warnings: WarningMessage[] = [];
	const { effectiveTempC, hydrationBand, wwRatio, effectiveStarterHydrationPct, negativeWater } = formula;
	const { autolyseOn, autolyseMins, crumbGoal, starterHydrationAutoCalc, starterHydrationPct, proofMethod, fridgeTempC } = inputs;
	const w = warningStrings[lang];

	// F-8: flour clamped to minimum
	if (inputs.totalFlourInputG <= 0) {
		warnings.push({ level: 'warn', message: w.minFlourAmount ?? 'Flour amount too low; defaulted to 100g.' });
	}

	// F-1: negative water detected
	if (negativeWater) {
		warnings.push({ level: 'danger', message: w.negativeWater ?? 'Starter hydration exceeds dough water; reduce inoculation or starter hydration.' });
	}

	// L9: sub-zero temperature guard
	const rawTemp = inputs.doughTempC !== null ? (inputs.ambientTempC + inputs.doughTempC) / 2 : inputs.ambientTempC;
	if (rawTemp <= 0) {
		warnings.push({ level: 'danger', message: w.dangerSubZeroTemp });
	}

	if (effectiveTempC < 18) {
		warnings.push({ level: 'danger', message: w.dangerLow });
	}

	if (effectiveTempC >= 30) {
		warnings.push({ level: 'danger', message: w.dangerHigh });
	}

	if (effectiveTempC >= 27 && effectiveTempC < 30) {
		warnings.push({ level: 'warn', message: w.warnHigh });
	}

	if (effectiveTempC >= 24 && effectiveTempC < 27) {
		warnings.push({ level: 'info', message: w.infoSweet });
	}

	if (effectiveTempC >= 20 && effectiveTempC < 24) {
		warnings.push({ level: 'info', message: w.infoSlow });
	}

	if ((hydrationBand === 'High' || hydrationBand === 'VeryHigh') && effectiveTempC > 26) {
		warnings.push({ level: 'warn', message: w.warnHydrationTemp });
	}

	if (hydrationBand === 'High' || hydrationBand === 'VeryHigh') {
		warnings.push({ level: 'info', message: w.infoHighHydration });
	}

	// M6: only warn about WW autolyse when the user's value exceeds the temperature-appropriate recommendation
	const recommendedAutolyse = recommendAutolyseMins(inputs.ambientTempC, inputs.doughTempC);
	if (wwRatio > 0.3 && autolyseOn && autolyseMins > recommendedAutolyse) {
		warnings.push({ level: 'info', message: w.infoWWAutolyse });
	}

	if (crumbGoal === 'Open') {
		warnings.push({ level: 'warn', message: w.warnOpenCrumb });
	}

	const ryeEntry = inputs.flourBlend.find(e => e.type === 'Rye');
	const ryePct = ryeEntry ? ryeEntry.pct : 0;

	// M2: compound guard — open crumb + high rye is physically impossible
	if (crumbGoal === 'Open' && ryePct > 60) {
		warnings.push({ level: 'danger', message: w.dangerOpenCrumbRye });
	}

	if (ryePct > 30) {
		warnings.push({ level: 'warn', message: w.ryeHighWarning });
	}

	// M5: starter hydration was silently clamped
	if (!starterHydrationAutoCalc) {
		const clamped = Math.max(50, Math.min(200, starterHydrationPct));
		if (clamped !== starterHydrationPct) {
			warnings.push({ level: 'warn', message: w.warnStarterHydrationClamped });
		}
	}

	return warnings;
}

// ============================================================
// Assumptions
// ============================================================

function calcAssumptions(inputs: Inputs, formula: FormulaResult, lang: Lang): Record<string, string> {
	const {
		ambientTempC,
		saltAutoCalc,
		saltPct,
		starterHydrationAutoCalc,
		autolyseOn,
		autolyseMins
	} = inputs;
	const {
		effectiveTempC,
		inoculationPct,
		baseHydrationPct,
		wwHydrationAdjust,
		blendAbsorption,
		blendAbsorptionRange,
		blendFermentMult,
		blendFermentMultRange,
		finalHydrationPct,
		autoSaltPct,
		effectiveSaltPct,
		effectiveStarterHydrationPct
	} = formula;
	const a = assumptionStrings[lang];

	const hydrationAdjustSign = wwHydrationAdjust >= 0 ? '+' : '';
	const timingConfidence = `${((blendFermentMultRange.low / blendFermentMult - 1) * 100).toFixed(0)}%`;
	return {
		[a.ambientTemp]: `${ambientTempC.toFixed(1)}°C`,
		'Effective temp': `${effectiveTempC.toFixed(1)}°C`,
		[a.salt]: saltAutoCalc
			? a.saltAuto(effectiveSaltPct.toFixed(2), autoSaltPct.toFixed(2))
			: a.saltManual(saltPct),
		[a.starterHydration]: starterHydrationAutoCalc
			? a.starterHydrationAuto(effectiveStarterHydrationPct)
			: a.starterHydrationManual(effectiveStarterHydrationPct),
		[a.inoculation]: `${inoculationPct.toFixed(1)}%`,
		[a.baseHydration]: `${baseHydrationPct}%`,
		[a.blendAbsorption]: `${blendAbsorption.toFixed(3)} (${blendAbsorptionRange.low.toFixed(3)}–${blendAbsorptionRange.high.toFixed(3)})`,
		[a.blendFermentMult]: `${blendFermentMult.toFixed(3)} (${blendFermentMultRange.low.toFixed(3)}–${blendFermentMultRange.high.toFixed(3)})`,
		[a.wwHydrationAdjust]: `${hydrationAdjustSign}${wwHydrationAdjust.toFixed(1)}%`,
		[a.finalHydration]: `${finalHydrationPct.toFixed(1)}%`,
		[a.autolyse]: autolyseOn ? a.autolyseMins(autolyseMins) : a.off,
		'Timing confidence': `±${timingConfidence} from flour coefficient uncertainty`,
	};
}

// ============================================================
// Main Export
// ============================================================

export function calculate(inputs: Inputs, lang: Lang = 'en'): CalcResult {
	const formula = calcFormula(inputs);
	const timing = calcTiming(formula, inputs);
	const schedule = calcSchedule(inputs, formula, timing, lang);
	const warnings = calcWarnings(inputs, formula, lang);
	const assumptions = calcAssumptions(inputs, formula, lang);

	return { formula, timing, schedule, warnings, assumptions };
}

// Utility: convert C to F for display
export function cToF(c: number): number {
	return Math.round((c * 9) / 5 + 32);
}

// Utility: convert F to C for storage
export function fToC(f: number): number {
	return (f - 32) * 5 / 9;
}

// Utility: display temp with unit
export function displayTemp(c: number, unit: 'C' | 'F'): string {
	if (unit === 'F') {
		return `${cToF(c).toFixed(0)}°F`;
	}
	return `${c.toFixed(1)}°C`;
}

// Utility: format minutes as h m string
export function formatMins(mins: number): string {
	const h = Math.floor(mins / 60);
	const m = Math.round(mins % 60);
	if (h === 0) return `${m}m`;
	if (m === 0) return `${h}h`;
	return `${h}h ${m}m`;
}

// Utility: add minutes to HH:MM string, wrap around 24h
export function addMinsToTime(startTime: string, mins: number): string {
	// F-19: guard against malformed startTime to prevent NaN propagation
	if (!/^\d{1,2}:\d{2}$/.test(startTime)) return startTime;
	const [hStr, mStr] = startTime.split(':');
	const totalMins = parseInt(hStr) * 60 + parseInt(mStr) + Math.round(mins);
	const wrappedMins = ((totalMins % (24 * 60)) + 24 * 60) % (24 * 60);
	const h = Math.floor(wrappedMins / 60);
	const m = wrappedMins % 60;
	return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

export const COLD_RETARD_MIN_H = 8;
export const COLD_RETARD_MAX_H = 16;

// A3: Shaped dough (final proof) has a tighter gluten network → CO2 escapes more slowly → proofs ~15% slower per unit of the same multiplier stack
export const PROOF_KINETICS_FACTOR = 1.15;

// A6: Per-flour-type coefficient uncertainty notes for UI display (does not affect calculations)
export const COEFFICIENT_NOTES: Record<FlourType, string> = {
	BreadFlour: 'Values vary by protein content (±5%)',
	AllPurpose: 'Values vary by brand (±5%)',
	WholeWheat: 'Values vary with bran content (±10%)',
	Spelt: 'High variability by milling (±15%)',
	Einkorn: 'High variability by variety (±20%)',
	Rye: 'Values vary by extraction rate (±15%)',
};
export const BAKE_COVERED_MINS = 20;
export const BAKE_UNCOVERED_MINS = 20;
export const PRESHAPE_DURATION_MINS = 45;
export const FINAL_SHAPE_DURATION_MINS = 10;
export const MIX_DURATION_MINS = 45;

export const DEFAULT_INPUTS: Inputs = {
	totalFlourInputG: 500,
	flourBlend: [
		{ type: 'BreadFlour' as FlourType, pct: 80 },
		{ type: 'WholeWheat' as FlourType, pct: 20 }
	],
	crumbGoal: 'Balanced',
	ambientTempC: 24,
	doughTempC: null,
	saltAutoCalc: true,
	saltPct: 2.0,
	starterHydrationAutoCalc: true,
	starterHydrationPct: 100,
	autolyseMins: 30,
	autolyseOn: false,          // default off
	proofMethod: 'ColdRetard',  // default overnight cold proof
	fermentationPhilosophy: 'Predictability',
	scheduleMode: 'relative',
	startTime: null,
	fridgeTempC: 4,
	tempUnit: 'C'
};
