import { describe, it, expect } from 'vitest';
import {
	calculate,
	recommendAutolyseMins,
	COLD_RETARD_MIN_H,
	COLD_RETARD_MAX_H,
	type Inputs,
	type FlourBlendEntry,
} from './calculator';

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------

function makeInputs(overrides: Partial<Inputs> = {}): Inputs {
	return {
		totalFlourInputG: 500,
		flourBlend: [{ type: 'BreadFlour', pct: 100 }],
		crumbGoal: 'Balanced',
		ambientTempC: 24,
		doughTempC: null,
		saltAutoCalc: true,
		saltPct: 2.0,
		starterHydrationAutoCalc: true,
		starterHydrationPct: 100,
		autolyseMins: 30,
		autolyseOn: false,
		proofMethod: 'ColdRetard',
		fermentationPhilosophy: 'Predictability',
		scheduleMode: 'relative',
		startTime: null,
		fridgeTempC: 4,
		tempUnit: 'C',
		...overrides,
	};
}

function warnings(inputs: Partial<Inputs> = {}) {
	return calculate(makeInputs(inputs)).warnings;
}

// -------------------------------------------------------
// 1. Flour coefficients
// -------------------------------------------------------

describe('Flour coefficients', () => {
	it('Einkorn absorptionCoeff produces lower hydration than WholeWheat', () => {
		const einkorn = calculate(makeInputs({ flourBlend: [{ type: 'Einkorn', pct: 100 }] }));
		const ww = calculate(makeInputs({ flourBlend: [{ type: 'WholeWheat', pct: 100 }] }));
		expect(einkorn.formula.finalHydrationPct).toBeLessThan(ww.formula.finalHydrationPct);
	});

	it('Einkorn blendAbsorption is ~0.87', () => {
		const result = calculate(makeInputs({ flourBlend: [{ type: 'Einkorn', pct: 100 }] }));
		expect(result.formula.blendAbsorption).toBeCloseTo(0.87, 2);
	});

	it('Spelt blendAbsorption is ~1.02', () => {
		const result = calculate(makeInputs({ flourBlend: [{ type: 'Spelt', pct: 100 }] }));
		expect(result.formula.blendAbsorption).toBeCloseTo(1.02, 2);
	});

	it('Spelt absorbs more than AllPurpose', () => {
		const spelt = calculate(makeInputs({ flourBlend: [{ type: 'Spelt', pct: 100 }] }));
		const ap = calculate(makeInputs({ flourBlend: [{ type: 'AllPurpose', pct: 100 }] }));
		expect(spelt.formula.blendAbsorption).toBeGreaterThan(ap.formula.blendAbsorption);
	});

	it('WholeWheat fermentMult is ~0.85 (produces shorter bulk than BreadFlour)', () => {
		const ww = calculate(makeInputs({ flourBlend: [{ type: 'WholeWheat', pct: 100 }] }));
		const bf = calculate(makeInputs({ flourBlend: [{ type: 'BreadFlour', pct: 100 }] }));
		expect(ww.timing.bulkMax).toBeLessThan(bf.timing.bulkMax);
	});

	it('WholeWheat blendFermentMult is ~0.85', () => {
		const result = calculate(makeInputs({ flourBlend: [{ type: 'WholeWheat', pct: 100 }] }));
		expect(result.formula.blendFermentMult).toBeCloseTo(0.85, 2);
	});
});

// -------------------------------------------------------
// 2. Room proof blendFermentMult
// -------------------------------------------------------

describe('Room proof blendFermentMult', () => {
	it('100% rye room proof is shorter than 100% bread flour room proof', () => {
		const rye = calculate(makeInputs({
			flourBlend: [{ type: 'Rye', pct: 100 }],
			proofMethod: 'Room',
		}));
		const bf = calculate(makeInputs({
			flourBlend: [{ type: 'BreadFlour', pct: 100 }],
			proofMethod: 'Room',
		}));
		expect(rye.timing.proofMin).toBeLessThan(bf.timing.proofMin);
	});

	it('proofMin scales with blendFermentMult — WW proof shorter than BreadFlour proof', () => {
		const ww = calculate(makeInputs({
			flourBlend: [{ type: 'WholeWheat', pct: 100 }],
			proofMethod: 'Room',
		}));
		const bf = calculate(makeInputs({
			flourBlend: [{ type: 'BreadFlour', pct: 100 }],
			proofMethod: 'Room',
		}));
		expect(ww.timing.proofMin).toBeLessThan(bf.timing.proofMin);
	});
});

// -------------------------------------------------------
// 3. Warning conditions
// -------------------------------------------------------

