<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		// Use a `limit` querystring parameter to fetch a limited number of posts
		// e.g. fetch('posts.json?limit=5') for 5 most recent posts
		const posts = await fetch('/posts.json').then((res) => res.json())

		return {
			props: {
				posts
			}
		}
	}
</script>

<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import Article from '$lib/components/Article.svelte'
	import ArticleTitle from '$lib/components/ArticleTitle.svelte'
	import ArticleMeta from '$lib/components/ArticleMeta.svelte'
	import ArticleDescription from '$lib/components/ArticleDescription.svelte'

	export let posts
</script>

<div class="content">
	<PageHead title="Home" description="Description" />

	<div class="banner-box">
		<img class="banner" src="site_banner.png" />
		<div class="logo-box">
			<img class="logo" src="logo.png" />
		</div>
	</div>

	<br />

	<h3>Preserving the stories, traditions, and history of Central-Eastern Europe.</h3>

	<br />
	<br />

	<div class="row">
		<div class="column">
			<h2>Preservation</h2>
			<p>TEXT HERE</p>
		</div>
		<div class="column">
			<h2>Awareness</h2>
			<p>TEXT HERE</p>
		</div>
	</div>
</div>

<!-- {#each posts as { slug, title, author, description, date }}
	<Article>
		<ArticleTitle {slug} {title} />
		<ArticleMeta {author} {date} />
		<ArticleDescription {description} {slug} />
	</Article>
{/each} -->
<style>
	.content {
		text-align: center;
	}

	.banner-box {
		position: relative;
		width: 100%;
		height: auto;
	}

	.banner {
		width: 100%;
	}

	.logo-box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 17%;
		margin: 0 auto;
		background: var(--color-bg);
		border-radius: 50%;
	}

	.logo {
		width: 100%;
	}

	.row {
		display: flex;
		width: 100%;
	}

	.column {
		text-align: center;
		width: 100%;
	}
</style>
