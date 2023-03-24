<script>
	import '../app.scss'
	import '@fontsource/figtree/latin.css'
	import '@fontsource/figtree/latin-ext.css'
	import '/node_modules/flag-icons/css/flag-icons.min.css'

	import logo from '$lib/images/logo-2x-cropped.png?avif&w=1000'
	import logo_fallback from '$lib/images/logo-2x-cropped.png?webp&w=1000'

	import { page } from '$app/stores'

	let menuOpen = false
</script>

<header class:open={menuOpen}>
	<div class="links left">
		<a class="button" class:active={$page.url.pathname === '/'} href="/">Home</a>
		<a class="button" class:active={$page.url.pathname === '/news'} href="/news">News</a>
		<a class="button" class:active={$page.url.pathname === '/interviews'} href="/interviews">
			Interviews
		</a>
	</div>
	<a class="logo-link" href="/">
		<picture>
			<source srcset={logo} type="image/avif" />
			<img class="logo" src={logo_fallback} type="image/png" alt="Logo" />
		</picture>
	</a>
	<div class="links right">
		<a class="button" class:active={$page.url.pathname === '/curriculum'} href="/curriculum">
			Curriculum
		</a>
		<a class="button" class:active={$page.url.pathname === '/volunteer'} href="/volunteer">
			Volunteer
		</a>
		<a class="button" class:active={$page.url.pathname === '/about'} href="/about">About</a>
	</div>
</header>

<main>
	<slot />
</main>

<footer>
	<p class="description">
		<i>
			The Forgotten Europe Project is in no way affiliated based on race, ethnicity, religion,
			gender identity, or sexual orientation. We welcome all individuals to share an interest
			in Central-Eastern European culture and history.
			<br />
			The Forgotten Europe Project stands in full solidarity with the people of Ukraine.
		</i>
	</p>
	<p class="contact">
		Contact us<br />
		<a href="mailto:forgotteneuropeproject@gmail.com"> forgotteneuropeproject@gmail.com </a>
	</p>
	<div class="buttons">
		<a class="button icon inverted" href="https://www.instagram.com/forgotteneuropeproject/">
			<i class="fa-brands fa-instagram" />
		</a>
		<a
			class="button icon inverted"
			href="https://www.youtube.com/@theforgotteneuropeproject5348"
		>
			<i class="fa-brands fa-youtube" />
		</a>
	</div>
</footer>

<style lang="scss">
	:global(body) {
		font-family: 'Figtree', sans-serif;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: $l;
		padding: $s $l $s $l;
		background-color: var(--dark);

		a.button {
			font-size: 1.1em;
			text-align: center;
			color: var(--light);
			border-color: transparent;
			border-radius: $s;

			&:hover {
				border-color: var(--light);
				background-color: transparent;
			}

			&.active {
				background-color: var(--light);
				color: var(--dark);
			}
		}
	}

	.links {
		display: flex;
		align-items: center;
		width: 100%;

		&.left {
			justify-content: flex-end;
		}
		&.right {
			justify-content: flex-start;
		}
	}

	.logo {
		width: $h + $m;
		height: $h + $m;
	}

	.logo-link {
		border-radius: 50%;
	}

	.links {
		display: flex;
		gap: $l;
		align-items: center;
	}

	main {
		background-color: var(--light);
		height: 100%;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		padding-bottom: 40px;
	}

	footer {
		text-align: center;
		padding: $m $m $l $m;
		background-color: var(--dark);
		color: var(--light);

		& a {
			color: var(--light);
		}
	}

	.description {
		font-size: 0.8em;
	}

	.contact {
		margin: $s 0;
	}

	.buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
	}
</style>
