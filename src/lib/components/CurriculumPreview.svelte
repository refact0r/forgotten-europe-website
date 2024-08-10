<script>
	import PictureSources from '$lib/components/PictureSources.svelte'
	import importImage from '$lib/js/images.js'

	export let post

	const { slug, title, author, description, thumbnail, tags } = post
</script>

<a class="curriculum clickable" href={`curriculum/${slug}`}>
	<div class="image-container">
		{#await importImage(thumbnail) then image}
			<picture>
				<PictureSources src={image} sizes="30vw" />
				<img class="image" src={image.img.src} width="352" height="198" alt={title} />
			</picture>
		{/await}
	</div>
	<h3>{title}</h3>
	<p class="description">{description}</p>
	<div class="tags">
		{#each tags as tag}
			<span class="tag">{tag.tag}</span>
		{/each}
	</div>
</a>

<style lang="scss">
	.curriculum {
		padding: 1rem;
		text-decoration: none;
		font-weight: 400;
		display: flex;
		flex-direction: column;

		* {
			margin: 0;
		}
		&:hover .tag {
			background-color: var(--shade-60);
		}
	}

	.image-container {
		position: relative;
		margin-bottom: 1rem;
	}

	.image {
		width: 100%;
		height: auto;
		border-radius: 0.25rem;
		display: block;
		object-fit: cover;
		aspect-ratio: 16 / 9;
	}

	.author {
		font-size: 0.95rem;
	}

	.description {
		margin: 0.5rem 0 1rem 0;
	}

	.tags {
		margin-top: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		background-color: var(--shade-70);
		border-radius: 0.25rem;
		margin-right: 0.5rem;
		font-weight: 600;
	}
</style>
