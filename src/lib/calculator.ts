// ============================================================
// Sourdough Parameters Calculator — Core Logic
// ============================================================

import { type Lang, scheduleStrings, warningStrings, assumptionStrings } from './i18n';

export type CrumbGoal = 'Tight' | 'Balanced' | 'Open';
export type HydrationBand = 'Low' | 'Medium' | 'High';
export type TempBand = 'Freezing' | 'Cold' | 'Standard' | 'Warm' | 'Hot';
export type ProofMethod = 'Room' | 'ColdRetard';
export type FermentationPhilosophy = 'Predictability' | 'FlavorDevelopment';

export type FlourType = 'BreadFlour' | 'AllPurpose' | 'WholeWheat' | 'Rye' | 'Spelt' | 'Einkorn';

export interface FlourBlendEntry {
	type: FlourType;
	pct: number; // percentage of total flour, entries should sum to 100
}

export const WHOLE_GRAIN_FLOURS: FlourType[] = ['WholeWheat', 'Rye', 'Spelt', 'Einkorn'];
export const ALL_FLOUR_TYPES: FlourType[] = ['BreadFlour', 'AllPurpose', 'WholeWheat', 'Rye', 'Spelt', 'Einkorn'];

const FLOUR_PROPERTIES: Record<FlourType, { absorptionCoeff: number; fermentMult: number }> = {
	BreadFlour:  { absorptionCoeff: 1.00, fermentMult: 1.00 },
	AllPurpose:  { absorptionCoeff: 0.97, fermentMult: 1.00 },
	WholeWheat:  { absorptionCoeff: 1.12, fermentMult: 0.95 },
	Rye:         { absorptionCoeff: 1.20, fermentMult: 0.72 },
	Spelt:       { absorptionCoeff: 0.95, fermentMult: 0.82 },
	Einkorn:     { absorptionCoeff: 1.12, fermentMult: 0.90 },
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
	whiteFlouG: number;             // derived: totalFlourG * whitePct/100
	wwFlourG: number;               // derived: totalFlourG - whiteFlouG
	wwRatio: number;
	baseHydrationPct: number;
	wwHydrationAdjust: number;
	blendAbsorption: number;
	blendFermentMult: number;
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
	mixWaterG: number;              // totalWaterG - starterWaterG
	effectiveTempC: number;
	tempBand: TempBand;
}

