// import adapter from '@sveltejs/adapter-auto';
import azure from 'svelte-adapter-azure-swa';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter(),
    adapter: azure()
	}
};

export default config;
