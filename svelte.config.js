import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({
			edge: true
		})
	}
}

export default config
