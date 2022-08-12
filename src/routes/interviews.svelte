<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import Collapsible from '$lib/components/Collapsible.svelte'
</script>

<PageHead title="Interviews" description="Description" />

<div class="content">
	<h1>Interviews</h1>

	<section class="columns">
		<div class="column-img">
			<img class="hussars-img" src="hussars.jpg" alt="“Hussars” Polish band in New York" />
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
				Sign Up for an Interview
			</a>

			<p>
				Or contact <a href="mailto:forgotteneuropeproject@gmail.com">
					forgotteneuropeproject@gmail.com
				</a>
			</p>
		</div>
	</section>

	<section>
		<Collapsible title="Poland" open={false}>
			<iframe
				title="Interview with Krystof on Life in Communist Poland"
				width="512"
				height="288"
				src="https://www.youtube.com/embed/PHlTTpOLVpA"
			/>
		</Collapsible>
		<Collapsible title="Country" open={false}>
			<iframe
				title="Interview with Krystof on Life in Communist Poland"
				width="512"
				height="288"
				src="https://www.youtube.com/embed/PHlTTpOLVpA"
			/>
		</Collapsible>
	</section>
</div>

<style>
	h1 {
		text-align: center;
	}
	section {
		margin: 40px 120px;
	}
	.columns {
		display: flex;
		gap: 80px;
	}
	.column-img {
		width: 30%;
	}
	.column-text {
		width: 70%;
	}
	.hussars-img {
		width: 100%;
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
	iframe {
		display: block;
	}
</style>
