<script>
	import '../app.scss'
	import '@fontsource/figtree/latin.css'
	import '@fontsource/figtree/latin-ext.css'
	import '/node_modules/flag-icons/css/flag-icons.min.css'
	import '$lib/fontawesome/css/fontawesome.min.css'
	import '$lib/fontawesome/css/brands.min.css'
	import '$lib/fontawesome/css/solid.min.css'

	import PictureSources from '$lib/components/PictureSources.svelte'
	import logo from '$lib/images/logo-2k.png?w=200'

	import { page } from '$app/stores'

	// $: title =
	// 	$page.url.pathname === '/'
	// 		? 'The Forgotten <span class="nowrap">Europe Project</span>'
	// 		: $page.url.pathname.charAt(1).toUpperCase() + $page.url.pathname.slice(2)

	let menuOpen = false

	$: $page.url && (menuOpen = false)

	function toggleMenu() {
		menuOpen = !menuOpen
	}
</script>

<svelte:head>
	<script defer src="//www.instagram.com/embed.js"></script>
	<script defer src="https://www.googletagmanager.com/gtag/js?id=G-MV1YZX8G6K"></script>
	<script defer src="/js/google-analytics.js"></script>
</svelte:head>

{#if $page.url.pathname !== '/admin'}
	<header>
		<div class="header-inner">
			<a class="logo-link inverted" href="/">
				<picture>
					<PictureSources src={logo} />
					<img
						class="logo"
						src={logo.img.src}
						width="48"
						height="48"
						type="image/png"
						alt="The Forgotten Europe Project Logo"
					/>
				</picture>
				<h1>The Forgotten Europe Project</h1>
			</a>
			<div class="links">
				<a class="button inverted" class:active={$page.url.pathname === '/'} href="/">
					Home
				</a>
				<a
					class="button inverted"
					class:active={$page.url.pathname.slice(0, 5) === '/news'}
					href="/news"
				>
					News
				</a>
				<a
					class="button inverted"
					class:active={$page.url.pathname.slice(0, 5) === '/blog'}
					href="/blog"
				>
					Blog
				</a>
				<a
					class="button inverted"
					class:active={$page.url.pathname.slice(0, 11) === '/interviews'}
					href="/interviews"
				>
					Interviews
				</a>
				<a
					class="button inverted"
					class:active={$page.url.pathname.slice(0, 11) === '/curriculum'}
					href="/curriculum"
				>
					Curriculum
				</a>
				<a
					class="button inverted"
					class:active={$page.url.pathname.slice(0, 10) === '/volunteer'}
					href="/volunteer"
				>
					Volunteer
				</a>
				<a
					class="button inverted"
					class:active={$page.url.pathname.slice(0, 6) === '/about'}
					href="/about"
				>
					About
				</a>
			</div>
			<button class="hamburger" on:click={toggleMenu} aria-label="Open Menu">
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
{/if}

<main>
	<slot />
</main>

{#if $page.url.pathname !== '/admin'}
	<footer>
		<p class="description">
			<i>
				The Forgotten Europe Project is in no way affiliated based on race, ethnicity,
				religion, gender identity, or sexual orientation. We welcome all individuals to
				share an interest in Central-Eastern European culture and history.
				<br />
				The Forgotten Europe Project stands in full solidarity with the people of Ukraine.
			</i>
		</p>
		<p class="contact">
			Contact us<br />
			<a class="inverted" href="mailto:forgotteneuropeproject@gmail.com">
				forgotteneuropeproject@gmail.com
			</a>
		</p>
		<div class="buttons">
			<a
				class="button icon inverted"
				aria-label="Instagram"
				title="Instagram"
				href="https://www.instagram.com/forgotteneuropeproject/"
			>
				<i class="fa-brands fa-instagram" />
			</a>
			<a
				class="button icon inverted"
				aria-label="Tiktok"
				title="Tiktok"
				href="https://www.tiktok.com/@forgotten.europe"
			>
				<i class="fa-brands fa-tiktok" />
			</a>
			<a
				class="button icon inverted"
				aria-label="Youtube"
				title="Youtube"
				href="https://www.youtube.com/@theforgotteneuropeproject5348"
			>
				<i class="fa-brands fa-youtube" />
			</a>
			<a
				class="button icon inverted"
				aria-label="LinkedIn"
				title="LinkedIn"
				href="https://www.linkedin.com/company/the-forgotten-europe-project/"
			>
				<i class="fa-brands fa-linkedin" />
			</a>
		</div>
	</footer>
{/if}

<style lang="scss">
	:global(body) {
		font-family: 'Figtree', sans-serif;
		font-style: normal;
		font-weight: 400;
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
			@include clickable-header;
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
		gap: 1rem;
		margin-left: auto;
		font-size: 1.1rem;
		line-height: 1.1em;
	}

	.logo {
		width: 2.5rem;
		height: 2.5rem;
	}

	.logo-link {
		@include clickable-text-inverted;
		display: flex;
		align-items: center;
		gap: 1rem;
		color: inherit;
		text-decoration: none;
	}

	h1 {
		font-size: 1.3rem;
		margin: 0;
	}

	.hamburger {
		@include flex-center;
		@include clickable-text-inverted;
		display: none;
		width: 3rem;
		height: 3rem;
		margin-left: auto;

		i {
			font-size: 1.2rem;
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
		padding: 3.5rem 1.5rem 1rem 1.5rem;
		gap: 1rem;

		&.open {
			transform: translateX(0);
		}

		a.button {
			font-size: 1.1rem;
			padding: 0.6rem 1rem;
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
	}

	.description {
		font-size: 0.8rem;
	}

	.contact {
		margin: 0.5rem 0;
	}

	.buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	@media (max-width: 1100px) {
		header a.button {
			padding: 0.5rem 0.6rem;
		}
		.logo {
			width: 2.25rem;
			height: 2.25rem;
		}
		h1 {
			font-size: 1.1rem;
		}
		.links {
			gap: 0.5rem;
			font-size: 1rem;
		}
	}

	@media (max-width: 925px) {
		h1 {
			display: none;
		}
	}

	@media (max-width: 700px) {
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
			font-size: 1.1rem;
		}
		.links {
			display: none;
		}
		.hamburger {
			display: flex;
		}
	}
</style>
