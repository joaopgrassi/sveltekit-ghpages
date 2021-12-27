import { readable, writable, derived } from 'svelte/store';
import langs from '$lib/data/langs.json';

class LangStore {
  get allLanguages() {
    return readable(null, function start(set) {
      set(langs)
      return function stop() {};
    });
  }
}

export const store = new LangStore();
export const selectedLanguage = writable(null)
export const selectedSignal= writable(null)
export const selectedSample = writable(null)

export const languages = derived(
  [store.allLanguages, selectedLanguage], ([$langStore, $selectedLanguage]) => {
    if ($selectedLanguage) {
      // if the selected language changed, clear the selected signal/sample stores
      selectedSignal.set(null);
      selectedSample.set(null);
    }

    const test = $langStore.map((l: any) => l.lang);
    return test;
  }
)

export const filteredSignals = derived(
  [store.allLanguages, selectedLanguage, selectedSignal], ([$langStore, $selectedLanguage, $selectedSignal]) => {
    if (!$selectedLanguage) {
      return [];
    }
    if ($selectedSignal) {
      // if the signal changes, clear the selected sample
      selectedSample.set(null);
    }
    return $langStore.find(l => l.lang === $selectedLanguage).signals.map((s: any) => s.type);
  }
)

export const filteredSamples = derived(
  [store.allLanguages, selectedLanguage, selectedSignal], ([$store, $selectedLanguage, $selectedSignal]) => {
    if (!$selectedLanguage || !$selectedSignal) {
      return [];
    }
    return $store.find(l => l.lang === $selectedLanguage).signals.find(s => s.type === $selectedSignal).apps.map((app: any) => app);
  }
)
