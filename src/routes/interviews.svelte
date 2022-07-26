<script>
	import PageHead from '$lib/components/PageHead.svelte'
</script>

<PageHead title="Interviews" description="Description" />

<div class="content">
	<h1>Interviews</h1>

	<div class="section">
		<div class="column-img">
			<img class="hussars-img" src="hussars.jpg" />
			<div class="caption">"Hussars" Polish band in New York</div>
		</div>

		<div class="column-text">
			<p>
				For those comfortable, the forgotten Europe project interviews survivors of 20th
				century communism, the second world war, and the holocaust. Interviews effectively
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
	</div>
</div>

<style>
	.content {
	}
	h1 {
		text-align: center;
	}
	.section {
		display: flex;
		gap: 100px;
		padding: 40px 100px;
	}
	.column-img {
		width: 40%;
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
	.column-text {
		width: 60%;
	}
	p:first-of-type {
		margin-top: 0;
	}
</style>
