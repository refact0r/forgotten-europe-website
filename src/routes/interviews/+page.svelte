<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import InterviewPreview from '$lib/components/InterviewPreview.svelte'

	export let data
</script>

<PageHead
	title="Interviews"
	description="The Forgotten Europe Project interviews survivors of the many historical tragedies that Central-Eastern Europe has endured to preserve their stories."
/>

<div class="content">
	<section>
		<h1>Interviews</h1>
		<p>
			Year-round, we interview those who experienced the 20th century in
			Central-Eastern Europe. Through personal accounts, these interviews
			preserve the stories and messages of tragedy survivors which would otherwise be forgotten.
			Interviews can be virtual or in-person.
		</p>
		<a class="button" href="https://forms.gle/nePPj6bpz8ZNimKq8">
			Sign Up for an Interview &nbsp;<i class="fa-solid fa-arrow-up-right-from-square" />
		</a>
	</section>

	<section class="grid">
		{#each data.posts as post}
			<InterviewPreview {post} />
		{/each}
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0rem 1.5rem 3rem 1.5rem;
	}

	section {
		max-width: 75rem;
		margin: 2rem auto 3rem auto;
	}

	.grid {
		max-width: 75rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 1rem;
	}

	.button {
		padding: 0.8rem 1.1rem;
	}

	h1 {
	}

	p {
		margin: 1.5rem 0;
	}

	@media (max-width: 700px) {
		@include small-headings;
	}
</style>
