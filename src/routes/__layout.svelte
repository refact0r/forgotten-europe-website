<script>
	import '../global.css'
	import { page } from '$app/stores'
</script>

<header>
	<a href="/"><h1 class:small={$page.url.pathname !== '/'}>Nonprofit Website</h1></a>
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
	.small {
		font-size: 1.6rem;
	}

	footer {
		margin-top: calc(var(--spacing) * 8);
	}
</style>
