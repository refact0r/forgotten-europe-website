import adapter from '@sveltejs/adapter-auto'
import md from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		md.mdsvex(mdsvexConfig),
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter()
	}
}

export default config