export interface TimingResult {
	bulkMin: number;
	bulkMax: number;
	proofMin: number;
	proofMax: number;
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
	const {
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

	const totalFlourG = totalFlourInputG;

	// Normalize blend in case percentages don't sum to exactly 100
	const totalBlendPct = flourBlend.reduce((s, e) => s + e.pct, 0);
	const normFactor = totalBlendPct > 0 ? 100 / totalBlendPct : 1;
	const wwPctNorm = flourBlend
		.filter(e => WHOLE_GRAIN_FLOURS.includes(e.type))
		.reduce((s, e) => s + e.pct * normFactor, 0);
	const wwRatio = totalFlourG > 0 ? wwPctNorm / 100 : 0;
	const wwFlourG = Math.round(totalFlourG * wwRatio);
	const whiteFlouG = totalFlourG - wwFlourG;

	// Per-flour blend coefficients (weighted average)
	const blendSum = flourBlend.reduce((s, e) => s + e.pct, 0);
	const norm = blendSum > 0 ? blendSum : 1;
	const blendAbsorption = flourBlend.reduce(
		(s, e) => s + (e.pct / norm) * FLOUR_PROPERTIES[e.type].absorptionCoeff, 0
	);
	const blendFermentMult = flourBlend.reduce(
		(s, e) => s + (e.pct / norm) * FLOUR_PROPERTIES[e.type].fermentMult, 0
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
	const finalHydrationPct = baseHydrationPct + wwHydrationAdjust;

	// Hydration band
	let hydrationBand: HydrationBand;
	if (finalHydrationPct < 70) {
		hydrationBand = 'Low';
	} else if (finalHydrationPct <= 75) {
		hydrationBand = 'Medium';
	} else {
		hydrationBand = 'High';
	}

	// Effective temp
	const effectiveTempC =
		doughTempC !== null ? (ambientTempC + doughTempC) / 2 : ambientTempC;

	// Temp band
	let tempBand: TempBand;
	if (effectiveTempC < 18) {
		tempBand = 'Freezing';
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

		// Hydration band adjustment (same for both)
		if (hydrationBand === 'Low') {
			inoculationPct += 2;
		} else if (hydrationBand === 'High') {
			inoculationPct -= 2;
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
		}

		// WW ratio adjustment
		if (wwRatio >= 0.3) {
			inoculationPct -= 1;
		}

		inoculationPct = clamp(10, 26, inoculationPct);
	}

	// Water and salt
	const totalWaterG = (finalHydrationPct / 100) * totalFlourG;
	// Auto salt: 1.9% for all-white → up to 2.2% at 100% WW (flavor balance)
	const autoSaltPct = clamp(1.8, 2.2, 1.9 + wwRatio * 0.3);
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
	const mixWaterG = totalWaterG - starterWaterG;

	// Total formula
	const totalFormulaFlourG = totalFlourG;
	const totalFormulaWaterG = totalWaterG;
	const totalDoughWeightG = totalFlourG + totalWaterG + saltG;

	return {
		totalFlourG,
		whiteFlouG,
		wwFlourG,
		wwRatio,
		baseHydrationPct,
		wwHydrationAdjust,
		blendAbsorption,
		blendFermentMult,
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
		effectiveTempC,
		tempBand
	};
}

// ============================================================
// Timing Calculation
// ============================================================

function calcTiming(formula: FormulaResult): TimingResult {
	const { effectiveTempC, hydrationBand, inoculationPct, blendFermentMult } = formula;

	// Baseline bulk range (hours) by effective temp
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

	// Hydration multiplier
	const hydrationMult =
		hydrationBand === 'Low' ? 1.15 : hydrationBand === 'High' ? 0.85 : 1.0;

	// Inoculation scaling
	const inocScale = Math.pow(20 / inoculationPct, 0.35);

	const bulkMin = bulkBaseMin * hydrationMult * inocScale * blendFermentMult;
	const bulkMax = bulkBaseMax * hydrationMult * inocScale * blendFermentMult;

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

	const proofMin = proofBaseMin * proofTempMult * hydrationMult * inocScale;
	const proofMax = proofBaseMax * proofTempMult * hydrationMult * inocScale;

	// Cold retard: always [8, 16] hours
	const coldRetardMin = 8;
	const coldRetardMax = 16;

	// Folds during bulk
	const foldCount = Math.min(4, Math.floor((bulkMin * 60) / 30));
	const foldIntervalMins = 30;

	return {
		bulkMin,
		bulkMax,
		proofMin,
		proofMax,
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
	const { bulkMin, bulkMax, proofMin, proofMax, coldRetardMin, coldRetardMax, foldCount, foldIntervalMins } = timing;
	const s = scheduleStrings[lang];
	const steps: ScheduleStep[] = [];

	// 1. Autolyse (if on)
	if (autolyseOn) {
		steps.push({
			label: s.autolyse,
			durationMins: autolyseMins,
			notes: s.autolyseNote()
		});
	}

	// 2. Add starter + salt
	steps.push({
		label: s.addStarterSalt,
		durationMins: 5,
		notes: s.addStarterNote
	});

	// 3. Bulk fermentation start
	steps.push({
		label: s.bulkFermentation,
		durationMins: null,
		rangeMinMins: Math.round(bulkMin * 60),
		rangeMaxMins: Math.round(bulkMax * 60),
		notes: s.bulkNote
	});

	// 4. Stretch & fold sets (sub-steps of bulk fermentation)
	for (let i = 1; i <= foldCount; i++) {
		steps.push({
			label: s.stretchFold(i),
			durationMins: 5,
			notes: s.stretchFoldNote(i, i * foldIntervalMins),
			isSubStep: true
		});
	}

	// 5. Rest (remaining bulk)
	const foldEndMins = foldCount * foldIntervalMins;
	const remainingBulkMin = Math.max(0, Math.round(bulkMin * 60) - foldEndMins - 5);
	steps.push({
		label: s.restBulk,
		durationMins: remainingBulkMin > 0 ? remainingBulkMin : null,
		notes: s.restNote
	});

	// 6. Pre-shape
	steps.push({
		label: s.preShape,
		durationMins: 5,
		notes: s.preShapeNote
	});

	// 7. Bench rest
	steps.push({
		label: s.benchRest,
		durationMins: 30,
		notes: s.benchRestNote
	});

	// 8. Final shape
	steps.push({
		label: s.finalShape,
		durationMins: 10,
		notes: s.finalShapeNote
	});

	// 9. Proof
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
			notes: s.coldRetardNote(inputs.fridgeTempC)
		});
	}

