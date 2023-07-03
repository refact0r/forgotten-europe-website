<script>
	import PageHead from '$lib/components/PageHead.svelte'
	// import banner3 from '$lib/images/banner3.jpg?format=avif&aspect=4:3&w=1000&quality=75'
	// import banner3_fallback from '$lib/images/banner3.jpg?aspect=4:3&w=1000'
	// import banner4 from '$lib/images/banner4.jpg?format=avif&aspect=4:3&w=1000&quality=75'
	// import banner4_fallback from '$lib/images/banner4.jpg?aspect=4:3&w=1000'
	// import ukraine from '$lib/images/ukraine-protest.jpg?format=avif&w=1500&quality=75'
	// import ukraine_fallback from '$lib/images/ukraine-protest.jpg'
	import banner from '$lib/images/banner3.jpg?format=avif&w=2000&h=1000'
	import banner_fallback from '$lib/images/banner3.jpg?w=2000&h=1000'
	import flagstrip from '$lib/images/flagstrip-2x.png?format=avif&w=1600&h=60'
	import flagstrip_fallback from '$lib/images/flagstrip-2x.png?format=jpeg&w=1600&h=60'

	import { formatDate } from '$lib/js/utils.js'

	export let data
</script>

<PageHead title="" description="Home page of The Forgotten Europe Project website" />

<div class="banner">
	<picture class="banner-pic">
		<source srcset={banner} type="image/avif" />
		<img
			class="banner-img"
			src={banner_fallback}
			width="2000"
			height="500"
			type="image/jpeg"
			alt="Site banner"
		/>
	</picture>
	<h1>The Forgotten Europe Project</h1>
	<picture class="flagstrip-pic">
		<source srcset={flagstrip} type="image/avif" />
		<img
			class="flagstrip"
			src={flagstrip_fallback}
			width="640"
			height="24"
			type="image/jpeg"
			alt="Flags of Central-Eastern Europe"
		/>
	</picture>
	<h2>Preserving the stories, traditions, and history of Central-Eastern Europe.</h2>
</div>
<div class="content">
	<!-- <div class="images">
		<picture class="picture-2">
			<source srcset={banner3} type="image/avif" />
			<img
				class="image-2"
				src={banner3_fallback}
				width="400"
				height="300"
				type="image/jpeg"
				alt="Site banner"
			/>
		</picture>

		<div class="images-middle">
			<picture class="picture-1">
				<source srcset={ukraine} type="image/avif" />
				<img
					class="image-1"
					src={ukraine_fallback}
					width="644"
					height="483"
					type="image/jpeg"
					alt="Site banner"
				/>
			</picture>
		</div>

		<picture class="picture-3">
			<source srcset={banner4} type="image/avif" />
			<img
				class="image-3"
				src={banner4_fallback}
				width="400"
				height="300"
				type="image/jpeg"
				alt="Site banner"
			/>
		</picture>
	</div>
	<h1>Preserving the stories, traditions, and history of Central-Eastern Europe.</h1> -->

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

	<h2>Project Blog</h2>

	<a class="clickable post" href={`blog/${data.post.slug}`}>
		<div class="left">
			<h2>{data.post.title}</h2>
			<p>{formatDate(data.post.date)}</p>
			<p>{data.post.description}</p>
		</div>
		{#if data.post.featured}
			<img class="thumbnail" src={data.post.featured} alt={data.post.title} />
		{/if}
	</a>

	<br />
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
			font-size: 2em;
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
		height: 20rem;
	}

	.banner-img {
		position: absolute;
		top: 0;
		width: 100%;
		height: 20rem;
		object-fit: cover;
		object-position: center 20%;
		filter: brightness(0.4);
		z-index: 0;
	}

	.images {
		display: inline-flex;
		justify-content: center;
		gap: 2%;
		max-width: 96rem;
	}

	.images-middle {
		display: flex;
		flex-direction: column;
		// max-width: 5.5 * $g;
		width: 42%;
	}

	.image-1 {
		width: 100%;
		height: auto;
		border-radius: 1rem;
	}

	.picture-2,
	.picture-3 {
		// max-width: 3.5 * $g;
		width: 26%;
	}

	.image-2,
	.image-3 {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		margin-top: 23%;
	}

	h1 {
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
		font-size: 2em;
	}

	p {
		max-width: 55rem;
		margin: auto;
	}

	.post {
		display: flex;
		gap: 0.5rem;
		margin: 1rem auto;
		padding: 1rem;
		height: 9rem;
		border-radius: 1rem;
		text-decoration: none;
		font-weight: normal;
		max-width: 55rem;

		.left {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 0.3rem 0.5rem;
			max-height: 7rem;
			min-width: 0;
			width: 100%;
		}

		p {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		h2,
		p {
			text-align: left;
			margin: 0;
		}

		.thumbnail {
			width: 100%;
			height: 100%;
			aspect-ratio: 1/1;
			object-fit: cover;
			border-radius: 0.5rem;
			max-width: 7rem;
			flex-shrink: 0;
		}
	}
</style>
