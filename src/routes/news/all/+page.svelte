<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import NewsPreview from '$lib/components/NewsPreview.svelte'

	export let data
</script>

<PageHead title="News" description="Description" />

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
		padding: 0 1rem;
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
</style>
