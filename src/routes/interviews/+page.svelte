<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import PictureSources from '$lib/components/PictureSources.svelte'
	import { nameFromPath } from '$lib/js/utils.js'

	export let data

	async function getImage(path) {
		const name = nameFromPath(path)
		const ext = path.split('.').pop()
		return [await import(`../../lib/images/uploads/${name}.${ext}`), ext]
	}
</script>

<PageHead title="Interviews" description="Information about interviews." />

<div class="content">
	<h1>Interviews</h1>

	<section>
		<p>
			Year round, founder Liam Krol locates and interviews those who survived Central-Eastern
			Europe's past tragedies.
		</p>
		<a class="button" href="https://forms.gle/nePPj6bpz8ZNimKq8">
			Sign Up for an Interview &nbsp;<i class="fa-solid fa-arrow-right" />
		</a>
	</section>

	<section class="grid">
		{#each data.posts as { slug, quote, thumbnail }}
			<a class="interview clickable" href={`interviews/${slug}`}>
				<div class="label">{quote}</div>
				<div class="image-container">
					<span class="fi fi-pl" />
					{#await getImage(thumbnail) then [image, ext]}
						<picture>
							<PictureSources src={image} />
							<img
								class="image"
								src={image.img.src}
								width="352"
								height="198"
								type={`image/${ext}`}
								alt={quote}
							/>
						</picture>
					{/await}
				</div>
			</a>
		{/each}
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0 1rem 4rem 1rem;
	}

	section {
		max-width: 74rem;
		margin: 2rem auto;
		text-align: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
		gap: 1rem;
	}

	.interview {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		border-radius: 1rem;
		text-decoration: none;
		font-weight: 400;
		font-size: 1.1rem;
		text-align: center;
	}

	.image-container {
		position: relative;
	}

	span {
		font-size: 1.5rem;
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}

	.image {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
		display: block;
		object-fit: cover;
		aspect-ratio: 16/9;
	}
</style>
