<script>
	import '../global.css'
	import { page } from '$app/stores'
</script>

<header>
	<a href="/"><h1>Nonprofit Website</h1></a>
</header>
<main>
	<slot />
</main>
<footer>
	<p>
		Copyright &#169; Someone, {new Date().getFullYear()}
	</p>
</footer>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: var(--color-bg);
	}
</style>
