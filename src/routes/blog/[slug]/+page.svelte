<script>
	import Caption from '$lib/components/Caption.svelte'

	export let data

	let { slug, title, date, description, featured, caption } = data.frontmatter

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
			<div class="img-container">
				<img class="featured" src={featured} alt={title} />
				{#if caption}
					<Caption {caption} />
				{/if}
			</div>
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
		margin: 3rem auto 4rem auto;
	}

	.date {
		font-size: 1.2rem;
	}

	.featured {
		display: block;
		width: 100%;
	}

	.img-container {
		margin: 2rem 0;
		width: fit-content;
	}
</style>
