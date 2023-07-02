<script>
	import PageHead from '$lib/components/PageHead.svelte'

	export let data

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	}
</script>

<PageHead title="Blog" description="Description" />

<div class="content">
	<h1>Blog</h1>

	<section>
		{#each data.posts as { slug, title, date, description, featured, caption }}
			<a class="clickable post" href={`blog/${slug}`}>
				<div class="left">
					<h2>{title}</h2>
					<p>{new Date(date).toLocaleString('en-us', options)}</p>
					<p>{description}</p>
				</div>
				{#if featured}
					<img class="thumbnail" src={featured} alt={title} />
				{/if}
			</a>
		{/each}
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0 1rem;
	}

	section {
		max-width: 65rem;
		margin: 0 auto;
	}

	.post {
		display: flex;
		gap: 0.5rem;
		margin: 1rem 0;
		padding: 1rem;
		height: 9rem;
		border-radius: 1rem;
		text-decoration: none;
		font-weight: normal;
	}

	.left {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0.3rem 0.5rem;
		max-height: 7rem;
		min-width: 0;
		width: 100%;
	}

	p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	h2,
	p {
		text-align: left;
		margin: 0;
	}

	.thumbnail {
		width: 100%;
		height: 100%;
		aspect-ratio: 1/1;
		object-fit: cover;
		border-radius: 1rem;
		max-width: 7rem;
		flex-shrink: 0;
	}
</style>
