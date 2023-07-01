<script>
	export let data

	let { slug, title, featured, description, date } = data.frontmatter

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	}
</script>

<div class="content">
	<section>
		<p class="date">{new Date(date).toLocaleString('en-us', options)}</p>
		<h1>{title}</h1>
		{#if featured}
			<img class="featured" src={featured} alt={title} />
		{/if}

		<svelte:component this={data.component} />
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0 1rem;
	}

	h1 {
		text-align: left;
		max-width: 50rem;
		margin: 1rem auto 1rem auto;
		font-size: 2rem;
	}

	section {
		max-width: 50rem;
		margin: 4rem auto;
	}

	.date {
		font-size: 1.2rem;
	}

	.featured {
		display: block;
		width: auto;
		max-height: 20rem;
		margin: 2rem 0;
	}
</style>
