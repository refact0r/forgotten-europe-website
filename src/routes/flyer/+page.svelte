<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import PictureSources from '$lib/components/PictureSources.svelte'
	import flyer0 from '$lib/images/flyer0.png?w=1500;1000;500'
	import flyer1 from '$lib/images/flyer1.png?w=1500;1000;500'
</script>

<PageHead
	title="Flyer"
	description="The Forgotten Europe Project is always looking for the help of volunteers, whether it be through outreach, social media, or writing."
/>

<div class="content">
	<section>
		<picture class="flyer0-pic">
			<PictureSources src={flyer0} />
			<img
				class="flyer0-img"
				src={flyer0.img.src}
				width="1500"
				height="2121"
				type="image/png"
				alt="Flyer page 1"
			/>
		</picture>
		<picture class="flyer1-pic">
			<PictureSources src={flyer1} />
			<img
				class="flyer1-img"
				src={flyer1.img.src}
				width="1500"
				height="2121"
				type="image/png"
				alt="Flyer page 2"
			/>
		</picture>
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0rem;
	}

	section {
		max-width: 1000px;
		margin: auto;
	}

	img {
		width: 100%;
		height: auto;
	}
</style>
