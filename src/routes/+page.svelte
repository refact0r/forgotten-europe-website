<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import PictureSources from '$lib/components/PictureSources.svelte'
	import PostPreview from '../lib/components/PostPreview.svelte'
	import banner from '$lib/images/banner3.jpg?w=2000;1500;1000;500'
	import flagstrip from '$lib/images/flagstrip-2x.png'

	export let data
</script>

<PageHead title="" description="Home page of The Forgotten Europe Project website" />

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

		<br />

		<h2>
			<a href="/blog">
				Project Blog
				<i class="fa-solid fa-arrow-right" />
			</a>
		</h2>

		<PostPreview post={data.post} />
	</section>
</div>

<style lang="scss">
	.content {
		padding: 1rem 1rem 4rem 1rem;
		text-align: center;
	}

	.banner {
		position: relative;
		width: 100%;
		height: 20rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		h1 {
			position: relative;
			font-size: 2.5em;
			color: #fff;
		}

		h2 {
			position: relative;
			font-size: 1.5em;
			color: #fff;
		}
	}

	.flagstrip {
		position: relative;
		width: 40rem;
		height: auto;
	}

	.banner-pic {
		position: absolute;
		width: 100%;
	}

	.banner-img {
		width: 100%;
		height: 20rem;
		object-fit: cover;
		object-position: center 30%;
		filter: brightness(0.4);
		z-index: 0;
	}

	h1 {
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
		font-size: 2em;
	}

	h2 i {
		font-size: 1.25rem;
		margin-left: 0.5rem;
	}

	p {
		margin: auto;
	}

	section {
		max-width: 55rem;
		margin: 0 auto;
	}
</style>
