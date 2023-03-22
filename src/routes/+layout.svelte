<script>
	import '../app.scss'
	import '@fontsource/figtree/latin.css'
	import '@fontsource/figtree/latin-ext.css'
	import '/node_modules/flag-icons/css/flag-icons.min.css'

	import { page } from '$app/stores'

	let menuOpen = false
</script>

<header class:open={menuOpen}>
	<h1><a href="/">The Forgotten Europe Project</a></h1>
	<div class="links">
		<h4>
			<a class="button" class:active={$page.url.pathname === '/'} href="/">Home</a>
		</h4>
		<h4>
			<a
				class="button"
				class:active={$page.url.pathname === '/interviews'}
				href="/interviews"
			>
				Interviews
			</a>
		</h4>
		<h4>
			<a
				class="button"
				class:active={$page.url.pathname === '/curriculum'}
				href="/curriculum"
			>
				Curriculum
			</a>
		</h4>
		<h4>
			<a class="button" class:active={$page.url.pathname === '/volunteer'} href="/volunteer">
				Volunteer
			</a>
		</h4>
		<h4>
			<a class="button" class:active={$page.url.pathname === '/about'} href="/about">
				About
			</a>
		</h4>
	</div>
	<button class="menu" on:click={() => (menuOpen = !menuOpen)}>
		<i class={'fa-solid ' + (menuOpen ? 'fa-xmark' : 'fa-bars')} />
	</button>
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
		position: sticky;
		z-index: 100;
		top: 0;
		left: 0;
		display: flex;
		background-color: var(--color-text-1);
		padding: $m $l;
		align-items: center;

		& * {
			color: var(--color-bg);
		}

		& h1 {
			font-size: 1.5em;
			margin: 0;
			margin-right: auto;
		}

		& h4 {
			margin: 0;
			margin-left: $m;
		}
	}

	.links {
		display: flex;
	}

	header a.button {
		border-color: transparent;

		&:hover {
			border-color: var(--color-bg);
			background-color: transparent;
		}

		&.active {
			background-color: var(--color-bg);
			color: var(--color-text-1);
		}
	}

	.menu {
		display: none;
		font-size: 1.2em;
		width: $l + $s;
		height: $l + $s;
	}

	main {
		height: 100%;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		padding-bottom: 40px;
	}

	footer {
		text-align: center;
		padding: $m $m $l $m;
		background-color: var(--color-text-1);
		color: var(--color-bg);

		& a {
			color: var(--color-bg);
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

	@media (max-width: 1060px) {
		header {
			padding: $m $m;
			& h1 {
				font-size: 1.3em;
			}

			& h4 {
				margin-left: $s;
			}

			& a.button {
				padding: $s + $t $s;
			}
		}
	}

	@media (max-width: 860px) {
		.links {
			display: none;
		}

		header.open .links {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			top: $l + $s + 2 * $m;
			left: 0;
			right: 0;
			background-color: var(--color-text-1);
			padding: $s 0 $m 0;
			gap: $s;

			& h4 {
				margin: 0;
			}

			& a.button {
				padding: $s + $t $m;
			}
		}

		.menu {
			display: block;
		}
	}

	@media (max-width: 410px) {
		header {
			padding: $s $s $s $m;

			& h1 {
				font-size: 1em;
			}
		}

		header.open .links {
			top: $l + $s + 2 * $s;

			& a.button {
				padding: $s $m;
				font-size: 0.9em;
			}
		}

		.menu {
			font-size: 1em;
		}

		.contact {
			font-size: 0.9em;
		}
	}
</style>
