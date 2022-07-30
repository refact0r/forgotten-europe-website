<!-- <script context="module">
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
</script> -->
<script>
	import PageHead from '$lib/components/PageHead.svelte'
	// import Article from '$lib/components/Article.svelte'
	// import ArticleTitle from '$lib/components/ArticleTitle.svelte'
	// import ArticleMeta from '$lib/components/ArticleMeta.svelte'
	// import ArticleDescription from '$lib/components/ArticleDescription.svelte'

	// export let posts
</script>

<PageHead title="Home" description="Description" />

<div class="content">
	<div class="banner-box">
		<img class="banner" src="site_banner.png" />
		<img class="logo" src="logo-filled.png" />
	</div>

	<h3>Preserving the stories, traditions, and history of Central-Eastern Europe.</h3>

	<br />

	<h2>Our Mission</h2>
	<p>
		Today, there is a lack of global awareness encompassing the societies and history of
		Central-Eastern Europe. Even as conflict in Ukraine continues, Western education maintains
		cold-war curriculum standards that exclude Central-Eastern Europe from studies. Our mission
		is to enlighten the world with the stories, traditions, and history of the region that
		current education omits. Through personal interviews and activism directed at secondary
		school curriculums, we intend to redefine the marginalized role Central-Eastern Europe holds
		today. With your help, we can overcome the barriers of Western-Eurocentrism and institute
		education equality and representation.
	</p>
	<!-- <p>
		In the onset of the 2022 Ukraine conflict, our non-profit discovered the lack of global
		awareness surrounding Central-Eastern Europe. Our mission is to enlighten the world with the
		stories, traditions, and history of the region that current adolescent education omits.
		Through personal interviews and activism directed at secondary school curriculums, we intend
		to redefine the marginalized role central-eastern Europe holds today. With your help, we can
		overcome the barriers of Western-Eurocentrism and achieve greater education equality and
		representation.
	</p> -->

	<br />
	<br />

	<h2>Highlight of the Month</h2>

	<h3>Lech Wałęsa</h3>

	<img
		class="highlight-img"
		src="https://cdn.britannica.com/75/205275-050-5C0A257C/Lech-Walesa-2006.jpg"
	/>

	<p>
		Lech Wałęsa, (born September 29, 1943, Popowo, near Włocławek, Poland), labour activist who
		helped form and led (1980–90) communist Poland’s first independent trade union, Solidarity.
		The charismatic leader of millions of Polish workers, he went on to become the president of
		Poland (1990–95). He received the Nobel Prize for Peace in 1983.
		<br />
		<a href="https://www.britannica.com/biography/Lech-Walesa">Read more</a>
	</p>

	<p>
		When Lech Walesa received the Nobel Peace Prize for his campaign for freedom of organization
		in Poland, he had just been released from internment. The Communist party had tried in vain
		to break him, the symbol of the revolt against the party's monopoly on power.
		<br />
		<a href="https://www.nobelprize.org/prizes/peace/1983/walesa/facts/">Read more</a>
	</p>
	<!-- <div class="row">
		<div class="column">
			<h2>Preservation</h2>
			<p>TEXT HERE</p>
		</div>
		<div class="column">
			<h2>Awareness</h2>
			<p>TEXT HERE</p>
		</div>
	</div> -->
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
		padding-bottom: 40px;
	}

	.banner-box {
		position: relative;
		width: 100%;
		height: auto;
	}

	.banner {
		width: 100%;
	}

	.logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 20%;
	}

	p {
		margin: 0 20%;
	}

	.row {
		display: flex;
		width: 100%;
	}

	.column {
		text-align: center;
		width: 100%;
	}

	.highlight-img {
		width: 200px;
	}
</style>
