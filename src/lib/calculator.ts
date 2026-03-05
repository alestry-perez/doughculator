// ============================================================
// Sourdough Parameters Calculator — Core Logic
// ============================================================

export type CrumbGoal = 'Tight' | 'Balanced' | 'Open';
export type HydrationBand = 'Low' | 'Medium' | 'High';
export type TempBand = 'Freezing' | 'Cold' | 'Standard' | 'Warm' | 'Hot';
export type ProofMethod = 'Room' | 'ColdRetard';

export interface Inputs {
	totalFlourInputG: number;    // total flour grams (primary input)
	whitePct: number;            // white flour %, 0–100 (WW% = 100 - whitePct)
	crumbGoal: CrumbGoal;
	// Advanced
	ambientTempC: number;        // default 24
	doughTempC: number | null;   // default null => use ambient
	saltAutoCalc: boolean;       // default true — auto-compute salt from flour composition
	saltPct: number;             // used only when saltAutoCalc is false; default 2.0
	starterHydrationPct: number; // default 100
	autolyseMins: number;        // default 30
	autolyseOn: boolean;         // default false
	proofMethod: ProofMethod;    // default 'ColdRetard'
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
	finalHydrationPct: number;
	hydrationBand: HydrationBand;
	totalWaterG: number;
	autoSaltPct: number;            // auto-computed salt %
	effectiveSaltPct: number;       // actual salt % used (auto or override)
	saltG: number;
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

// ============================================================
// Formula Calculation
// ============================================================

function calcFormula(inputs: Inputs): FormulaResult {
	const {
		totalFlourInputG,
		whitePct,
		crumbGoal,
		ambientTempC,
		doughTempC,
		saltAutoCalc,
		saltPct,
		starterHydrationPct
	} = inputs;

	const totalFlourG = totalFlourInputG;
	const whiteFlouG = Math.round(totalFlourG * (whitePct / 100));
	const wwFlourG = totalFlourG - whiteFlouG;
	const wwRatio = totalFlourG > 0 ? wwFlourG / totalFlourG : 0;

	// Base hydration by crumb goal
	const baseHydrationMap: Record<CrumbGoal, number> = {
		Tight: 65,
		Balanced: 73,
		Open: 82
	};
	const baseHydrationPct = baseHydrationMap[crumbGoal];

	// WW adjustment
	const wwHydrationAdjust = clamp(0, 5, wwRatio * 100 * 0.12);
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
		tempBand = 'Cold';
	} else if (effectiveTempC < 21) {
		tempBand = 'Freezing';
	} else if (effectiveTempC < 24) {
		tempBand = 'Standard';
	} else if (effectiveTempC < 27) {
		tempBand = 'Warm';
	} else {
		tempBand = 'Hot';
	}

	// Inoculation calculation
	const inocBase: Record<CrumbGoal, number> = {
		Tight: 18,
		Balanced: 20,
		Open: 16
	};
	let inoculationPct = inocBase[crumbGoal];