describe('Warnings', () => {
	it('rye >60% + open crumb emits danger', () => {
		const ws = warnings({
			flourBlend: [{ type: 'Rye', pct: 70 }, { type: 'BreadFlour', pct: 30 }],
			crumbGoal: 'Open',
		});
		expect(ws.some(w => w.level === 'danger' && w.message.toLowerCase().includes('rye'))).toBe(true);
	});

	it('rye <=60% + open crumb does NOT emit the compound danger', () => {
		const ws = warnings({
			flourBlend: [{ type: 'Rye', pct: 50 }, { type: 'BreadFlour', pct: 50 }],
			crumbGoal: 'Open',
		});
		const dangerRye = ws.filter(w => w.level === 'danger' && w.message.toLowerCase().includes('rye'));
		expect(dangerRye.length).toBe(0);
	});

	it('starterHydrationPct below 50 emits warn', () => {
		const ws = warnings({
			starterHydrationAutoCalc: false,
			starterHydrationPct: 30,
		});
		expect(ws.some(w => w.level === 'warn' && w.message.toLowerCase().includes('starter'))).toBe(true);
	});

	it('starterHydrationPct above 200 emits warn', () => {
		const ws = warnings({
			starterHydrationAutoCalc: false,
			starterHydrationPct: 250,
		});
		expect(ws.some(w => w.level === 'warn' && w.message.toLowerCase().includes('starter'))).toBe(true);
	});

	it('starterHydrationPct within [50,200] does NOT emit clamping warn', () => {
		const ws = warnings({
			starterHydrationAutoCalc: false,
			starterHydrationPct: 100,
		});
		const clampWarn = ws.filter(w => w.level === 'warn' && w.message.toLowerCase().includes('starter'));
		expect(clampWarn.length).toBe(0);
	});

	it('ambientTempC <= 0 emits danger', () => {
		const ws = warnings({ ambientTempC: 0 });
		expect(ws.some(w => w.level === 'danger')).toBe(true);
	});

	it('ambientTempC = -5 emits danger', () => {
		const ws = warnings({ ambientTempC: -5 });
		expect(ws.some(w => w.level === 'danger')).toBe(true);
	});

	it('ColdRetard + fridgeTempC !== 4 emits info', () => {
		const ws = warnings({ proofMethod: 'ColdRetard', fridgeTempC: 7 });
		expect(ws.some(w => w.level === 'info' && w.message.toLowerCase().includes('fridge'))).toBe(true);
	});

	it('ColdRetard + fridgeTempC === 4 does NOT emit fridge info', () => {
		const ws = warnings({ proofMethod: 'ColdRetard', fridgeTempC: 4 });
		const fridgeInfo = ws.filter(w => w.level === 'info' && w.message.toLowerCase().includes('fridge'));
		expect(fridgeInfo.length).toBe(0);
	});
});

// -------------------------------------------------------
// 4. Hydration bands — VeryHigh
// -------------------------------------------------------

describe('VeryHigh hydration band', () => {
	it('100% rye open crumb lands in VeryHigh band', () => {
		// Rye absorptionCoeff 1.20 → wwHydrationAdjust +20 → Open base 82 + 20 = 102% → VeryHigh
		const result = calculate(makeInputs({
			flourBlend: [{ type: 'Rye', pct: 100 }],
			crumbGoal: 'Open',
		}));
		expect(result.formula.hydrationBand).toBe('VeryHigh');
	});

	it('VeryHigh band produces shorter bulkMax than High band at same temp', () => {
		// Force VeryHigh: open crumb + high-absorption flour
		const veryHigh = calculate(makeInputs({
			flourBlend: [{ type: 'Rye', pct: 100 }],
			crumbGoal: 'Open',
		}));
		// Force High: bread flour, open crumb → 82% hydration
		const high = calculate(makeInputs({
			flourBlend: [{ type: 'BreadFlour', pct: 100 }],
			crumbGoal: 'Open',
		}));
		expect(high.formula.hydrationBand).toBe('High');
		expect(veryHigh.timing.bulkMax).toBeLessThan(high.timing.bulkMax);
	});
});

// -------------------------------------------------------
// 5. Autolyse contradiction fix (M6)
// -------------------------------------------------------

