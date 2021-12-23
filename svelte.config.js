import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		target: '#svelte',
		adapter: adapter({
			pages: 'public',  // path to public directory
			assets: 'public',  // path to public directory
			fallback: null
		}),
		appDir: 'app_',
	}
};

export default config;
