<script>
	export let src,
		sizes = '50vw'
</script>

{#each Object.entries(src.sources) as [format, images]}
	<source srcset={images} type={'image/' + format} {sizes} />
{/each}
