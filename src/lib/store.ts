import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { calculate, DEFAULT_INPUTS, type Inputs, type CalcResult } from './calculator';
import { type Lang } from './i18n';

const STORAGE_KEY = 'sourdough_cal_inputs';

function loadInputs(): Inputs {
	if (!browser) return { ...DEFAULT_INPUTS };
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			// Merge with defaults to handle new fields added later
			return { ...DEFAULT_INPUTS, ...parsed, tempUnit: DEFAULT_INPUTS.tempUnit };
		}
	} catch {
		// ignore parse errors
	}
	return { ...DEFAULT_INPUTS };
}

function persistInputs(inputs: Inputs) {
	if (!browser) return;
	try {
		// Omit tempUnit from persistence per spec
		const { tempUnit, ...rest } = inputs;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(rest));
	} catch {
		// ignore storage errors
	}
}

function normalizeInputs(inputs: Inputs): Inputs {
	let { flourBlend, totalFlourInputG, ...rest } = inputs;
	if (!flourBlend.length || flourBlend.every(f => f.pct <= 0)) {
		flourBlend = [{ type: 'BreadFlour', pct: 100 }];
	}
	if (totalFlourInputG <= 0) {
		totalFlourInputG = 100;
	}
	return { ...rest, flourBlend, totalFlourInputG };
}

function createInputsStore() {
	const { subscribe, set, update } = writable<Inputs>(normalizeInputs(loadInputs()));

	return {
		subscribe,
		set: (val: Inputs) => {
			const normalized = normalizeInputs(val);
			persistInputs(normalized);
			set(normalized);
		},
		update: (fn: (val: Inputs) => Inputs) => {
			update((current) => {
				const next = normalizeInputs(fn(current));
				persistInputs(next);
				return next;
			});
		},
		reset: () => {
			const defaults = { ...DEFAULT_INPUTS };
			persistInputs(defaults);
			set(defaults);
		}
	};
}

export const inputs = createInputsStore();

// Language preference
const LANG_KEY = 'sourdough_cal_lang';

function loadLang(): Lang {
	if (!browser) return 'en';
	return (localStorage.getItem(LANG_KEY) as Lang) ?? 'en';
}

export const lang = writable<Lang>(loadLang());

lang.subscribe((val) => {
	if (browser) localStorage.setItem(LANG_KEY, val);
});

export const result = derived([inputs, lang], ([$inputs, $lang]) => {
	return calculate($inputs, $lang);
});

// Drawer open state
export const assumptionsOpen = writable(false);

// Baker's formula display mode toggle
const FULL_FORMULA_KEY = 'sourdough_cal_full_formula';

function loadFullFormula(): boolean {
	if (!browser) return false;
	return localStorage.getItem(FULL_FORMULA_KEY) === 'true';
}

export const showFullFormula = writable<boolean>(loadFullFormula());

showFullFormula.subscribe((val) => {
	if (browser) localStorage.setItem(FULL_FORMULA_KEY, String(val));
});

// Collapsible section states for InputSection
const BAKING_PROFILE_KEY = 'sourdough_cal_baking_profile';
const FINE_TUNING_KEY = 'sourdough_cal_fine_tuning';

function loadBool(key: string, defaultVal: boolean): boolean {
	if (!browser) return defaultVal;
	const stored = localStorage.getItem(key);
	if (stored === null) return defaultVal;
	return stored === 'true';
}

export const showBakingProfile = writable<boolean>(loadBool(BAKING_PROFILE_KEY, true));
export const showFineTuning = writable<boolean>(loadBool(FINE_TUNING_KEY, false));

showBakingProfile.subscribe((val) => {
	if (browser) localStorage.setItem(BAKING_PROFILE_KEY, String(val));
});
showFineTuning.subscribe((val) => {
	if (browser) localStorage.setItem(FINE_TUNING_KEY, String(val));
});
