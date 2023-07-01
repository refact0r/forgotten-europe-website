<script>
	import PageHead from '$lib/components/PageHead.svelte'

	export let data

	console.log(data)

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
		{#each data.posts as { slug, title, thumbnail, description, date }}
			<a class="clickable post" href={`blog/${slug}`}>
				<div class="left">
					<h2>{title}</h2>
					<p>{new Date(date).toLocaleString('en-us', options)}</p>
					<p>{description}</p>
				</div>
				{#if thumbnail}
					<img class="thumbnail" src={thumbnail} alt={title} />
				{/if}
			</a>
		{/each}
	</section>
</div>

<style>
	.content {
		padding: 0 1rem;
	}

	section {
		max-width: 65rem;
		margin: 0 auto;
	}

	.post {
		display: flex;
		margin: 1rem 0;
		padding: 1rem;
		border-radius: 1rem;
		text-decoration: none;
		font-weight: normal;
	}

	.left {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0.3rem 0.5rem;
		max-height: 7rem;
		height: 7rem;
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
	}
</style>
