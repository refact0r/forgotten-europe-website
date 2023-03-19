<script>
	import '../app.scss'
	import { page } from '$app/stores'
</script>

<header>
	<h3><a href="/">The Forgotten Europe Project</a></h3>
	<h4>
		<a class="button" class:active={$page.url.pathname === '/'} href="/">Home</a>
	</h4>
	<h4>
		<a class="button" class:active={$page.url.pathname === '/interviews'} href="/interviews">
			Interviews
		</a>
	</h4>
	<h4>
		<a class="button" class:active={$page.url.pathname === '/curriculum'} href="/curriculum">
			Curriculum
		</a>
	</h4>
	<h4>
		<a class="button" class:active={$page.url.pathname === '/volunteer'} href="/volunteer">
			Volunteer
		</a>
	</h4>
	<h4>
		<a class="button" class:active={$page.url.pathname === '/about'} href="/about"> About </a>
	</h4>
</header>

<main>
	<slot />
</main>

<footer>
	<div class="description">
		<i>
			The Forgotten Europe Project is in no way affiliated based on race, ethnicity, religion,
			gender identity, or sexual orientation. We welcome all individuals to share an interest
			in Central-Eastern European culture and history.
			<br />
			The Forgotten Europe Project stands in full solidarity with the people of Ukraine.
		</i>
	</div>
	<div class="contact">Contact us</div>
	<a href="mailto:forgotteneuropeproject@gmail.com"> forgotteneuropeproject@gmail.com </a>
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
	header {
		position: sticky;
		z-index: 100;
		top: 0;
		left: 0;
		display: flex;
		background-color: var(--color-text-1);
		padding: $space-s $space-m;
		align-items: center;

		& * {
			color: var(--color-bg);
		}
	}

	h3,
	h4 {
		margin: 0;
	}

	h3 {
		margin-right: auto;
	}

	h4 {
		margin-left: $space-s;
	}

	header a.button {
		border-color: transparent;
		padding: $space-xxs $space-s;

		&:hover {
			border-color: var(--color-bg);
			background-color: transparent;
		}

		&.active {
			background-color: var(--color-bg);
			color: var(--color-text-1);
		}
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
		padding: 20px 20px;
		background-color: var(--color-text-1);
		color: var(--color-bg);

		& a {
			color: var(--color-bg);
		}
	}

	.description {
		font-size: 0.9em;
	}

	.contact {
		margin-top: 10px;
	}

	.buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 10px;
	}
</style>