	// 10. Preheat oven
	steps.push({
		label: s.preheatOven,
		durationMins: 45,
		notes: s.preheatNote
	});

	// 11. Score + Bake
	steps.push({
		label: s.scoreBake,
		durationMins: 45,
		notes: s.scoreBakeNote
	});

	return steps;
}

// ============================================================
// Warnings
// ============================================================

function calcWarnings(inputs: Inputs, formula: FormulaResult, lang: Lang): WarningMessage[] {
	const warnings: WarningMessage[] = [];
	const { effectiveTempC, hydrationBand, wwRatio } = formula;
	const { autolyseOn, autolyseMins, crumbGoal } = inputs;
	const w = warningStrings[lang];

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

	if (hydrationBand === 'High' && effectiveTempC > 26) {
		warnings.push({ level: 'warn', message: w.warnHydrationTemp });
	}

	if (hydrationBand === 'High') {
		warnings.push({ level: 'info', message: w.infoHighHydration });
	}

	if (wwRatio > 0.3 && autolyseOn && autolyseMins > 30) {
		warnings.push({ level: 'info', message: w.infoWWAutolyse });
	}

	if (crumbGoal === 'Open') {
		warnings.push({ level: 'warn', message: w.warnOpenCrumb });
	}

	const ryeEntry = inputs.flourBlend.find(e => e.type === 'Rye');
	if (ryeEntry && ryeEntry.pct > 30) {
		warnings.push({ level: 'warn', message: w.ryeHighWarning });
	}

	return warnings;
}

// ============================================================
// Assumptions
// ============================================================

function calcAssumptions(inputs: Inputs, formula: FormulaResult, lang: Lang): Record<string, string> {
	const {
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
		blendFermentMult,
		finalHydrationPct,
		autoSaltPct,
		effectiveSaltPct,
		effectiveStarterHydrationPct
	} = formula;
	const a = assumptionStrings[lang];

	const hydrationAdjustSign = wwHydrationAdjust >= 0 ? '+' : '';
	return {
		[a.ambientTemp]: `${effectiveTempC.toFixed(1)}°C`,
		[a.salt]: saltAutoCalc
			? a.saltAuto(effectiveSaltPct.toFixed(2), autoSaltPct.toFixed(2))
			: a.saltManual(saltPct),
		[a.starterHydration]: starterHydrationAutoCalc
			? a.starterHydrationAuto(effectiveStarterHydrationPct)
			: a.starterHydrationManual(effectiveStarterHydrationPct),
		[a.inoculation]: `${inoculationPct.toFixed(1)}%`,
		[a.baseHydration]: `${baseHydrationPct}%`,
		[a.blendAbsorption]: blendAbsorption.toFixed(3),
		[a.blendFermentMult]: blendFermentMult.toFixed(3),
		[a.wwHydrationAdjust]: `${hydrationAdjustSign}${wwHydrationAdjust.toFixed(1)}%`,
		[a.finalHydration]: `${finalHydrationPct.toFixed(1)}%`,
		[a.autolyse]: autolyseOn ? a.autolyseMins(autolyseMins) : a.off
	};
}

// ============================================================
// Main Export
// ============================================================

export function calculate(inputs: Inputs, lang: Lang = 'en'): CalcResult {
	const formula = calcFormula(inputs);
	const timing = calcTiming(formula);
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
	const [hStr, mStr] = startTime.split(':');
	const totalMins = parseInt(hStr) * 60 + parseInt(mStr) + Math.round(mins);
	const wrappedMins = ((totalMins % (24 * 60)) + 24 * 60) % (24 * 60);
	const h = Math.floor(wrappedMins / 60);
	const m = wrappedMins % 60;
	return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

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
