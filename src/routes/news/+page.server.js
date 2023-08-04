import getPosts from '$lib/js/posts.js'

export async function load() {
	const modules = import.meta.glob('/src/content/news/*.md')
	const posts = await getPosts(modules, 3)
	return { posts }
}
