import { nameFromPath } from '$lib/js/utils.js'

export default async function getPosts(modules, limit = 0, tags = []) {
	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then((post) => ({
			slug: nameFromPath(path),
			...post.metadata
		}))
	)

	const posts = await Promise.all(postPromises)
	let published = posts.filter((post) => post.published)
	published.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
	published = published.filter((post) => {
		if (tags.length === 0) {
			return true
		}
		return post.tags.some((tag) => tags.includes(tag))
	})

	if (limit > 0) {
		return published.slice(0, limit)
	}
	return published
}
