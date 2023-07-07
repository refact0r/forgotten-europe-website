<script>
	export let image
	export let caption
</script>

<div class="container">
	<img class="image" src={image} alt={caption} />
	{#if caption}
		<div class="caption">{caption}</div>
	{/if}
</div>

<style lang="scss">
	img {
		width: 100%;
	}

	.container {
		margin: 1rem 0;
	}
</style>
