<script>
	import PictureSources from '$lib/components/PictureSources.svelte'
	import { nameFromPath } from '$lib/js/utils.js'

	export let post

	const { slug, quote, thumbnail } = post

	async function getImage(path) {
		const name = nameFromPath(path)
		const ext = path.split('.').pop()
		return [await import(`../../../static/images/uploads/${name}.${ext}`), ext]
	}
</script>

<a class="interview clickable" href={`interviews/${slug}`}>
	<div class="label">{quote}</div>
	<div class="image-container">
		{#await getImage(thumbnail) then [image, ext]}
			<picture>
				<PictureSources src={image} />
				<img
					class="image"
					src={image.img.src}
					width="352"
					height="198"
					type={`image/${ext}`}
					alt={quote}
				/>
			</picture>
		{/await}
	</div>
</a>

<style lang="scss">
	.interview {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		text-decoration: none;
		font-weight: 400;
		font-size: 1.1rem;
		text-align: center;
	}

	.image-container {
		position: relative;
	}

	.image {
		width: 100%;
		height: auto;
		border-radius: 0.25rem;
		display: block;
		object-fit: cover;
		aspect-ratio: 16/9;
	}
</style>
