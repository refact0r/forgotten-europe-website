<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import Collapsible from '$lib/components/Collapsible.svelte'
	import hussars from '$lib/images/hussars.jpg?format=avif&quality=75'
	import hussars_fallback from '$lib/images/hussars.jpg'
</script>

<PageHead title="Interviews" description="Information about interviews." />

<div class="content">
	<h1>Interviews</h1>

	<section class="grid">
		<!-- <div>
			Year round, founder Liam Krol locates and interviews those who survived Central-Eastern
			Europe's past tragedies.
			<a class="button" href="https://forms.gle/nePPj6bpz8ZNimKq8">
				Sign Up for an Interview &nbsp;<i class="fa-solid fa-arrow-right" />
			</a>
		</div> -->
		<a class="interview button" href="/interviews">
			<div class="label">
				"Interesting quote here interesting quote here interesting quote here"
			</div>
			<div class="image-container">
				<span class="fi fi-pl" />
				<picture>
					<source srcset={hussars} type="image/avif" />
					<img class="image" src={hussars_fallback} type="image/jpeg" />
				</picture>
			</div>
		</a>
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0 1rem;
	}

	.grid {
	}

	.interview {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background-color: var(--mid-light);
		padding: 1rem;
		border-radius: 1rem;
		text-decoration: none;
		font-weight: 400;
		font-size: 1.2rem;
		max-width: 25rem;
	}

	.image-container {
		position: relative;
	}

	span {
		font-size: 2rem;
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}

	.image {
		width: 100%;
		height: 100%;
		border-radius: 1rem;
	}
</style>
