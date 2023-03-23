<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import banner1 from '$lib/images/banner1.webp?avif&aspect=4:3&w=1000'
	import banner1_fallback from '$lib/images/banner1.webp?aspect=4:3&w=1000'
	import banner2 from '$lib/images/banner2.jpeg?avif&aspect=4:3&w=1000'
	import banner2_fallback from '$lib/images/banner2.jpeg?aspect=4:3&w=1000'
	// import banner3 from '$lib/images/banner3.jpg?avif&aspect=4:3&w=1000&quality=75'
	// import banner3_fallback from '$lib/images/banner3.jpg?aspect=4:3&w=1000'
	// import banner4 from '$lib/images/banner4.jpg?avif&aspect=4:3&w=1000&quality=75'
	// import banner4_fallback from '$lib/images/banner4.jpg?aspect=4:3&w=1000'

	import banner3 from '$lib/images/banner3.jpg?avif&aspect=4:3&w=1000&quality=75'
	import banner3_fallback from '$lib/images/banner3.jpg?aspect=3:2&w=1000'
	import banner4 from '$lib/images/banner4.jpg?avif&aspect=4:3&w=1000&quality=75'
	import banner4_fallback from '$lib/images/banner4.jpg?aspect=3:2&w=1000'

	import ukraine from '$lib/images/ukraine-protest.jpg?avif&quality=75'
	import ukraine_fallback from '$lib/images/ukraine-protest.jpg'

	import highlight from '$lib/images/highlight.jpg?avif&w=2000'
	import highlight_fallback from '$lib/images/highlight.jpg?w=2000'
	import logo from '$lib/images/logo-2x-cropped.png?avif&w=1000'
	import logo_fallback from '$lib/images/logo-2x-cropped.png?webp&w=1000'
</script>

<PageHead title="" description="Home page of The Forgotten Europe Project website" />

<div class="content">
	<div class="images">
		<picture class="picture-2">
			<source srcset={banner3} type="image/avif" />
			<img class="image-2" src={ukraine_fallback} type="image/webp" alt="Site banner" />
		</picture>

		<picture class="picture-1">
			<source srcset={ukraine} type="image/avif" />
			<img class="image-1" src={ukraine_fallback} type="image/webp" alt="Site banner" />
		</picture>

		<picture class="picture-3">
			<source srcset={banner4} type="image/avif" />
			<img class="image-3" src={ukraine_fallback} type="image/webp" alt="Site banner" />
		</picture>
	</div>

	<h1>Preserving the stories, traditions, and history of Central-Eastern Europe.</h1>

	<br />
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

	<h2>Highlight of the Month</h2>

	<h3>The War in Ukraine</h3>

	<picture>
		<source srcset={highlight} type="image/avif" />
		<img
			class="highlight-img"
			src={highlight_fallback}
			type="image/jpeg"
			alt="Ukraine Faces Rolling Blackouts After Russian Attacks on Power Stations"
		/>
	</picture>

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
</div>

<style lang="scss">
	.content {
		padding: $h 0;
		text-align: center;
		position: relative;
	}

	.images {
		display: flex;
		justify-content: center;
		gap: $l;
	}

	.picture-1 {
		width: 40%;
	}

	.image-1 {
		width: 100%;
		border-radius: $l;
	}

	.picture-2,
	.picture-3 {
		width: 25%;
	}

	.image-2,
	.image-3 {
		width: 100%;
		border-radius: $l;
		margin-top: 25%;
	}

	h1 {
		width: fit-content;
		margin-left: auto;
		margin-right: auto;

		// &::after {
		// 	content: '';
		// 	display: block;
		// 	margin-top: 2px;
		// 	height: $t;
		// 	background-color: var(--color-text-2);
		// }
	}

	.highlight-img {
		width: 6 * $g;
	}

	p {
		width: 8 * $g;
		margin: auto;
	}
</style>
