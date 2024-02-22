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

<svelte:head>
	<script type="application/javascript" charset="UTF-8">
		!(function (src, cb) {
			var s = document.createElement('script')
			s.src = src
			s.async = true
			if (s.readyState) {
				s.onreadystatechange = function () {
					if (s.readyState == 'loaded' || s.readyState == 'complete') {
						s.onreadystatechange = null
						cb()
					}
				}
			} else {
				s.onload = function () {
					cb()
				}
			}
			document.head.appendChild(s)
		})('//player.invintus.com/app.js', function () {
			Invintus.launch({
				clientID: '9375922947',
				eventID: '2024011488',
				simple: true,
				startStreamAt: 3762,
				stopStreamAt: 3902
			})
		})
	</script>
</svelte:head>

<div class="content">
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
				<div class="number">239</div>
				<a class="label" href="/petition">Petition Signatures</a>
			</div>
			<div class="group">
				<div class="number">16</div>
				<a class="label" href="/volunteer">Volunteers</a>
			</div>
		</div>
	</div>

	<section>
		<h2>Recent News</h2>
		<p>
			Liam Krol, President of the Forgotten Europe Project, presented a testimony to the
			Washington House Education Committee regarding HB 2037, a bill focused on incorporating
			Holocaust and genocide education into public school curriculums.
		</p>
		<div class="invintus-player" data-eventid="2024011488"></div>
	</section>

	<section class="columns">
		<div class="column">
			<h2>
				<a href="/volunteer">Volunteer</a>
			</h2>
			<p>
				We are always looking for help from volunteers, through outreach, social media,
				writing, and more. Volunteers can self log their volunteer hours.
			</p>
		</div>
		<div class="column">
			<h2>
				<a href="/petition">Petition</a>
			</h2>
			<p>
				Petition to Washington State Schools on the importance of Central-Eastern European
				studies.
			</p>
		</div>
		<a class="button" href="/volunteer">
			Learn More &nbsp; <i class="fa-solid fa-arrow-right" />
		</a>
		<a class="button" href="/petition">
			Read the Petition &nbsp; <i class="fa-solid fa-arrow-right" />
		</a>
	</section>

	<section></section>

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
		padding: 2rem;
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
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
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
		max-width: 53rem;
		margin: 2rem auto 4rem auto;
		padding: 0rem 1.5rem;
	}

	.interview {
		max-width: 30rem;
		margin: 0 auto;
	}

	.stats-back {
		background-color: var(--semi-light);
		color: var(--dark);
		padding: 1.5rem 1.5rem;
		margin-bottom: 4rem;
	}

	.stats {
		display: flex;
		max-width: 53rem;
		justify-content: space-between;
		margin: auto;
		gap: 1rem;
	}

	.group {
		width: 7rem;
	}

	.number {
		font-size: 2.5rem;
		font-weight: bold;
	}

	.label {
		font-size: 1rem;
		font-weight: 500;
	}

	.columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr auto;
		gap: 0 2rem;

		a.button {
			width: fit-content;
			margin: auto;
		}
	}

	.column p {
		text-align: center;
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
		.number {
			font-size: 2.5rem;
		}
		.label {
			font-size: 1rem;
		}
	}
</style>
