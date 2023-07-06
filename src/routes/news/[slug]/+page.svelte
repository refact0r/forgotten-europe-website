<script>
	import Caption from '$lib/components/Caption.svelte'
	import PageHead from '$lib/components/PageHead.svelte'
	import PictureSources from '$lib/components/PictureSources.svelte'
	import { nameFromPath } from '$lib/js/utils.js'

	export let data

	let { slug, title, date, description, featured, caption } = data.frontmatter

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

<div class="content">
	<section>
		<p class="date">{new Date(date).toLocaleString('en-us', options)}</p>
		<h1>{title}</h1>
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
		margin: 1rem auto;
		font-size: 2rem;
	}

	section {
		max-width: 50rem;
		margin: 3rem auto 4rem auto;
	}

	.date {
		font-size: 1.2rem;
	}

	.image {
		width: 100%;
		border-radius: 1rem;
	}

	.image-container {
		margin: 1.5rem 0;
	}
</style>
