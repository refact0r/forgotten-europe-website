import getPosts from '$lib/js/posts.js'

export async function load() {
	const modules = import.meta.glob(`/src/content/interviews/*.{md,svx,svelte.md}`)
	const posts = await getPosts(modules)
	return { posts }
}
