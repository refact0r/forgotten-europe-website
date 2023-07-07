<script>
	import PageHead from '$lib/components/PageHead.svelte'

	export let data

	let { title, date, description, link } = data.frontmatter

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	}
</script>

<PageHead {title} {description} />

<div class="content">
	<section>
		<p class="date">{new Date(date).toLocaleString('en-us', options)}</p>
		<h1>{title}</h1>
		<svelte:component this={data.component} />
		<br />
		<iframe
			width="800"
			height="450"
			src={link}
			title="YouTube video player"
			frameborder="0"
			allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
			allowfullscreen
		/>
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0 1rem;
	}

	h1 {
		text-align: left;
		max-width: 50rem;
		margin: 1rem auto 1rem auto;
		font-size: 2rem;
	}

	section {
		max-width: 50rem;
		margin: 3rem auto 4rem auto;
	}

	.date {
		font-size: 1.2rem;
	}

	iframe {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		border-radius: 1rem;
	}
</style>
