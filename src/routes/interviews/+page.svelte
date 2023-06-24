<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import Collapsible from '$lib/components/Collapsible.svelte'
	import hussars from '$lib/images/hussars.jpg?avif&quality=75'
	import hussars_fallback from '$lib/images/hussars.jpg'
</script>

<PageHead title="Interviews" description="Information about interviews." />

<div class="content">
	<h1>Interviews</h1>

	<section class="signup">
		<div class="column-img">
			<picture>
				<source srcset={hussars} type="image/avif" />
				<img
					class="hussars-img"
					src={hussars_fallback}
					type="image/jpeg"
					alt="“Hussars” Polish band in New York"
				/>
			</picture>
			<div class="caption">“Hussars” Polish band in New York</div>
		</div>

		<div class="column-text">
			<p>
				For those comfortable, the forgotten Europe project interviews survivors of 20th
				century communism, the second world war, and the Holocaust. Interviews effectively
				preserve the individual stories that establish knowledge for posterity. Topics range
				from personal life, public experiences, service, travel, and more--the interviewee
				chooses. Interviews may be audio recorded, camera recorded, or both in accordance
				with interviewee preference.
			</p>
			<br />

			<a class="button" href="https://forms.gle/nePPj6bpz8ZNimKq8">
				Sign Up for an Interview &nbsp;<i class="fa-solid fa-arrow-right" />
			</a>

			<p>
				Or contact <a href="mailto:forgotteneuropeproject@gmail.com">
					forgotteneuropeproject@gmail.com
				</a>
			</p>
		</div>
	</section>

	<h2>Past Interviews</h2>

	<section class="interviews">
		<Collapsible open={true}>
			<div slot="header">
				<span class="fi fi-pl" />
				<span class="collapsible-name">Poland</span>
			</div>
			<div slot="details">
				<iframe
					title="Life Under Communism: an interview on Poland"
					width="512"
					height="288"
					src="https://www.youtube.com/embed/PHlTTpOLVpA"
				/>
				&nbsp; &nbsp;
				<iframe
					title="Stories From WWII and Communism"
					width="512"
					height="288"
					src="https://www.youtube.com/embed/SUIV4c_gcNw"
				/>
			</div>
		</Collapsible>
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0 1rem;
	}

	section {
		margin: auto;
		margin-bottom: 3rem;
		max-width: 64rem;
	}

	.signup {
		display: flex;
		gap: 3rem;
	}

	.hussars-img {
		width: 100%;
		border-radius: 1rem;
	}

	.column-img {
		width: 50%;
	}

	.column-text {
		width: 50%;
	}

	.caption {
		line-height: 100%;
		width: 100%;
		text-align: center;
		font-size: 0.9rem;
		margin-top: 0.5rem;
	}

	p:first-of-type {
		margin-top: 0;
	}

	iframe {
		display: inline-block;
		border-radius: 1rem;
		border: none;
	}

	.collapsible-name {
		margin-left: 1rem;
	}
</style>
