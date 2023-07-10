<script>
	import PictureSources from './PictureSources.svelte'
	import { nameFromPath } from '$lib/js/utils.js'

	export let post

	const { slug, quote, thumbnail } = post

	async function getImage(path) {
		const name = nameFromPath(path)
		const ext = path.split('.').pop()
		return [await import(`../images/uploads/${name}.${ext}`), ext]
	}
</script>

<a class="interview clickable" href={`interviews/${slug}`}>
	<div class="label">{quote}</div>
	<div class="image-container">
		<span class="fi fi-pl" />
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
		border-radius: 1rem;
		text-decoration: none;
		font-weight: 400;
		font-size: 1.1rem;
		text-align: center;
	}

	.image-container {
		position: relative;
	}

	span {
		font-size: 1.5rem;
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}

	.image {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
		display: block;
		object-fit: cover;
		aspect-ratio: 16/9;
	}
</style>
