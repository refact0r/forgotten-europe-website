import { slugFromPath } from '$lib/js/slugFromPath'

const MAX_POSTS = 10

export async function load() {
	const modules = import.meta.glob(`/src/content/blog/*.{md,svx,svelte.md}`)

	const postPromises = Object.entries(modules).map(([url, resolver]) =>
		resolver().then((post) => ({
			slug: slugFromPath(url),
			...post.metadata
		}))
	)

	const posts = await Promise.all(postPromises)
	const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS)

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

	return { posts: publishedPosts }
}
