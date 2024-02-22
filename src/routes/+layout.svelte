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

	$: pagePath = $page.url.pathname.split('/')[1]

	$: console.log(pagePath)

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
				<a class="button inverted" class:active={pagePath === ''} href="/"> Home </a>
				<a
					class="button inverted"
					class:active={pagePath === 'interviews'}
					href="/interviews"
				>
					Interviews
				</a>
				<a
					class="button inverted"
					class:active={pagePath === 'curriculum'}
					href="/curriculum"
				>
					Curriculum
				</a>
				<div class="dropdown">
					<a
						class="button inverted"
						class:active={pagePath === 'legislation'}
						class:semi-active={['petition'].includes(pagePath)}
						href="/legislation"
					>
						Legislation
					</a>
					<div class="dropdown-content">
						<a
							class="button inverted"
							class:active={pagePath === 'petition'}
							href="/petition"
						>
							Petition
						</a>
					</div>
				</div>
				<div class="dropdown">
					<a
						class="button inverted"
						class:active={pagePath === 'blog'}
						class:semi-active={['ukraine'].includes(pagePath)}
						href="/blog"
					>
						Blog
					</a>
					<div class="dropdown-content">
						<a
							class="button inverted"
							class:active={pagePath === 'ukraine'}
							href="/ukraine"
						>
							<span class="ukraine">War in Ukraine</span>
						</a>
					</div>
				</div>
				<div class="dropdown">
					<a class="button inverted" class:active={pagePath === 'about'} href="/about">
						About
					</a>
					<div class="dropdown-content">
						<a
							class="button inverted"
							class:active={pagePath === 'volunteer'}
							href="/volunteer"
						>
							Volunteer
						</a>
					</div>
				</div>
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
			<a class="button inverted" class:active={pagePath === ''} href="/"> Home </a>
			<a class="button inverted" class:active={pagePath === 'interviews'} href="/interviews">
				Interviews
			</a>
			<a class="button inverted" class:active={pagePath === 'blog'} href="/blog"> Blog </a>
			<a class="button inverted" class:active={pagePath === 'curriculum'} href="/curriculum">
				Curriculum
			</a>
			<a class="button inverted" class:active={pagePath === 'volunteer'} href="/volunteer">
				Volunteer
			</a>
			<a class="button inverted" class:active={pagePath === 'petition'} href="/petition">
				Petition
			</a>
			<a class="button inverted" class:active={pagePath === 'about'} href="/about"> About </a>
			<a class="button inverted" class:active={pagePath === 'ukraine'} href="/ukraine">
				<span class="ukraine">War in Ukraine</span>
			</a>
		</div>
	</header>
{/if}

<main>
	<slot />
</main>

{#if $page.url.pathname !== '/admin'}
	<footer>
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
		<br />
		<p class="description">
			The Forgotten Europe Project is in no way affiliated based on race, ethnicity, religion,
			gender identity, or sexual orientation. We welcome all individuals to share an interest
			in Central-Eastern European culture and history.
			<br />
			<b>
				The Forgotten Europe Project is a nonprofit organization incorporated in the State
				of Washington.
			</b>
		</p>
	</footer>
{/if}

<style lang="scss">
	:global(body) {
		font-family: 'Figtree', serif;
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
		gap: 0.5rem;
		margin-left: auto;
		font-size: 1.1rem;
		line-height: 1.1em;
	}

	.dropdown {
		position: relative;

		&:hover {
			.dropdown-content {
				display: flex;
			}
		}
	}

	.dropdown-content {
		display: none;
		flex-direction: column;
		gap: 0.5rem;
		position: absolute;
		right: -0.5rem;
		min-width: calc(100% + 1rem);
		padding: 0.5rem;
		background-color: var(--dark);
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
		z-index: 1;
		border-radius: 0.5rem;

		a.button {
			font-size: 1rem;
			width: 100%;
		}
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
		margin-bottom: 0.5rem;
	}

	.buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.button .ukraine {
		background: linear-gradient(to bottom, hsl(211, 100%, 60%) 55%, hsl(50, 100%, 60%) 55%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
	}
	.button.active .ukraine {
		background: none;
		-webkit-background-clip: inherit;
		-webkit-text-fill-color: inherit;
		-moz-background-clip: inherit;
		-moz-text-fill-color: inherit;
	}

	@media (max-width: 1225px) {
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
			gap: 0.3rem;
			font-size: 1rem;
		}
	}

	@media (max-width: 1050px) {
		h1 {
			display: none;
		}
	}

	@media (max-width: 800px) {
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
