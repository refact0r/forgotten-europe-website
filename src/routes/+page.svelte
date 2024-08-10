<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import PictureSources from '$lib/components/PictureSources.svelte'
	import BlogPreview from '$lib/components/BlogPreview.svelte'
	// import NewsPreview from '$lib/components/NewsPreview.svelte'
	import InterviewPreview from '$lib/components/InterviewPreview.svelte'
	import banner from '$lib/images/banner3.jpg'
	import flagstrip from '$lib/images/flagstrip-8k.png?w=1440'
	import home1 from '$lib/images/home1.jpg'
	import home2 from '$lib/images/home2.png'
	import home3 from '$lib/images/home3.jpg'
	import home4 from '$lib/images/home4.jpg'
	import home5 from '$lib/images/home5.jpg'

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
			<PictureSources src={banner} sizes="100vw" />
			<img
				class="banner-img"
				src={banner.img.src}
				width="2000"
				height="500"
				alt="Site banner"
			/>
		</picture>
		<h1>The Forgotten Europe Project</h1>
		<picture class="flagstrip-pic">
			<PictureSources src={flagstrip} sizes="1440px" />
			<img
				class="flagstrip-img"
				src={flagstrip.img.src}
				width="720"
				height="27"
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

	<section class="stats-container">
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
	</section>

	<section class="split-right">
		<div class="split-inner">
			<div class="left">
				<picture>
					<PictureSources src={home1} sizes="50vw" />
					<img class="home1-img" src={home1.img.src} width="832" height="624" alt="" />
				</picture>
			</div>
			<div class="right">
				<h2>Remembering the past to grow together in a world without hate</h2>
				<p>
					Learning from the past, we can truly understand what it means to combat all
					forms of hate and prejudice. We work towards changing understandings of
					Central-Eastern European crimes against humanity as a point of never-ending
					learning, not just many disposable events of the past. We bring light to all
					survivors, so that no one may be forgotten. From this region in the world, we
					promote valuable lessons for all to share as a community.
				</p>
				<a class="button" href="/about">
					About Us <i class="fa-solid fa-arrow-right" />
				</a>
			</div>
		</div>
	</section>

	<section class="split-left">
		<div class="split-inner">
			<div class="left">
				<h2>Students making a change in our community</h2>
				<p>
					We believe that education is the first step through learning together about the
					past and combatting prejudices. Involved at the state and school district
					levels, we are the only student-led group pushing for greater education about
					Central-Eastern Europe’s diverse yet critical history, so that all are included
					in the classroom.
				</p>
				<a class="button" href="/curriculum">
					Curriculum <i class="fa-solid fa-arrow-right" />
				</a>
			</div>
			<div class="right">
				<picture>
					<PictureSources src={home2} sizes="50vw" />
					<img class="home2-img" src={home2.img.src} width="832" height="554" alt="" />
				</picture>
			</div>
		</div>
	</section>

	<section class="split-right">
		<div class="split-inner">
			<div class="left">
				<picture>
					<PictureSources src={home3} sizes="50vw" />
					<img class="home3-img" src={home3.img.src} width="832" height="624" alt="" />
				</picture>
			</div>
			<div class="right">
				<h2>Why Central-Eastern Europe?</h2>
				<p>
					While far away from much of the world, Central-Eastern European history provides
					lessons and advice to the struggle against all forms of prejudice and hatred
					globally. Genocides and crimes against humanity, masked by decades of Soviet
					censorship, remind us all that we must learn from the past, not forget about it.
					Only then can we grow together as a global and united community. The ongoing war
					in Ukraine has only made this reality more jarring. Central-Eastern European
					history is an example of what we can all do, to be the positive change towards
					all communities. With your help, we can make a difference and bring light to
					these forgotten topics.
				</p>
				<a class="button" href="/legislation">
					Legislation <i class="fa-solid fa-arrow-right" />
				</a>
			</div>
		</div>
	</section>

	<section class="split-left">
		<div class="split-inner">
			<div class="left">
				<h2>Volunteer</h2>
				<p>
					We are always looking for help from volunteers, through outreach, social media,
					writing, and more. Volunteers can self log their volunteer hours.
				</p>
				<a class="button" href="/volunteer">
					Learn More <i class="fa-solid fa-arrow-right" />
				</a>
			</div>
			<div class="right">
				<picture>
					<PictureSources src={home4} sizes="50vw" />
					<img class="home4-img" src={home4.img.src} width="832" height="554" alt="" />
				</picture>
			</div>
		</div>
	</section>

	<section class="split-right">
		<div class="split-inner">
			<div class="left">
				<picture>
					<PictureSources src={home5} sizes="50vw" />
					<img class="home5-img" src={home5.img.src} width="832" height="624" alt="" />
				</picture>
			</div>
			<div class="right">
				<h2>Interviews</h2>
				<p>
					The Forgotten Europe Project interviews and records survivors of the many
					historical tragedies that Central-Eastern Europe has endured to preserve their
					stories and messages through personal experiences.
				</p>
				<a class="button" href="/interviews">
					Interviews <i class="fa-solid fa-arrow-right" />
				</a>
			</div>
		</div>
	</section>

	<section class="recent">
		<div class="recent-inner">
			<h2>Recent News</h2>
			<p>
				Liam Krol, President of the Forgotten Europe Project, presented a testimony to the
				Washington House Education Committee regarding HB 2037, a bill focused on
				incorporating Holocaust and genocide education into public school curriculums.
			</p>
			<div class="invintus-player" data-eventid="2024011488"></div>
		</div>
	</section>

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

	<br />
	<br />
	<br />
