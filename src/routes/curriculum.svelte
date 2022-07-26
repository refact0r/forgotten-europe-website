<script>
	import PageHead from '$lib/components/PageHead.svelte'
</script>

<PageHead title="Curriculum" description="Description" />

<div class="content">
	<h1>Curriculum</h1>

	<div class="section">
		<div class="column">
			<h2>For Teachers</h2>
		</div>

		<div class="column">
			<h2>For Students</h2>
		</div>
	</div>
</div>

<style>
	.content {
	}
	h1,
	h2 {
		text-align: center;
	}
	.section {
		display: flex;
		gap: 100px;
		padding: 40px 100px;
		width: 100%;
	}
	.column {
		width: 100%;
	}
</style>
