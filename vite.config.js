import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from 'vite-imagetools'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [imagetools(), sveltekit()],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
}

export default config
