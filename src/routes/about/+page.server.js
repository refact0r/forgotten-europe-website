import getPosts from '$lib/js/posts.js'

export async function load() {
	const modules = import.meta.glob('/src/content/leadership/*.md')
	const posts = await getPosts(modules)

	posts.sort((a, b) => (a.order > b.order ? 1 : -1))

	return { posts }
}
