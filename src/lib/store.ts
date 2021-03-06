import type { Sample, Lang, Language, Signal, SignalType } from 'src/common/types';
import { readable, writable, derived, Readable } from 'svelte/store';
import data from '$lib/data/langs.json';

let langs = data as unknown as Language[];

class LangStore {
	get allLanguages() {
		return readable(null, function start(set) {
			set(langs);
			return function stop() {};
		});
	}
}

export const store = new LangStore();
export const selectedLanguage = writable(null);
export const selectedSignal = writable(null);
export const selectedSample = writable(null);

export const languages: Readable<Lang[]> = derived(
	[store.allLanguages, selectedLanguage],
	([$langStore, $selectedLanguage]) => {
		if ($selectedLanguage) {
			// if the selected language changed, clear the selected signal/sample stores
			selectedSignal.set(null);
			selectedSample.set(null);
		}

		return $langStore.map((l: Language) => l.lang);
	}
);

export const filteredSignals: Readable<SignalType[]> = derived(
	[store.allLanguages, selectedLanguage, selectedSignal],
	([$langStore, $selectedLanguage, $selectedSignal]) => {
		if (!$selectedLanguage) {
			return [];
		}
		if ($selectedSignal) {
			// if the signal changes, clear the selected sample
			selectedSample.set(null);
		}
		return $langStore.find((l) => l.lang === $selectedLanguage).signals.map((s: Signal) => s.type);
	}
);

export const filteredSamples: Readable<Sample[]> = derived(
	[store.allLanguages, selectedLanguage, selectedSignal],
	([$store, $selectedLanguage, $selectedSignal]) => {
		if (!$selectedLanguage || !$selectedSignal) {
			return [];
		}
		return $store
			.find((l: Language) => l.lang === $selectedLanguage)
			.signals.find((s: Signal) => s.type === $selectedSignal)
			.apps.map((app: Sample) => app);
	}
);
