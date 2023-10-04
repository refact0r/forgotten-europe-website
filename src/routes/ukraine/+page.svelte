<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import BlogPreview from '$lib/components/BlogPreview.svelte'

	export let data
</script>

<PageHead title="The War in Ukraine" description="Blog posts about the War in Ukraine." />

<svelte:head>
	<script defer src="/js/minusrus.js"></script>
</svelte:head>

<div class="content">
	<h1>The War in Ukraine</h1>

	<section>
		<!-- <h2>War Stats</h2> -->
		<ins data-wrapper="minusrus-widget" data-width="1008" data-lang="en" />
		<div class="caption">Estimates from Ukraine's Ministry of Defense. May be inaccurate.</div>
	</section>

	<section>
		<h2>Related Blog Posts</h2>
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
		max-width: 56rem;
		margin: 0 auto 4rem auto;
	}

	.previews {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	h1,
	h2 {
		text-align: center;
	}

	@media (max-width: 700px) {
		@include small-headings;
	}
</style>
