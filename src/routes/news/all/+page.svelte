<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import NewsPreview from '$lib/components/NewsPreview.svelte'

	export let data
</script>

<PageHead
	title="All News"
	description="A list of all past news articles written by the Forgotten Europe Project about Central-Eastern Europe."
/>

<div class="content">
	<h1>All News</h1>

	<section>
		<div class="previews">
			{#each data.posts as post}
				<NewsPreview {post} />
			{/each}
		</div>
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0rem 1.5rem 2rem 1.5rem;
	}

	section {
		max-width: 56rem;
		margin: 0 auto 3rem auto;
	}

	.previews {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	h1 {
		text-align: center;
	}

	@media (max-width: 700px) {
		h1 {
			font-size: 1.6rem;
		}
		h2 {
			font-size: 1.3rem;
		}
	}
</style>
