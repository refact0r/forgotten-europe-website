import { nameFromPath } from '$lib/js/utils.js'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	const modules = import.meta.glob('/src/content/curriculum/*.md')

	let match = {}

	for (const [path, resolver] of Object.entries(modules)) {
		if (nameFromPath(path) === params.slug) {
			match = { path, resolver }
			break
		}
	}

	const post = await match?.resolver?.()

	if (!post || !post.metadata.published) {
		throw error(404, 'Lesson not found')
	}

	return {
		component: post.default,
		frontmatter: post.metadata
	}
}
