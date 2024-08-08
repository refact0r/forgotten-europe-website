import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import { imagetools } from 'vite-imagetools'
import autoImport from 'sveltekit-autoimport'

export default defineConfig({
	plugins: [
		autoImport({
			components: ['./src/lib/components'],
			include: ['**/*.svelte', 'src/content/**/*.md']
		}),
		imagetools({
			defaultDirectives: (url) => {
				const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1)
				if (['jpg', 'jpeg', 'png', 'webp'].includes(extension)) {
					return new URLSearchParams({
						format: `avif;jpg`,
						w: '2000;1600;1200;800;400',
						as: 'picture'
					})
				}
				return new URLSearchParams()
			}
		}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables" as *;'
			}
		}
	},
	assetsInclude: 'src/content/uploads/*'
})
