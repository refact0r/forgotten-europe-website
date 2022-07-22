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

<PageHead title="Home" description="Description" />

<div class="banner-box">
	<img class="banner-hidden" src="site_banner.png" />
	<img class="banner" src="site_banner.png" />
	<div class="logo-box">
		<img class="logo" src="logo.png" />
	</div>
</div>

<!-- {#each posts as { slug, title, author, description, date }}
	<Article>
		<ArticleTitle {slug} {title} />
		<ArticleMeta {author} {date} />
		<ArticleDescription {description} {slug} />
	</Article>
{/each} -->

<slot />

<style>
	.banner-box {
		position: relative;
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.banner {
		position: absolute;
		width: 100%;
	}

	.banner-hidden {
		width: 100%;
		visibility: hidden;
	}

	.logo-box {
		position: absolute;
		width: 17%;
		margin: auto;
		background: var(--color-bg);
		border-radius: 50%;
	}

	.logo {
		width: 100%;
	}
</style>
