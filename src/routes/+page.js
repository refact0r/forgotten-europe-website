import { slugFromPath } from '$lib/js/slugFromPath'

export async function load() {
	const modules = import.meta.glob(`/src/content/blog/*.{md,svx,svelte.md}`)

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then((post) => ({
			slug: slugFromPath(path),
			...post.metadata
		}))
	)

	const posts = await Promise.all(postPromises)
	const publishedPosts = posts.filter((post) => post.published)

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

	return { post: publishedPosts[0] }
}