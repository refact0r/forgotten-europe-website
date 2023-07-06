<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import BlogPreview from '$lib/components/BlogPreview.svelte'

	export let data
</script>

<PageHead title="Blog" description="Description" />

<div class="content">
	<h1>Blog</h1>

	<section>
		{#each data.posts as post}
			<BlogPreview {post} />
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

	h1 {
		text-align: center;
	}
</style>
