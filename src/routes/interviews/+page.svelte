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
		<Collapsible title="Poland" open={true}>
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
		</Collapsible>
	</section>
</div>

<style lang="scss">
	h1,
	h2 {
		margin-top: $space-l;
		text-align: center;
	}
	.signup {
		display: flex;
		gap: 80px;
		margin: 40px 200px 100px 200px;
	}
	.hussars-img {
		width: 600px;
	}
	.caption {
		line-height: 100%;
		width: 100%;
		text-align: center;
		font-size: 0.9em;
		margin-top: 5px;
	}
	p:first-of-type {
		margin-top: 0;
	}
	.interviews {
		margin: 40px 0 0 0;
	}
	iframe {
		display: inline-block;
	}
</style>
