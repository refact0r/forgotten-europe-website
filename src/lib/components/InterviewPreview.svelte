<script>
	import PictureSources from '$lib/components/PictureSources.svelte'
	import importImage from '$lib/js/images.js'

	export let post

	const { slug, quote, thumbnail } = post
</script>

<a class="interview clickable" href={`interviews/${slug}`}>
	<h3>{quote}</h3>
	<div class="image-container">
		{#await importImage(thumbnail) then image}
			<picture>
				<PictureSources src={image} sizes="30vw" />
				<img class="image" src={image.img.src} width="352" height="198" alt={quote} />
			</picture>
		{/await}
	</div>
</a>

<style lang="scss">
	.interview {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
		text-decoration: none;
		font-weight: 400;
		justify-content: space-between;
	}

	h3 {
		margin: 0;
		font-size: 1.1rem;
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
