import adapter from '@sveltejs/adapter-netlify'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		}),
		mdsvex({
			extensions: ['.md'],
			smartypants: {
				oldschool: true
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
