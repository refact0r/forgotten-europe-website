import getPosts from '$lib/js/posts'

export async function load() {
	let modules = import.meta.glob(`/src/content/blog/*.{md,svx,svelte.md}`)
	const blogs = await getPosts(modules)

	modules = import.meta.glob(`/src/content/interviews/*.{md,svx,svelte.md}`)
	const interviews = await getPosts(modules)

	return { blog: blogs[0], interview: interviews[0] }
}
