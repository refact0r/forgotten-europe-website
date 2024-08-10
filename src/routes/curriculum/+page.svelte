<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import CurriculumPreview from '$lib/components/CurriculumPreview.svelte'

	export let data
</script>

<PageHead title="Curriculum" description="" />

<div class="content">
	<section>
		<h1>Curriculum</h1>
		<p>
			We use our student advocacy voices to promote education about Central-Eastern European
			history in education systems. Created entirely by students, guided by teachers, and
			approved by curriculum developers, the Forgotten Europe Project lesson plans encompass a
			diverse set of topics that each contain valuable lessons for students to learn from.
			Ranging from historical topics like the Bosnian genocide to the modern War in Ukraine,
			our work helps bring forgotten lessons from Central-Eastern European history to light in
			the world.
		</p>
	</section>

	<section class="grid">
		{#each data.posts as post}
			<CurriculumPreview {post} />
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
		grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
		gap: 1rem;
	}

	@media (max-width: 700px) {
		@include small-headings;
	}
</style>
