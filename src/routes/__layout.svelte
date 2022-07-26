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
		<a href="/curriculum">Curriculum</a>
	</h4>
	<h4>
		<a href="/volunteer">Volunteer</a>
	</h4>
	<h4>
		<a href="/about">About</a>
	</h4>
</header>
<main>
	<slot />
</main>
<footer>
	<div>
		Contact us
		<br />
		<a href="mailto:forgotteneuropeproject@gmail.com"> forgotteneuropeproject@gmail.com </a>
	</div>
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

	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 40px 40px;
		margin-top: 100px;
	}
</style>
