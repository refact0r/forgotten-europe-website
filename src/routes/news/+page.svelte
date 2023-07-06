<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import NewsPreview from '$lib/components/NewsPreview.svelte'

	export let data
</script>

<PageHead title="News" description="Description" />

<div class="content">
	<h1>News</h1>

	<section>
		{#each data.posts as post}
			<NewsPreview {post} />
		{/each}
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0 1rem;
	}

	section {
		max-width: 65rem;
		margin: 0 auto;
	}
</style>
