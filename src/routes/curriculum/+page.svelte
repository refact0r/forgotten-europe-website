<script>
	import PageHead from '$lib/components/PageHead.svelte'
</script>

<PageHead title="Curriculum" description="" />

<div class="content">
	<h1>Curriculum</h1>

	<section>
		<p>
			We use our student advocacy voices to promote education about Central-Eastern European
			history in education systems. Created entirely by students, guided by teachers, and
			approved by curriculum developers, our lesson plans encompass a diverse set of topics
			that each contain valuable lessons for students to learn from. Ranging from historical
			topics like the Bosnian genocide to the modern War in Ukraine, our work helps bring
			forgotten lessons from Central-Eastern European history to light in the world.
		</p>
	</section>

	<div class="middle">
		<h2>UNDER DEVELOPMENT</h2>

		<p>
			Please email us at <a href="mailto:forgotteneuropeproject@gmail.com">
				forgotteneuropeproject@gmail.com
			</a> for any questions.
		</p>
	</div>
</div>

<style lang="scss">
	.content {
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	section {
		max-width: 50rem;
		margin: auto;
	}

	.middle {
		@include flex-center;
		flex-direction: column;
		flex-grow: 1;
	}

	p {
		text-align: center;
	}

	h1 {
		text-align: center;
	}
</style>
