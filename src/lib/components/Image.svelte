<script>
	import PictureSources from '$lib/components/PictureSources.svelte'
	import { nameFromPath } from '$lib/js/utils.js'

	export let path
	export let caption

	async function getImage(path) {
		const name = nameFromPath(path)
		const ext = path.split('.').pop()
		return [await import(`../images/uploads/${name}.${ext}`), ext]
	}
</script>

<div class="container">
	{#await getImage(path) then [image, ext]}
		<picture>
			<PictureSources src={image} />
			<img
				class="image"
				src={image.img.src}
				width="352"
				height="198"
				type={`image/${ext}`}
				alt={caption}
			/>
		</picture>
	{/await}
	{#if caption}
		<div class="caption">{caption}</div>
	{/if}
</div>

<style lang="scss">
	img {
		width: 100%;
		height: auto;
	}

	.container {
		margin: 1.5rem 0;
	}
</style>
