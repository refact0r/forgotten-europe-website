<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import volunteer1 from '$lib/images/volunteer1.jpg?format=avif&w=1000'
	import volunteer1_fallback from '$lib/images/volunteer1.jpg?w=1000'
	import volunteer2 from '$lib/images/volunteer2.jpg?format=avif&w=1000'
	import volunteer2_fallback from '$lib/images/volunteer2.jpg?w=1000'
	import volunteer3 from '$lib/images/volunteer3.jpg?format=avif&w=1000'
	import volunteer3_fallback from '$lib/images/volunteer3.jpg?w=1000'
	import volunteer4 from '$lib/images/volunteer4.jpg?format=avif&w=1000'
	import volunteer4_fallback from '$lib/images/volunteer4.jpg?w=1000'
</script>

<PageHead title="Curriculum" description="Description" />

<div class="content">
	<h1>Volunteer</h1>

	<!-- <section class="columns">
		<div class="column1">
			<p class="description">
				We are always looking for volunteers willing to contribute to the Project's mission
				statement and goals. If interested in volunteer involvement, please complete the
				sign-up form.
			</p>
			<br />
			<a class="button" href="https://forms.gle/G1dM2FCGaQ52tKBk9">
				Sign Up to Volunteer &nbsp;<i class="fa-solid fa-arrow-right" />
			</a>
		</div>
		<div class="column2">
			<div class="grid">
				<picture class="volunteer1-pic">
					<source srcset={volunteer1} type="image/avif" />
					<img
						class="volunteer1-img"
						src={volunteer1_fallback}
						type="image/jpeg"
						alt="Liam Krol"
					/>
				</picture>
				<picture class="volunteer2-pic">
					<source srcset={volunteer2} type="image/avif" />
					<img
						class="volunteer2-img"
						src={volunteer2_fallback}
						type="image/jpeg"
						alt="Liam Krol"
					/>
				</picture>
				<picture class="volunteer3-pic">
					<source srcset={volunteer3} type="image/avif" />
					<img
						class="volunteer3-img"
						src={volunteer3_fallback}
						type="image/jpeg"
						alt="Liam Krol"
					/>
				</picture>
				<picture class="volunteer4-pic">
					<source srcset={volunteer4} type="image/avif" />
					<img
						class="volunteer4-img"
						src={volunteer4_fallback}
						type="image/jpeg"
						alt="Liam Krol"
					/>
				</picture>
			</div>
			<div class="caption">
				Liam Krol volunteering at the Kraków train station reception center for Ukrainian refugees
			</div>
		</div>
	</section> -->

	<section>
		<div class="images">
			<picture class="volunteer1-pic">
				<source srcset={volunteer1} type="image/avif" />
				<img
					class="volunteer1-img"
					src={volunteer1_fallback}
					width="336"
					height="252"
					type="image/jpeg"
					alt="Liam Krol"
				/>
			</picture>
			<picture class="volunteer2-pic">
				<source srcset={volunteer2} type="image/avif" />
				<img
					class="volunteer2-img"
					src={volunteer2_fallback}
					width="336"
					height="252"
					type="image/jpeg"
					alt="Liam Krol"
				/>
			</picture>
			<picture class="volunteer4-pic">
				<source srcset={volunteer4} type="image/avif" />
				<img
					class="volunteer4-img"
					src={volunteer4_fallback}
					width="336"
					height="252"
					type="image/jpeg"
					alt="Liam Krol"
				/>
			</picture>
		</div>
		<div class="caption">
			Liam Krol volunteering at the Kraków train station reception center for Ukrainian refugees
		</div>
		<br />
		<div class="columns">
			<p class="description">
				We are always looking for volunteers willing to contribute to the Project's mission
				statement and goals. If interested in volunteer involvement, please complete the
				sign-up form.
			</p>
			<a class="button" href="https://forms.gle/G1dM2FCGaQ52tKBk9">
				Sign Up to Volunteer &nbsp;<i class="fa-solid fa-arrow-right" />
			</a>
		</div>
	</section>

	<h2>Volunteer Positions</h2>

	<section class="columns">
		<div class="column">
			<h3>Outreach</h3>
			<p>
				Responsibilities include using project resources and contacts to expand the
				influence and scope of the project. Includes the planning of events and initiatives
				coordinated by the project.
			</p>
		</div>
		<div class="column">
			<h3>Social media</h3>
			<p>
				Contribution to the project's social media page is essential to our success. Social
				media volunteers are responsible for creating content and managing our social
				accounts.
			</p>
		</div>
		<div class="column">
			<h3>Writer</h3>
			<p>
				As a historical project, we focus on preserving and raising awareness over
				central-eastem Europe's forgotten history. Responsibilities include creating blogs,
				writing newsletters, and conducting historical research.
			</p>
		</div>
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0 1rem;
	}

	section {
		max-width: 65rem;
		margin: auto;
		margin-bottom: 3rem;
	}

	.columns {
		display: flex;
		gap: 3rem;
	}

	.column {
		width: 33.33%;
	}

	// .column1 {
	// 	width: 30%;
	// }
	// .column2 {
	// 	width: 70%;
	// }

	// .grid {
	// 	display: grid;
	// 	grid-template-columns: 1fr 1fr;
	// 	gap: 0.5rem;
	// }

	.images {
		display: flex;
		gap: 1rem;
	}

	.description {
		margin-bottom: 0;
	}

	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
	}

	.caption {
		width: 100%;
		text-align: center;
		font-style: italic;
		margin-top: 0.5rem;
		font-size: 0.9rem;
	}
</style>
