<script>
	import '../global.css'
	import { page } from '$app/stores'
</script>

<header>
	<h3>
		<a href="/">The Forgotten Europe Project</a>
	</h3>
	<h4>
		<a href="/interviews">Interviews</a>
	</h4>
	<h4>
		<a href="/about">About</a>
	</h4>
</header>
<main>
	<slot />
</main>
<footer>
	<!-- <p>
		Copyright &#169; Someone, {new Date().getFullYear()}
	</p> -->
</footer>

<style>
	header {
		position: sticky;
		z-index: 100;
		top: 0;
		left: 0;
		background: var(--color-bg);
		padding: 20px 40px;
		display: flex;
		align-items: center;
	}

	h3,
	h4 {
		margin: 0;
	}

	h3 {
		margin-right: auto;
	}

	h4 {
		margin-left: 40px;
	}

	img {
		width: 100px;
	}
</style>
