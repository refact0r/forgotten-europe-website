<script>
	import '../app.scss'
	import '@fontsource/figtree/latin.css'
	import '@fontsource/figtree/latin-ext.css'
	import '/node_modules/flag-icons/css/flag-icons.min.css'

	import logo from '$lib/images/logo-2x-cropped.png?avif&w=1000'
	import logo_fallback from '$lib/images/logo-2x-cropped.png?webp&w=1000'

	import { page } from '$app/stores'
</script>

<header>
	<div class="links left">
		<a class="button inverted" class:active={$page.url.pathname === '/'} href="/"> Home </a>
		<a class="button inverted" class:active={$page.url.pathname === '/news'} href="/news">
			News
		</a>
		<a
			class="button inverted"
			class:active={$page.url.pathname === '/interviews'}
			href="/interviews"
		>
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
		<a
			class="button inverted"
			class:active={$page.url.pathname === '/curriculum'}
			href="/curriculum"
		>
			Curriculum
		</a>
		<a
			class="button inverted"
			class:active={$page.url.pathname === '/volunteer'}
			href="/volunteer"
		>
			Volunteer
		</a>
		<a class="button inverted" class:active={$page.url.pathname === '/about'} href="/about"
			>About</a
		>
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
		<a
			class="button icon inverted"
			aria-label="Instagram"
			href="https://www.instagram.com/forgotteneuropeproject/"
		>
			<i class="fa-brands fa-instagram" />
		</a>
		<a
			class="button icon inverted"
			aria-label="Youtube"
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
		gap: 2rem;
		padding: 0.5rem 0;
		background-color: var(--dark);
		top: 0;
		position: sticky;
		z-index: 1;

		a.button {
			font-size: 1.1rem;
			text-align: center;
			border-radius: $s;
			background-color: var(--dark);
			color: var(--light);

			&:hover {
				background-color: var(--mid-dark);
				color: var(--light);
			}

			&:active {
				background-color: var(--mid-dark);
				color: var(--light);
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
		gap: 1.5rem;

		&.left {
			justify-content: flex-end;
		}
		&.right {
			justify-content: flex-start;
		}
	}

	.logo {
		width: 4rem;
		height: 4rem;
	}

	.logo-link {
		border-radius: 50%;
		width: 4rem;
		height: 4rem;
	}

	main {
		background-color: var(--light);
		height: 100%;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	footer {
		text-align: center;
		padding: 1rem;
		background-color: var(--dark);
		color: var(--light);

		& a {
			color: var(--light);
		}
	}

	.description {
		font-size: 0.8rem;
	}

	.contact {
		margin: $s 0;
	}

	.buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
</style>
