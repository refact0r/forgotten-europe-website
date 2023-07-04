<script>
	export let src
</script>

{#each Object.entries(src.sources) as [format, images]}
	<source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
{/each}
