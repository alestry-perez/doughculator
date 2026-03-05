import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { calculate, DEFAULT_INPUTS, type Inputs, type CalcResult } from './calculator';

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

function createInputsStore() {
	const { subscribe, set, update } = writable<Inputs>(loadInputs());

	return {
		subscribe,
		set: (val: Inputs) => {
			persistInputs(val);
			set(val);
		},
		update: (fn: (val: Inputs) => Inputs) => {
			update((current) => {
				const next = fn(current);
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

export const result = derived<typeof inputs, CalcResult>(inputs, ($inputs) => {
	return calculate($inputs);
});

// Drawer open state
export const assumptionsOpen = writable(false);
