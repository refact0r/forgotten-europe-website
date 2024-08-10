<script>
	import PageHead from '$lib/components/PageHead.svelte'

	export let data

	let { title, date, author, description, link, tags } = data.frontmatter

	const download = link
		.replace(
			'https://drive.google.com/file/d/',
			'https://drive.google.com/uc?export=download&id='
		)
		.replace('/view?usp=sharing', '')

	const embed = link.replace('/view?usp=sharing', '/preview')

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
		<p class="author">By {author}</p>
		<p class="date">Published {new Date(date).toLocaleString('en-us', options)}</p>
		<div class="tags">
			{#each tags as tag}
				<span class="tag">{tag.tag}</span>
			{/each}
		</div>
		<br />
		<svelte:component this={data.component} />
		<br />

		<a href={download} class="button">Download Lesson &nbsp;<i class="fa fa-download"></i></a>
		<br />
		<br />
		<iframe {title} src={embed} allow="autoplay"></iframe>
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0 1.5rem;
	}

	h1 {
		text-align: left;
		max-width: 50rem;
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

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		padding: 0.25rem 0.5rem;
		background-color: var(--shade-80);
		border-radius: 0.25rem;
		font-weight: 600;
	}

	a {
		display: inline;
	}

	@media (max-width: 700px) {
		@include small-headings;

		.author {
			font-size: 1rem;
		}
	}

	iframe {
		width: 100%;
		height: auto;
		aspect-ratio: 8.5 / 11;
		border-radius: 0.5rem;
	}
</style>
