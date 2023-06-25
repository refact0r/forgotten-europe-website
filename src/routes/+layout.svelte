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
			<a class="button inverted" class:active={$page.url.pathname === '/about'} href="/about">
				About
			</a>
		</div>
		<h3>The Forgotten <span class="nowrap">Europe Project</span></h3>
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
		background-color: var(--dark);

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

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		padding: 0.5rem 0;
		z-index: 2;
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

	h3 {
		display: none;
		font-size: 1rem;
		color: var(--light);
		margin: 0;
	}

	.hamburger {
		display: none;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		color: var(--light);

		i {
			font-size: 1.3rem;
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
		top: 2rem;
		height: 100%;
		right: 0;
		z-index: 1;
		padding: 2rem;
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

	@media (max-width: 900px) {
		.header-inner {
			justify-content: space-between;
			padding: 0.5rem;
			gap: 0.5rem;
		}

		.logo {
			width: 2.5rem;
			height: 2.5rem;
		}

		.logo-link {
			width: 2.5rem;
			height: 2.5rem;
		}

		.links {
			display: none;
		}

		h3 {
			display: block;
		}

		.hamburger {
			display: flex;
		}
	}
</style>
