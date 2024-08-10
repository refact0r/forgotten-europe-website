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

	<!-- <section>
		<div class="iframe-container">
			<iframe
				src="https://drive.google.com/file/d/1YnyWOojGZ4zETdlPS7p-XuAOisYLGKPR/preview"
				allow="autoplay"
			></iframe>
		</div>
	</section> -->

	<section class="grid">
		<h2>The Post-Cold War in Central-Eastern Europe</h2>
		<p>
			Grades 9-12 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 2-3 days
			&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; National Identity and Globalization
		</p>
		<p>
			At the end of the Cold War in 1991, various nations in Central and Eastern Europe were
			liberated from Soviet hegemony. In the tumultuous years afterwards, some realigned
			geopolitically with the West, while others fell under the rising hegemony of the Russian
			Federation.
		</p>
		<a class="button" href="/">View Lesson Plan -></a>
	</section>
	<section class="grid">
		<h2>The Post-Cold War in Central-Eastern Europe</h2>
		<p>
			Grades 9-12 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 2-3 days
			&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; National Identity and Globalization
		</p>
		<p>
			At the end of the Cold War in 1991, various nations in Central and Eastern Europe were
			liberated from Soviet hegemony. In the tumultuous years afterwards, some realigned
			geopolitically with the West, while others fell under the rising hegemony of the Russian
			Federation.
		</p>
		<a class="button" href="/">View Lesson Plan -></a>
	</section>
	<section class="grid">
		<h2>The Post-Cold War in Central-Eastern Europe</h2>
		<p>
			Grades 9-12 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 2-3 days
			&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; National Identity and Globalization
		</p>
		<p>
			At the end of the Cold War in 1991, various nations in Central and Eastern Europe were
			liberated from Soviet hegemony. In the tumultuous years afterwards, some realigned
			geopolitically with the West, while others fell under the rising hegemony of the Russian
			Federation.
		</p>
		<a class="button" href="/">View Lesson Plan -></a>
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0rem 1.5rem 3rem 1.5rem;
	}

	section {
		max-width: 50rem;
		margin: 2rem auto 3rem auto;
	}

	.iframe-container {
		display: flex;
	}

	iframe {
		flex-grow: 1;
		aspect-ratio: 8.5 / 11;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 700px) {
		@include small-headings;
	}
</style>
