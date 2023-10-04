<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import PictureSources from '$lib/components/PictureSources.svelte'
	import volunteer1 from '$lib/images/volunteer1.jpg?w=800;400'
	import volunteer2 from '$lib/images/volunteer2.jpg?w=800;400'
	import volunteer4 from '$lib/images/volunteer4.jpg?w=800;400'
</script>

<PageHead
	title="Volunteer"
	description="The Forgotten Europe Project is always looking for the help of volunteers, whether it be through outreach, social media, or writing."
/>

<div class="content">
	<h1>Volunteer</h1>
	<section>
		<div class="images">
			<picture class="volunteer1-pic">
				<PictureSources src={volunteer1} />
				<img
					class="volunteer1-img"
					src={volunteer1.img.src}
					width="336"
					height="252"
					type="image/jpeg"
					alt="Liam Krol volunteering at the Kraków train station reception center for Ukrainian refugees"
				/>
			</picture>
			<picture class="volunteer2-pic">
				<PictureSources src={volunteer2} />
				<img
					class="volunteer2-img"
					src={volunteer2.img.src}
					width="336"
					height="252"
					type="image/jpeg"
					alt="Liam Krol playing badminton with a young refugee from Ukraine."
				/>
			</picture>
			<picture class="volunteer4-pic">
				<PictureSources src={volunteer4} />
				<img
					class="volunteer4-img"
					src={volunteer4.img.src}
					width="336"
					height="252"
					type="image/jpeg"
					alt="Liam Krol volunteering at the Kraków train station reception center for Ukrainian refugees"
				/>
			</picture>
		</div>
		<div class="caption">
			Liam Krol volunteering at the Kraków train station reception center for Ukrainian
			refugees
		</div>
		<br />
		<br />
		<div class="middle">
			<p class="description">
				We are always looking for volunteers willing to contribute to the project's mission
				statement and goals. We are a registered 501(c)3 nonprofit in the State of
				Washington. Our volunteers self log their volunteer hours, which can go towards high
				school volunteer requirements. If interested in volunteer involvement, please
				complete the sign-up form.
			</p>
			<a class="button" href="https://forms.gle/G1dM2FCGaQ52tKBk9">
				Sign Up to Volunteer &nbsp;<i class="fa-solid fa-arrow-up-right-from-square" />
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
				Central-Eastern Europe's forgotten history. Responsibilities include creating blogs,
				writing newsletters, and conducting historical research.
			</p>
		</div>
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0rem 1.5rem 1rem 1.5rem;
	}

	section {
		max-width: 65rem;
		margin: auto;
		margin-bottom: 4rem;
	}

	h1,
	h2,
	h3 {
		text-align: center;
	}

	.columns {
		display: flex;
		gap: 2rem;
	}

	.column {
		width: 33.33%;
	}

	.images {
		display: flex;
		gap: 1rem;
	}

	.middle {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.description {
		margin-bottom: 0;
		flex: 4;
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

	.button {
		text-align: center;
		font-size: 1.1rem;
		padding: 0.8rem 1.1rem;
		flex: 1;
		// width: 50%;
	}

	@media (max-width: 700px) {
		@include small-headings;

		.volunteer2-pic,
		.volunteer4-pic {
			display: none;
		}

		.columns,
		.middle {
			flex-direction: column;
			gap: 0;
		}

		.button {
			width: 100%;
			margin: 1rem auto 0 auto;
		}

		.column {
			width: 100%;
		}
	}
</style>