</div>

<style lang="scss">
	.banner {
		@include flex(column, center, center);
		width: 100%;
		position: relative;
		min-height: 20rem;
		color: var(--shade-100);
		.banner-pic {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			.banner-img {
				z-index: 0;
				height: 100%;
				object-position: center 30%;
				filter: brightness(0.4);
				border-radius: 0;
			}
		}
		h1 {
			position: relative;
			font-size: 3rem;
			margin: 1rem 0 1.5rem 0;
		}
		.flagstrip-img {
			position: relative;
			max-width: 40rem;
			width: 100%;
			height: auto;
			border-radius: 0.2rem;
		}
		h2 {
			position: relative;
			font-weight: 500;
		}
	}

	img {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
		object-fit: cover;
	}

	section {
		max-width: 58rem;
		margin: 2rem auto 3rem auto;
		padding: 0 3rem;
		h2 {
			margin-top: 0;
		}
	}

	.stats-container {
		max-width: none;
		background-color: var(--shade-80);
		color: var(--shade-10);
		padding: 1.5rem 0rem;
		margin-bottom: 4rem;
	}
	.stats {
		display: flex;
		max-width: 58rem;
		justify-content: space-between;
		padding: 0 3rem;
		margin: auto;
		text-align: center;
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
	}

	.invintus-player {
		border-radius: 0.5rem;
		overflow: hidden;
		aspect-ratio: 16 / 9;
	}

	.split-right,
	.split-left {
		max-width: none;
		width: 100%;
		padding: 0 3rem;
		.left {
			width: 60%;
		}
		.right {
			width: 40%;
		}
	}
	.split-left {
		background-color: var(--shade-80);
		padding: 3rem 3rem;
		.left {
			width: 40%;
		}
		.right {
			width: 60%;
		}
	}
	.split-inner {
		@include flex(row, center, center);
		gap: 3rem;
		max-width: 80rem;
		margin: auto;
		img {
			aspect-ratio: 4 / 3;
		}
		.home2-img,
		.home4-img {
			aspect-ratio: 3 / 2;
		}
		.home5-img {
			object-position: center 30%;
		}
	}

	.recent {
		max-width: none;
		width: 100%;
		background-color: var(--shade-80);
		padding: 3rem 3rem;
		h2 {
			margin-top: 0;
		}
		.recent-inner {
			margin: auto;
			max-width: 52rem;
		}
	}

	@media (max-width: 1000px) {
		.banner {
			padding: 0 1.5rem;
			h1 {
				font-size: 2.5rem;
			}
			.flagstrip-img {
				max-width: 35rem;
			}
			h2 {
				font-size: 1.2rem;
			}
		}
		.split-right,
		.split-left {
			.split-inner {
				flex-direction: column;
				gap: 2rem;
				.left,
				.right {
					width: 100%;
				}
			}
		}
		.split-right {
			.split-inner {
				flex-direction: column-reverse;
			}
		}
	}

	@media (max-width: 600px) {
		section {
			margin: 2rem auto;
		}
		.stats-container {
			margin-bottom: 2rem;
		}
		.split-right {
			margin: 2rem 0;
		}
		.split-left,
		.recent {
			padding: 2rem 0;
		}
		section,
		.split-left,
		.split-right,
		.stats,
		.recent {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
	}
</style>
