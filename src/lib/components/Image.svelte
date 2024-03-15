<script>
	import PictureSources from '$lib/components/PictureSources.svelte'
	import importImage from '$lib/js/images.js'

	export let src
	export let caption
	export let source
</script>

<div class="container">
	{#await importImage(src) then image}
		<picture>
			<PictureSources src={image} sizes="70vw" />
			<img class="image" src={image.img.src} width="500" height="198" alt={caption} />
		</picture>
	{/await}
	{#if caption}
		<div class="caption">
			{caption}
			{#if source}
				<a href={source}>Source</a>
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	img {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
	}

	.container {
		margin: 1.5rem 0;
	}
</style>
