<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import PictureSources from '$lib/components/PictureSources.svelte'
	import { nameFromPath } from '$lib/js/utils.js'

	export let data

	let { slug, title, date, author, description, featured, caption } = data.frontmatter

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
		return [await import(`../../../../static/images/uploads/${name}.${ext}`), ext]
	}
</script>

<PageHead {title} {description} />

<div class="content">
	<section>
		<h1>{title}</h1>
		<p class="author">
			By {author} •
			{new Date(date).toLocaleString('en-us', options)}
		</p>
		<p><i>{description}</i></p>
		{#if featured}
			<div class="image-container">
				{#await getImage(featured) then [image, ext]}
					<picture class="pic">
						<PictureSources src={image} />
						<img
							class="image"
							src={image.img.src}
							type={`image/${ext}`}
							alt={caption ? caption : title}
						/>
					</picture>
				{/await}
				{#if caption}
					<div class="caption">{caption}</div>
				{/if}
			</div>
		{/if}
		<svelte:component this={data.component} />
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0 1.5rem;
	}

	h1 {
		text-align: left;
		max-width: 50rem;
		margin: 1rem auto;
		font-size: 2rem;
	}

	section {
		max-width: 50rem;
		margin: 3rem auto 4rem auto;
	}

	.author {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.image {
		width: 100%;
		border-radius: 1rem;
	}

	.image-container {
		margin: 1.5rem 0;
	}

	a {
		display: inline;
	}

	@media (max-width: 700px) {
		@include small-headings;

		.author {
			font-size: 1rem;
		}
	}
</style>
