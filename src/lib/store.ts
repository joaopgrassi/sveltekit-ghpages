import { readable } from 'svelte/store';
import langs from '$lib/data/langs.json';

class LangStore {
  get languages() {
    return readable(null, function start(set) {
      set(langs)
      return function stop() {};
    });
  }
}

export const langStore = new LangStore();