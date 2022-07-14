<script>
	let count = 0
</script>

<div class="counter">
	<p class="count">{count}</p>
	<button on:click={() => (count += 1)}>Increment</button>
</div>

<style>
	.counter {
		text-align: center;
	}

	.count {
		font-size: 2rem;
		margin-bottom: calc(var(--spacing) * 2);
	}

	.counter {
		margin-top: calc(var(--spacing) * 4);
		margin-bottom: calc(var(--spacing) * 4);
	}
</style>
