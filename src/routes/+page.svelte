<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import site_banner from '$lib/images/site_banner.png?avif';
	import site_banner_fallback from '$lib/images/site_banner.png';
	import logo_filled from '$lib/images/logo-filled.png?avif';
	import logo_filled_fallback from '$lib/images/logo-filled.png';
</script>

<PageHead title="Home" description="Home page." />

<div class="content">
	<div class="banner-box">
		<picture>
			<source src={site_banner} type="image/avif" />
			<img class="banner" src={site_banner_fallback} type="image/png" alt="Site banner" />
		</picture>
		<picture>
			<source src={logo_filled} type="image/avif" />
			<img class="logo" src={logo_filled_fallback} type="image/png" alt="Logo" />
		</picture>
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

	<h2>The Importance of Central-Eastern Europe</h2>
	<p>
		From time immemorable, the people, cultures, and states of Central-Eastern Europe have had a
		monumental impact on the development towards the present world today. With a total
		population of over 300 million people, the region has monumental influence over regional and
		global political, economic, and social developments. In the last century alone, the region
		has experienced some of the most historically significant events in history. The
		international ramifications of Russia’s war against Ukraine exemplifies a modern relevance
		to the global community today.
	</p>

	<br />
	<br />

	<h2>Highlight of the Month</h2>

	<h3>The War in Ukraine</h3>

	<img
		class="highlight-img"
		src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ieHm6cwp.OCc/v1/-1x-1.jpg"
		alt="Ukraine Faces Rolling Blackouts After Russian Attacks on Power Stations"
	/>

	<br />
	<br />

	<p>
		More than 6m households in Ukraine are still affected by power cuts, two days after targeted
		Russian strikes on the country’s energy infrastructure, President Volodymyr Zelenskiy said.
		“As of this evening, blackouts continue in most regions [of Ukraine] and in Kyiv. In total,
		more than 6 million subscribers,” Zelensky said in his nightly address on Friday. The number
		of affected households had reduced “by half” since Wednesday. He said about 600,000 people
		were experiencing power cuts in Kyiv, the capital, with the Odessa, Lviv, Vinnytsia and
		Dnipropetrovsk regions also among the worst affected as temperatures approach freezing.
	</p>

	<br />

	<p>
		The European Union will step up efforts to provide Ukraine with support to restore and
		maintain power and heating, the head of the European Commission said on Friday. Ursula von
		der Leyen said in a statement after a phone call with Volodymyr Zelenskiy that the EU
		executive arm was preparing the delivery to Ukraine large donations from EU countries and
		from the EC’s reserves.
		<br />
		(Source: The Guardian)
		<br />
		<a
			href="https://www.theguardian.com/world/2022/nov/26/russia-ukraine-war-at-a-glance-what-we-know-on-day-276-of-the-invasion"
		>
			Read more
		</a>
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

	.highlight-img {
		width: 500px;
	}

	/* .row {
		display: flex;
		width: 100%;
	}

	.column {
		text-align: center;
		width: 100%;
	} */
</style>
