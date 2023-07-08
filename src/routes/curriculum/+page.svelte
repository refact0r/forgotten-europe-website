<script>
	import PageHead from '$lib/components/PageHead.svelte'
</script>

<PageHead title="Curriculum" description="" />

<div class="content">
	<h1>Curriculum</h1>

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
	.middle {
		@include flex-center;
		flex-direction: column;
		flex-grow: 1;
	}

	h1 {
		text-align: center;
	}
</style>
