<script>
	export let src
</script>

{#each Object.entries(src.sources) as [format, images]}
	<source srcset={images} type={'image/' + format} />
{/each}
