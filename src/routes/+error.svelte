<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import { page } from '$app/stores'
</script>

<PageHead title={$page.error.message} description={$page.status + ' ' + $page.error.message} />

<div>
	<h1 class="errorCode">{$page.status}</h1>
	<h3 class="errorMessage">{$page.error.message}</h3>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
	}

	.errorCode {
		font-size: 5rem;
		line-height: normal;
		margin: 0;
	}

	.errorMessage {
		text-align: center;
		font-weight: normal;
		margin: 0;
	}
</style>
