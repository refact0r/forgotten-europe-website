<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import InterviewPreview from '$lib/components/InterviewPreview.svelte'
	import { nameFromPath } from '$lib/js/utils.js'

	export let data
</script>

<PageHead title="Interviews" description="Information about interviews." />

<div class="content">
	<h1>Interviews</h1>

	<section>
		<p>
			Year round, founder Liam Krol locates and interviews those who survived Central-Eastern
			Europe's past tragedies. Interviews effectively preserve individual stories and
			establish knowledge for posterity. They may be audio recorded, camera recorded, or both
			in accordance with interviewee preference.
		</p>
		<a class="button" href="https://forms.gle/nePPj6bpz8ZNimKq8">
			Sign Up for an Interview &nbsp;<i class="fa-solid fa-arrow-right" />
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
		padding: 0 1rem 4rem 1rem;
	}

	section {
		max-width: 74rem;
		margin: 2rem auto;
		text-align: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
		gap: 1rem;
	}
</style>
