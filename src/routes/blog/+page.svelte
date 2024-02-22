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
	<p>Learn about Central-Eastern European current events, history, and culture.</p>
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
		padding: 0rem 1.5rem 1rem 1.5rem;
	}

	section {
		max-width: 50rem;
		margin: 3rem auto 4rem auto;
	}

	.previews {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	h1 {
		text-align: center;
	}

	p {
		text-align: center;
	}

	@media (max-width: 700px) {
		@include small-headings;
	}
</style>