describe('Autolyse WW warning (M6)', () => {
	it('WW >30% + autolyse ON + autolyseMins <= recommendAutolyseMins → no warn', () => {
		const ambientTempC = 24; // recommendAutolyseMins returns 30 at 24°C
		const ws = warnings({
			flourBlend: [{ type: 'WholeWheat', pct: 50 }, { type: 'BreadFlour', pct: 50 }],
			autolyseOn: true,
			autolyseMins: 30, // equal to recommended → no warning
			ambientTempC,
		});
		expect(ws.some(w => w.message.toLowerCase().includes('autolyse') || w.message.toLowerCase().includes('autolyze'))).toBe(false);
	});

	it('WW >30% + autolyse ON + autolyseMins > recommendAutolyseMins → warn emitted', () => {
		const ambientTempC = 24; // recommendAutolyseMins returns 30 at 24°C
		const ws = warnings({
			flourBlend: [{ type: 'WholeWheat', pct: 50 }, { type: 'BreadFlour', pct: 50 }],
			autolyseOn: true,
			autolyseMins: 60, // exceeds recommendation → warn
			ambientTempC,
		});
		expect(ws.some(w => w.message.toLowerCase().includes('autolyse') || w.message.toLowerCase().includes('autolyze') || w.message.toLowerCase().includes('whole'))).toBe(true);
	});
});

// -------------------------------------------------------
// 6. Edge cases — must produce valid (non-NaN, non-zero) output
// -------------------------------------------------------

describe('Edge cases', () => {
	it('100% einkorn produces valid formula', () => {
		const result = calculate(makeInputs({ flourBlend: [{ type: 'Einkorn', pct: 100 }] }));
		expect(result.formula.totalFlourG).toBeGreaterThan(0);
		expect(result.formula.totalWaterG).toBeGreaterThan(0);
		expect(Number.isNaN(result.formula.totalWaterG)).toBe(false);
		expect(result.timing.bulkMin).toBeGreaterThan(0);
		expect(Number.isNaN(result.timing.bulkMin)).toBe(false);
	});

	it('100% rye produces valid formula', () => {
		const result = calculate(makeInputs({ flourBlend: [{ type: 'Rye', pct: 100 }] }));
		expect(result.formula.totalFlourG).toBeGreaterThan(0);
		expect(result.formula.totalWaterG).toBeGreaterThan(0);
		expect(Number.isNaN(result.timing.bulkMin)).toBe(false);
		expect(result.timing.bulkMin).toBeGreaterThan(0);
	});

	it('mixed flour blend percentages summing to 100 produce valid formula', () => {
		const blend: FlourBlendEntry[] = [
			{ type: 'BreadFlour', pct: 40 },
			{ type: 'WholeWheat', pct: 30 },
			{ type: 'Rye', pct: 20 },
			{ type: 'Spelt', pct: 10 },
		];
		const result = calculate(makeInputs({ flourBlend: blend }));
		expect(Number.isNaN(result.formula.finalHydrationPct)).toBe(false);
		expect(result.formula.finalHydrationPct).toBeGreaterThan(0);
	});

	it('very cold temp (1°C) produces valid (but danger-warned) result', () => {
		const result = calculate(makeInputs({ ambientTempC: 1 }));
		expect(result.timing.bulkMin).toBeGreaterThan(0);
		expect(result.warnings.some(w => w.level === 'danger')).toBe(true);
	});

	it('hot temp (32°C) produces valid and shorter bulk than cold (18°C)', () => {
		const hot = calculate(makeInputs({ ambientTempC: 32 }));
		const cold = calculate(makeInputs({ ambientTempC: 18 }));
		expect(hot.timing.bulkMax).toBeLessThan(cold.timing.bulkMax);
	});

	it('cold retard timing constants match COLD_RETARD_MIN_H / MAX_H', () => {
		const result = calculate(makeInputs({ proofMethod: 'ColdRetard' }));
		expect(result.timing.coldRetardMin).toBe(COLD_RETARD_MIN_H);
		expect(result.timing.coldRetardMax).toBe(COLD_RETARD_MAX_H);
	});
});

// -------------------------------------------------------
// 7. recommendAutolyseMins
// -------------------------------------------------------

describe('recommendAutolyseMins', () => {
	it('returns 20 at >=29°C', () => expect(recommendAutolyseMins(29, null)).toBe(20));
	it('returns 25 at 27°C', () => expect(recommendAutolyseMins(27, null)).toBe(25));
	it('returns 30 at 24°C', () => expect(recommendAutolyseMins(24, null)).toBe(30));
	it('returns 35 at 21°C', () => expect(recommendAutolyseMins(21, null)).toBe(35));
	it('returns 40 at 18°C', () => expect(recommendAutolyseMins(18, null)).toBe(40));
	it('returns 45 below 18°C', () => expect(recommendAutolyseMins(15, null)).toBe(45));
	it('averages ambient and dough temp when doughTempC provided', () => {
		// ambient 20, dough 28 → effective 24 → 30 min
		expect(recommendAutolyseMins(20, 28)).toBe(30);
	});
});
