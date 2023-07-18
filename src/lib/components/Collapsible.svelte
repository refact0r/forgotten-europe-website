<script>
	import { onMount } from 'svelte'

	export let open

	let details

	function toggle() {
		if (!open) {
			details.style.height = details.scrollHeight + 1 + 'px'
		} else {
			details.style.height = '0px'
		}
		open = !open
	}

	onMount(async () => {
		open = !open
		toggle()
	})
</script>

<div class="collapsible">
	<div class="header" on:click={toggle}>
		<h3><slot name="header" /></h3>
		<i class={'fa-solid fa-angle-down' + (open ? ' open' : '')} />
	</div>

	<div class="details" style={'height: 0;'} bind:this={details}>
		<slot name="details" />
	</div>
</div>

<style lang="scss">
	.collapsible {
		margin: auto;
		margin-bottom: 1rem;
		width: 100%;
	}

	.header {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}
	.header:hover {
		cursor: pointer;
	}

	h3 {
		margin: 0 auto 0 0;
	}

	i {
		font-size: 1.5rem;
		transition: transform ease-in-out 0.3s;
	}

	i.open {
		transform: rotate(180deg);
	}

	.details {
		overflow: hidden;
		transition: height ease-in-out 0.3s;
	}
</style>
