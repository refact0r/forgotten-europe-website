<script>
	import '../app.scss'
	import '@fontsource/figtree/latin.css'
	import '@fontsource/figtree/latin-ext.css'
	import '/node_modules/flag-icons/css/flag-icons.min.css'

	import logo from '$lib/images/logo-2x-cropped.png?avif&w=1000'
	import logo_fallback from '$lib/images/logo-2x-cropped.png?webp&w=1000'

	import { page } from '$app/stores'

	$: title =
		$page.url.pathname === '/'
			? 'The Forgotten <span class="nowrap">Europe Project</span>'
			: $page.url.pathname.charAt(1).toUpperCase() + $page.url.pathname.slice(2)

	let menuOpen = false

	$: $page.url && (menuOpen = false)

	function toggleMenu() {
		menuOpen = !menuOpen
	}
</script>

<header>
	<div class="header-inner">
		<a class="logo-link" href="/">
			<picture>
				<source srcset={logo} type="image/avif" />
				<img class="logo" src={logo_fallback} type="image/png" alt="Logo" />
			</picture>
			<h1>The Forgotten Europe Project</h1>
		</a>
		<div class="links">
			<a class="button inverted" class:active={$page.url.pathname === '/'} href="/"> Home </a>
			<a class="button inverted" class:active={$page.url.pathname === '/news'} href="/news">
				News
			</a>
			<a class="button inverted" class:active={$page.url.pathname === '/blog'} href="/blog">
				Blog
			</a>
			<a
				class="button inverted"
				class:active={$page.url.pathname === '/interviews'}
				href="/interviews"
			>
				Interviews
			</a>
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
			<a class="button inverted" class:active={$page.url.pathname === '/about'} href="/about">
				About
			</a>
		</div>
		<button class="hamburger" on:click={toggleMenu}>
			{#if menuOpen}
				<i class="fas fa-times" />
			{:else}
				<i class="fas fa-bars" />
			{/if}
		</button>
	</div>

	<div class="menu" class:open={menuOpen}>
		<a class="button inverted" class:active={$page.url.pathname === '/'} href="/"> Home </a>
		<a class="button inverted" class:active={$page.url.pathname === '/news'} href="/news">
			News
		</a>
		<a class="button inverted" class:active={$page.url.pathname === '/blog'} href="/blog">
			Blog
		</a>
		<a
			class="button inverted"
			class:active={$page.url.pathname === '/interviews'}
			href="/interviews"
		>
			Interviews
		</a>
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
		<a class="button inverted" class:active={$page.url.pathname === '/about'} href="/about">
			About
		</a>
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
		flex-direction: column;
		top: 0;
		position: sticky;
		z-index: 1;
		color: var(--light);
		background-color: var(--dark);

		a.button {
			background-color: var(--dark);

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

	.header-inner {
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
		z-index: 2;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-left: auto;
		font-size: 1.2rem;
	}

	.logo {
		width: 3rem;
		height: 3rem;
	}

	.logo-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		color: inherit;
		text-decoration: none;

		&:hover h1 {
			color: var(--mid-light);
		}
	}

	h1 {
		font-size: 1.4rem;
		margin: 0;
	}

	.hamburger {
		display: none;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		color: var(--light);
		margin-left: auto;

		i {
			font-size: 1.2rem;
		}
		&:hover {
			color: var(--mid-light);
		}
		&:active {
			color: var(--mid-dark);
		}
	}

	.menu {
		display: flex;
		flex-direction: column;
		transform: translateX(100%);
		transition: transform 0.2s ease-in-out;
		background-color: var(--dark);
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		z-index: 1;
		padding: 3.5rem 1rem 1rem 1rem;
		gap: 1rem;

		&.open {
			transform: translateX(0);
		}
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

	@media (max-width: 1250px) {
		.logo {
			width: 2.5rem;
			height: 2.5rem;
		}

		h1 {
			font-size: 1.2rem;
		}
		.links {
			gap: 0.5rem;
			font-size: 1rem;
		}
	}

	@media (max-width: 1000px) {
		h1 {
			display: none;
		}
	}

	@media (max-width: 750px) {
		.header-inner {
			padding: 0;
		}

		.logo {
			width: 2rem;
			height: 2rem;
		}

		.logo-link {
			padding: 0.5rem;
		}

		h1 {
			display: block;
			font-size: 1rem;
		}

		.links {
			display: none;
		}

		.hamburger {
			display: flex;
		}
	}
</style>
