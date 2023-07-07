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
		<h1>{title}</h1>
		<p class="author">{new Date(date).toLocaleString('en-us', options)}</p>
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
		padding: 0 1.5rem;
	}

	h1 {
		text-align: left;
		max-width: 50rem;
		margin: 1rem auto;
		font-size: 2rem;
	}

	section {
		max-width: 50rem;
		margin: 3rem auto 4rem auto;
	}

	.author {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	@media (max-width: 700px) {
		h1 {
			font-size: 1.6rem;
		}
		.author {
			font-size: 1rem;
		}
	}

	iframe {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		border-radius: 1rem;
	}
</style>
