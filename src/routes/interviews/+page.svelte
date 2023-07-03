<script>
	import PageHead from '$lib/components/PageHead.svelte'
	// import Collapsible from '$lib/components/Collapsible.svelte'
	// import interview1 from '$lib/images/life-under-communism.png?format=avif&quality=75'
	// import interview1_fallback from '$lib/images/life-under-communism.png?quality=75'
	// import interview2 from '$lib/images/stories-from-ww2.png?format=avif&quality=75'
	// import interview2_fallback from '$lib/images/stories-from-ww2.png?quality=75'
	// import interview3 from '$lib/images/surviving-volhynian-massacre.png?format=avif&quality=75'
	// import interview3_fallback from '$lib/images/surviving-volhynian-massacre.png?quality=75'
	// import interview4 from '$lib/images/surviving-gulag-deportation.png?format=avif&quality=75'
	// import interview4_fallback from '$lib/images/surviving-gulag-deportation.png?quality=75'
	// import interview5 from '$lib/images/surviving-german-occupation.png?format=avif&quality=75'
	// import interview5_fallback from '$lib/images/surviving-german-occupation.png?quality=75'

	export let data
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
					<img class="image" src={thumbnail} type="image/png" alt={quote} />
				</div>
			</a>
		{/each}
		<!-- <a class="interview clickable" href="/interviews">
			<div class="label">Surviving communism</div>
			<div class="image-container">
				<span class="fi fi-pl" />
				<picture>
					<source srcset={interview1} type="image/avif" />
					<img
						class="image"
						src={interview1_fallback}
						type="image/png"
						alt="Surviving communism"
					/>
				</picture>
			</div>
		</a>
		<a class="interview clickable" href="/interviews">
			<div class="label">"Somehow everybody lived"</div>
			<div class="image-container">
				<span class="fi fi-pl" />
				<picture>
					<source srcset={interview2} type="image/avif" />
					<img
						class="image"
						src={interview2_fallback}
						type="image/png"
						alt="Somehow everybody lived"
					/>
				</picture>
			</div>
		</a>
		<a class="interview clickable" href="/interviews">
			<div class="label">Surviving the Volhynian massacre</div>
			<div class="image-container">
				<span class="fi fi-pl" />
				<picture>
					<source srcset={interview3} type="image/avif" />
					<img
						class="image"
						src={interview3_fallback}
						type="image/png"
						alt="Surviving the Volhynian massacre"
					/>
				</picture>
			</div>
		</a>
		<a class="interview clickable" href="/interviews">
			<div class="label">"We were deported to Siberia"</div>
			<div class="image-container">
				<span class="fi fi-pl" />
				<picture>
					<source srcset={interview4} type="image/avif" />
					<img
						class="image"
						src={interview4_fallback}
						type="image/png"
						alt="We were deported to Siberia"
					/>
				</picture>
			</div>
		</a>
		<a class="interview clickable" href="/interviews">
			<div class="label">"We were hiding by the river"</div>
			<div class="image-container">
				<span class="fi fi-pl" />
				<picture>
					<source srcset={interview5} type="image/avif" />
					<img
						class="image"
						src={interview5_fallback}
						type="image/png"
						alt="We were hiding by the river"
					/>
				</picture>
			</div>
		</a> -->
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0 1rem 4rem 1rem;
	}

	section {
		max-width: 77rem;
		margin: 2rem auto;
		text-align: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
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
	}
</style>
