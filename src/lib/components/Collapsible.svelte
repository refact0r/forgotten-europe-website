<script>
	import { slide } from 'svelte/transition'
	export let title
	export let open

	let details

	function toggle() {
		if (!details.style.height || details.style.height == '0px') {
			details.style.height = details.scrollHeight + 'px'
		} else {
			details.style.height = '0px'
		}
	}
</script>

<div class="collapsible">
	<div class="header">
		<button on:click={toggle}>
			<i class={'fa-solid fa-angle-down' + (open ? ' open' : '')} />
		</button>

		<h2>{title}</h2>
	</div>

	<div class="details" style={open ? 'height: auto;' : 'height: 0;'} bind:this={details}>
		<slot />
	</div>
</div>

<style>
	.collapsible {
		margin-bottom: 20px;
	}

	.header {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	h2 {
		margin: 0 0 0 20px;
	}

	i {
		font-size: 1.5rem;
	}

	button {
		background: none;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 5px;
	}

	.details {
		overflow: hidden;
		transition: height ease-in-out 0.6s;
	}
</style>
