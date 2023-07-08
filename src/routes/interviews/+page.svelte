<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import InterviewPreview from '$lib/components/InterviewPreview.svelte'
	import { nameFromPath } from '$lib/js/utils.js'

	export let data
</script>

<PageHead
	title="Interviews"
	description="The Forgotten Europe Project interviews survivors of the many historical tragedies that Central-Eastern Europe has endured to preserve their stories."
/>

<div class="content">
	<h1>Interviews</h1>

	<section>
		<p>
			Year-round, founder Liam Krol locates and interviews those who experienced
			Central-Eastern Europe's past tragedies. Through personal accounts, these interviews
			preserve the stories and messages of survivors which would otherwise be forgotten.
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
		padding: 0rem 1.5rem 2rem 1.5rem;
	}

	section {
		max-width: 74rem;
		margin: 2rem auto;
		text-align: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 1rem;
	}

	h1 {
		text-align: center;
	}

	@media (max-width: 700px) {
		@include small-headings;
	}
</style>