	// Temp adjustment
	if (effectiveTempC < 21) {
		inoculationPct += 4;
	} else if (effectiveTempC < 24) {
		inoculationPct += 0;
	} else if (effectiveTempC < 27) {
		inoculationPct -= 2;
	} else if (effectiveTempC < 29) {
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

	// Water and salt
	const totalWaterG = (finalHydrationPct / 100) * totalFlourG;
	// Auto salt: 1.9% for all-white → up to 2.2% at 100% WW (flavor balance)
	const autoSaltPct = clamp(1.8, 2.2, 1.9 + wwRatio * 0.3);
	const effectiveSaltPct = saltAutoCalc ? autoSaltPct : saltPct;
	const saltG = (effectiveSaltPct / 100) * totalFlourG;

	// Starter
	const starterFlourG = totalFlourG * (inoculationPct / 100);
	const starterTotalG = starterFlourG * (1 + starterHydrationPct / 100);
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
		finalHydrationPct,
		hydrationBand,
		totalWaterG,
		autoSaltPct,
		effectiveSaltPct,
		saltG,
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
	const { effectiveTempC, hydrationBand, inoculationPct, wwRatio } = formula;

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

	// WW multiplier
	const wwMult = wwRatio >= 0.3 ? 0.95 : 1.0;

	const bulkMin = bulkBaseMin * hydrationMult * inocScale * wwMult;
	const bulkMax = bulkBaseMax * hydrationMult * inocScale * wwMult;

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

function calcSchedule(inputs: Inputs, formula: FormulaResult, timing: TimingResult): ScheduleStep[] {
	const { autolyseOn, autolyseMins, proofMethod } = inputs;
	const { bulkMin, bulkMax, proofMin, proofMax, coldRetardMin, coldRetardMax, foldCount, foldIntervalMins } = timing;
	const steps: ScheduleStep[] = [];

	// 1. Autolyse (if on)
	if (autolyseOn) {
		steps.push({
			label: 'Autolyse',
			durationMins: autolyseMins,
			notes: `Mix flour and most of water (hold back ~50g water, all salt, all starter). Cover and rest.`
		});
	}

	// 2. Add starter + salt
	steps.push({
		label: 'Add Starter + Salt',
		durationMins: 5,
		notes: 'Incorporate starter and salt, pinch and fold until fully integrated.'
	});

	// 3. Bulk fermentation start
	steps.push({
		label: 'Bulk Fermentation',
		durationMins: null,
		rangeMinMins: Math.round(bulkMin * 60),
		rangeMaxMins: Math.round(bulkMax * 60),
		notes: `Ferment until dough has grown 50–75%, feels airy, passes float test. Adjust based on your environment.`
	});

	// 4. Stretch & fold sets
	for (let i = 1; i <= foldCount; i++) {
		steps.push({
			label: `Stretch & Fold ${i}`,
			durationMins: 5,
			notes: `Set of 4 coil folds (${i * foldIntervalMins} min into bulk). Dough should start to hold tension.`
		});
	}

	// 5. Rest (remaining bulk)
	const foldEndMins = foldCount * foldIntervalMins;
	const remainingBulkMin = Math.max(0, Math.round(bulkMin * 60) - foldEndMins - 5);
	steps.push({
		label: 'Rest (Remaining Bulk)',
		durationMins: remainingBulkMin > 0 ? remainingBulkMin : null,
		notes: 'Cover and leave undisturbed. Watch for signs of fermentation (bubbles, jiggle, rise).'
	});

	// 6. Pre-shape
	steps.push({
		label: 'Pre-shape',
		durationMins: 5,
		notes: 'Gentle pre-shape, rest on counter uncovered.'
	});

	// 7. Bench rest
	steps.push({
		label: 'Bench Rest',
		durationMins: 30,
		notes: 'Allow gluten to relax before final shape.'
	});

	// 8. Final shape
	steps.push({
		label: 'Final Shape',
		durationMins: 10,
		notes: 'Shape into batard or boule. Build surface tension. Place seam-side up in floured banneton.'
	});

	// 9. Proof
	if (proofMethod === 'Room') {
		steps.push({
			label: 'Room Temperature Proof',
			durationMins: null,
			rangeMinMins: Math.round(proofMin * 60),
			rangeMaxMins: Math.round(proofMax * 60),
			notes: 'Cover banneton. Dough should puff and pass the poke test (slow spring-back).'
		});
	} else {
		steps.push({
			label: 'Cold Retard (Fridge)',
			durationMins: null,
			rangeMinMins: coldRetardMin * 60,
			rangeMaxMins: coldRetardMax * 60,
			notes: `Place covered banneton in fridge at ${inputs.fridgeTempC}°C. Can bake directly from cold.`
		});
	}

	// 10. Preheat oven
	steps.push({
		label: 'Preheat Oven + Dutch Oven',
		durationMins: 45,
		notes: '500°F / 260°C with Dutch oven inside. Oven must be fully saturated with heat.'
	});

	// 11. Score + Bake
	steps.push({
		label: 'Score + Bake',
		durationMins: 45,
		notes: 'Score dough quickly. Bake covered 20 min, then uncover and bake 25 min more until deep golden.'
	});

	return steps;
}

// ============================================================
// Warnings
// ============================================================

function calcWarnings(inputs: Inputs, formula: FormulaResult): WarningMessage[] {
	const warnings: WarningMessage[] = [];
	const { effectiveTempC, hydrationBand, wwRatio } = formula;
	const { autolyseOn, autolyseMins, crumbGoal } = inputs;

	if (effectiveTempC < 18) {
		warnings.push({
			level: 'danger',
			message: 'Dough temp dangerously low — fermentation nearly dormant. Consider warming location.'
		});
	}

	if (effectiveTempC >= 30) {
		warnings.push({
			level: 'danger',
			message: 'Above 30°C — overproofing risk and structural integrity drops. Use cold water, cool location, or fridge.'
		});
	}

	if (effectiveTempC >= 27 && effectiveTempC < 30) {
		warnings.push({
			level: 'warn',
			message: 'High temperature — watch dough closely, may ferment faster than estimated.'
		});
	}

	if (effectiveTempC >= 24 && effectiveTempC < 27) {
		warnings.push({
			level: 'info',
			message: 'Sweet spot temperature — ideal for active fermentation.'
		});
	}

	if (effectiveTempC >= 20 && effectiveTempC < 24) {
		warnings.push({
			level: 'info',
			message: 'Slow & sour zone — excellent flavor development, longer timeline.'
		});
	}

	if (hydrationBand === 'High' && effectiveTempC > 26) {
		warnings.push({
			level: 'warn',
			message: 'High hydration + warm temp — runaway fermentation risk. Aim for cooler environment (~22–23°C).'
		});
	}

	if (hydrationBand === 'High') {
		warnings.push({
			level: 'info',
			message: 'High hydration dough — requires strong bench technique. Wet hands, gentle folds.'
		});
	}

	if (wwRatio > 0.3 && autolyseOn && autolyseMins > 30) {
		warnings.push({
			level: 'info',
			message: 'High whole wheat % — consider shorter autolyse (20–25 min) or bassinage technique to improve handling.'
		});
	}

	if (crumbGoal === 'Open') {
		warnings.push({
			level: 'warn',
			message: 'Open crumb requires tighter environmental control. Monitor dough closely for proper fermentation signs.'
		});
	}

	return warnings;
}

// ============================================================
// Assumptions
// ============================================================

function calcAssumptions(inputs: Inputs, formula: FormulaResult): Record<string, string> {
	const { saltAutoCalc, saltPct, starterHydrationPct, autolyseOn, autolyseMins } = inputs;
	const {
		effectiveTempC,
		inoculationPct,
		baseHydrationPct,
		wwHydrationAdjust,
		finalHydrationPct,
		autoSaltPct,
		effectiveSaltPct
	} = formula;

	return {
		'Ambient temp': `${effectiveTempC.toFixed(1)}°C`,
		'Salt': saltAutoCalc
			? `${effectiveSaltPct.toFixed(2)}% (auto — ${autoSaltPct.toFixed(2)}% computed from flour blend)`
			: `${saltPct}% (manual override)`,
		'Starter hydration': `${starterHydrationPct}%`,
		'Inoculation': `${inoculationPct.toFixed(1)}%`,
		'Base hydration': `${baseHydrationPct}%`,
		'WW hydration adjust': `+${wwHydrationAdjust.toFixed(1)}%`,
		'Final hydration': `${finalHydrationPct.toFixed(1)}%`,
		'Autolyse': autolyseOn ? `${autolyseMins} min` : 'Off'
	};
}

// ============================================================
// Main Export
// ============================================================

export function calculate(inputs: Inputs): CalcResult {
	const formula = calcFormula(inputs);
	const timing = calcTiming(formula);
	const schedule = calcSchedule(inputs, formula, timing);
	const warnings = calcWarnings(inputs, formula);
	const assumptions = calcAssumptions(inputs, formula);

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
	whitePct: 80,               // → 400g white, 100g WW
	crumbGoal: 'Balanced',
	ambientTempC: 24,
	doughTempC: null,
	saltAutoCalc: true,
	saltPct: 2.0,
	starterHydrationPct: 100,
	autolyseMins: 30,
	autolyseOn: false,          // default off
	proofMethod: 'ColdRetard',  // default overnight cold proof
	scheduleMode: 'relative',
	startTime: null,
	fridgeTempC: 4,
	tempUnit: 'C'
};
