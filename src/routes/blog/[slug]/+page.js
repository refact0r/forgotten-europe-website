import { slugFromPath } from '$lib/js/slugFromPath'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	const modules = import.meta.glob(`/src/content/blog/*.{md,svx,svelte.md}`)

	let match = {}

	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			match = { path, resolver: resolver }
			break
		}
	}

	const post = await match?.resolver?.()

	if (!post || !post.metadata.published) {
		throw error(404)
	}

	return {
		component: post.default,
		frontmatter: post.metadata
	}
}
