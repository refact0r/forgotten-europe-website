<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import PictureSources from '$lib/components/PictureSources.svelte'
	import BlogPreview from '$lib/components/BlogPreview.svelte'
	// import NewsPreview from '$lib/components/NewsPreview.svelte'
	import InterviewPreview from '$lib/components/InterviewPreview.svelte'
	import banner from '$lib/images/banner3.jpg?w=2000;1500;1000;500'
	import flagstrip from '$lib/images/flagstrip-8k.png'

	export let data
</script>

<PageHead
	title=""
	description="The Forgotten Europe Project is dedicated to enlightening the world with the forgotten stories, traditions, and history of Central-Eastern Europe."
/>

<div class="banner">
	<picture class="banner-pic">
		<PictureSources src={banner} />
		<img
			class="banner-img"
			src={banner.img.src}
			width="2000"
			height="500"
			type="image/jpeg"
			alt="Site banner"
		/>
	</picture>
	<h1>The Forgotten Europe Project</h1>
	<picture class="flagstrip-pic">
		<PictureSources src={flagstrip} />
		<img
			class="flagstrip"
			src={flagstrip.img.src}
			width="640"
			height="24"
			type="image/jpeg"
			alt="Flags of Central-Eastern Europe"
		/>
	</picture>
	<h2>Preserving the stories, traditions, and history of Central-Eastern Europe.</h2>
</div>
<div class="content">
	<section>
		<h2>Our Mission</h2>

		<p>
			Our mission is to enlighten the world with the stories, traditions, and history of
			Central-Eastern Europe which are omitted from mainstream education. Through personal
			interviews and activism for secondary school curriculums, we intend to redefine the
			marginalized role the region holds in today's global awareness. With your help, we can
			overcome the barriers of Western-centrism and bring equal representation in learning and
			discussion.
		</p>
		<a class="button" href="/about">
			Learn More &nbsp; <i class="fa-solid fa-arrow-right" />
		</a>
	</section>

	<div class="stats-back">
		<div class="stats">
			<div class="group">
				<div class="number">31</div>
				<div class="label">Schools Impacted</div>
			</div>
			<div class="group">
				<div class="number">1</div>
				<div class="label">District Affected</div>
			</div>
			<div class="group">
				<div class="number">14</div>
				<div class="label">Volunteers</div>
			</div>
		</div>
	</div>

	<section>
		<h2>
			<a href="/interviews">Interviews</a>
		</h2>
		<p>
			The Forgotten Europe Project interviews and records survivors of the many historical
			tragedies that Central-Eastern Europe has endured to preserve their stories and messages
			through personal experiences.
		</p>
		<h3>
			<a href={`interviews/${data.interview.slug}`}>Latest Interview</a>
		</h3>
		<div class="interview">
			<InterviewPreview post={data.interview} />
		</div>
	</section>

	<!-- <section>
		<h2>
			<a href="/news"> News </a>
		</h2>
		<p>Stay updated on current news from Central-Eastern Europe.</p>
		<NewsPreview post={data.news} />
	</section> -->

	<section>
		<h2>
			<a href="/blog">Project Blog</a>
		</h2>
		<p>Learn about Central-Eastern European current events, history, and culture.</p>
		<h3>
			<a href={`blog/${data.blog.slug}`}>Latest Post</a>
		</h3>
		<BlogPreview post={data.blog} />
	</section>

	<section>
		<h2>
			<a href="/volunteer">Volunteers</a>
		</h2>
		<p>
			We are consistently looking for the help of volunteers, whether it be through outreach,
			social media, or writing. Volunteers can self log their volunteer hours.
		</p>
		<a class="button" href="/volunteer">
			Learn More &nbsp; <i class="fa-solid fa-arrow-right" />
		</a>
	</section>
</div>

<style lang="scss">
	.content {
		text-align: center;
		padding: 0rem 0rem 1rem 0rem;
	}

	.banner {
		@include flex-center;
		flex-direction: column;
		gap: 1rem;
		position: relative;
		width: 100%;
		height: fit-content;
		min-height: 20rem;
		padding: 1.5rem;
		color: #fff;
		text-align: center;
		overflow: hidden;

		h2 {
			position: relative;
		}
	}

	h1 {
		position: relative;
		font-size: 2.5rem;
		margin: 1rem 0 1.5rem 0;
	}

	.flagstrip {
		position: relative;
		max-width: 40rem;
		width: 100%;
		height: auto;
	}

	.banner-pic {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.banner-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 30%;
		filter: brightness(0.4);
		z-index: 0;
	}

	h2 {
		margin: 1rem 0;
	}

	p {
		margin: auto;
		margin-bottom: 1rem;
	}

	section {
		max-width: 56rem;
		margin: 2rem auto 5rem auto;
		padding: 0rem 1.5rem;
	}

	.interview {
		max-width: 30rem;
		margin: 0 auto;
	}

	.stats-back {
		background-color: var(--semi-light);
		color: var(--dark);
		width: 100%;
		padding: 1.5rem 1.5rem;
		margin-bottom: 5rem;
	}

	.stats {
		display: flex;
		max-width: 56rem;
		justify-content: space-between;
		margin: auto;
	}

	.group {
		width: 10rem;
	}

	.number {
		font-size: 3rem;
		font-weight: bold;
	}

	.label {
		font-size: 1.2rem;
		font-weight: 500;
	}

	@media (max-width: 850px) {
		.banner {
			min-height: 15rem;
			gap: 0.5rem;
		}
		.flagstrip {
			max-width: 35rem;
		}
		h1 {
			font-size: 2.2rem;
		}
		h2 {
			font-size: 1.3rem;
		}
	}
</style>
