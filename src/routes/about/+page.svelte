<script>
	import PageHead from '$lib/components/PageHead.svelte'
</script>

<PageHead title="About" description="Description" />

<div class="content">
	<h1>About</h1>

	<div class="middle">
		<h2>UNDER DEVELOPMENT</h2>

		<p>
			Please email us at <a href="mailto:forgotteneuropeproject@gmail.com">
				forgotteneuropeproject@gmail.com
			</a> for any questions.
		</p>
	</div>
</div>

<style>
	.content {
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
	.middle {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
	}
</style>
