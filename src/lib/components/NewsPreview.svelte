<script>
	import PictureSources from '$lib/components/PictureSources.svelte'
	import { nameFromPath } from '$lib/js/utils.js'

	export let post

	const { slug, title, date, author, description, featured, caption } = post

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	}

	async function getImage(path) {
		const name = nameFromPath(path)
		const ext = path.split('.').pop()
		return [await import(`../../../static/images/uploads/${name}.${ext}`), ext]
	}
</script>

<a class="clickable post" href={`/news/${slug}`}>
	<div class="left">
		<h2>{title}</h2>
		<p>{author} • {new Date(date).toLocaleString('en-us', options)}</p>
		<p>{description}</p>
	</div>
	{#if featured}
		{#await getImage(featured) then [image, ext]}
			<picture class="pic">
				<PictureSources src={image} />
				<img
					class="image"
					src={image.img.src}
					width="104"
					height="104"
					type={`image/${ext}`}
					alt={caption ? caption : title}
				/>
			</picture>
		{/await}
	{/if}
</a>

<style lang="scss">
	.post {
		display: flex;
		gap: 1rem;
		padding: 1rem 1rem 1rem 1.5rem;
		border-radius: 1rem;
		text-decoration: none;
		font-weight: normal;
	}

	.left {
		flex: 1;
	}

	.image {
		width: 6.5rem;
		height: 6.5rem;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	h2 {
		margin: 0;
		text-align: left;
	}

	p {
		margin: 0.5rem 0 0 0;
		text-align: left;
	}

	@media (max-width: 850px) {
		h2 {
			font-size: 1.3rem;
		}

		p {
			line-height: 150%;
		}

		.image {
			width: 6rem;
			height: 6rem;
		}
	}

	@media (max-width: 500px) {
		.post {
			padding: 1rem;
			flex-direction: column;
		}

		.image {
			width: 100%;
			height: auto;
			max-height: 10rem;
			object-fit: cover;
		}
	}
</style>
