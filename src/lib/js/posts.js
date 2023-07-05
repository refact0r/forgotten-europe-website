import { nameFromPath } from '$lib/js/utils.js'

export default async function getPosts(modules) {
	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then((post) => ({
			slug: nameFromPath(path),
			...post.metadata
		}))
	)

	const posts = await Promise.all(postPromises)
	const published = posts.filter((post) => post.published)
	published.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

	return published
}
