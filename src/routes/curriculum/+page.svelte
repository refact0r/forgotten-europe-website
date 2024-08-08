<script>
	import PageHead from '$lib/components/PageHead.svelte'
</script>

<PageHead title="Curriculum" description="" />

<div class="content">
	<section>
		<h1>Curriculum</h1>
		<p>
			We use our student advocacy voices to promote education about Central-Eastern European
			history in education systems. Created entirely by students, guided by teachers, and
			approved by curriculum developers, our lesson plans encompass a diverse set of topics
			that each contain valuable lessons for students to learn from. Ranging from historical
			topics like the Bosnian genocide to the modern War in Ukraine, our work helps bring
			forgotten lessons from Central-Eastern European history to light in the world.
		</p>
	</section>

	<section>
		<div class="iframe-container">
			<iframe
				src="https://drive.google.com/file/d/1YnyWOojGZ4zETdlPS7p-XuAOisYLGKPR/preview"
				allow="autoplay"
				width="800px"
				height="1100px"
			></iframe>
		</div>
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

	.middle {
		@include flex-center;
		flex-direction: column;
		flex-grow: 1;
	}

	.iframe-container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: stretch;
		align-items: stretch;
	}

	iframe {
		flex-grow: 1;
	}
</style>
