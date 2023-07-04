import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { imagetools } from 'vite-imagetools'
import path from 'path'

export default defineConfig({
	plugins: [
		imagetools({
			defaultDirectives: (url) => {
				const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1)
				if (['jpg', 'jpeg', 'png'].includes(extension)) {
					return new URLSearchParams({
						format: `avif;jpg`,
						w: '1200;800;400',
						as: 'picture'
					})
				}
				return new URLSearchParams()
			}
		}),
		sveltekit()
	],
	resolve: {
		alias: {
			$static: path.resolve(__dirname, './static')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
})
