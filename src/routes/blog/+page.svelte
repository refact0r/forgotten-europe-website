<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import BlogPreview from '$lib/components/BlogPreview.svelte'

	export let data
</script>

<PageHead
	title="Blog"
	description="Learn about what the Forgotten Europe Project is doing and how you can help."
/>

<div class="content">
	<h1>Blog</h1>

	<section>
		<div class="previews">
			{#each data.posts as post}
				<BlogPreview {post} />
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
		@include small-headings;
	}
</style>
