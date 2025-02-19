<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import PictureSources from '$lib/components/PictureSources.svelte'
	import importImage from '$lib/js/images.js'
	// import liam from '$lib/images/liam2.jpg?w=800;400'

	export let data
</script>

<PageHead
	title="About"
	description="Our mission is to enlighten the world with the stories, traditions, and history of Central-Eastern Europe which are omitted from mainstream education."
/>

<div class="content">
	<section>
		<h1>About Us</h1>
		<p>
			Our mission is to enlighten the world with the stories, traditions, and history of
			Central-Eastern Europe which are omitted from mainstream education. Through personal
			interviews and activism for secondary school curriculums, we intend to redefine the
			marginalized role the region holds in today's global awareness. With your help, we can
			overcome the barriers of Western-centrism and bring equal representation in learning and
			discussion.
		</p>
	</section>

	<section>
		<h2>The Importance of Central-Eastern Europe</h2>
		<p>
			From time immemorial, the people, cultures, and societies of Central-Eastern Europe have
			had a monumental impact on the course of human history. In the last century alone, the
			region has overcome two world wars, Soviet subjugation, and countless internal
			conflicts. Yet it is often overlooked in mainstream curricula despite its current
			strength of over 300 million. The international ramifications of Russia's recent
			invasion in Ukraine makes it only more crucial to recognize and recount Central-Eastern
			Europe's often forgotten stories.
		</p>
	</section>

	<!-- <section>
		<h2>Message from the Founder</h2>
		<div class="columns">
			<p>
				I started The Forgotten Europe Project over the summer of 2022 at the age of 15, six
				months after Russia's illegal invasion of Ukraine. As a Polish American, I
				understood what such a conflict implied for myself and my family, located only a
				border away from Russian missile strikes and shelling. Yet in erupting thousands of
				miles away from the United States, we Americans have begun to forget that today,
				Ukrainian soldiers continue to fight on against oppression and imperialism. This is
				not the first time that Central-eastern Europe was disregarded. Decades of Soviet
				repression during the Cold War was masked by an Iron Curtain. Even after this
				curtain fell, the memories of the suffering, brutality, and genocide this region
				endured were forgotten by the world. I dedicate this project to my ancestors, and
				the many millions Central-Eastern Europeans whose stories were forgotten. May your
				voices now be heard.
			</p>
			<div class="column1">
				<picture class="liam-pic">
					<PictureSources src={liam} />
					<img
						class="liam-img"
						src={liam.img.src}
						width="400"
						height="400"
						type="image/jpeg"
						alt="Founder and President Liam Krol"
					/>
				</picture>
				<div class="name">Liam Krol</div>
				<div class="role">Founder and President</div>
			</div>
		</div>
	</section> -->

	<section>
		<h2>Project Leadership</h2>
		<div class="grid">
			{#each data.posts as post}
				<div class="volunteer">
					{#if post.photo}
						{#await importImage(post.photo) then image}
							<picture class="pic">
								<PictureSources src={image} sizes="10vw" />
								<img
									class="image"
									src={image.img.src}
									width="104"
									height="104"
									alt={post.title}
								/>
							</picture>
						{/await}
					{:else}
						<div class="placeholder">
							<div class="head" />
							<div class="body" />
						</div>
					{/if}
					<div class="name">{post.title}</div>
					{#if post.role}
						<div class="role">{post.role}</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<section class="website">
		<p>
			Website by <b>Yifan</b>
			<br />
			<a href="https://github.com/refact0r/forgotten-europe-website">
				View the source code on Github&nbsp;
				<i class="fa-solid fa-arrow-right" />
			</a>
		</p>
	</section>
</div>

<style lang="scss">
	.content {
		padding: 0rem 2rem 1rem 2rem;
	}

	section {
		max-width: 50rem;
		margin: auto;
		margin-bottom: 4rem;
	}

	.volunteer {
		display: flex;
		flex-direction: column;
	}

	.image {
		width: 100%;
		height: auto;
		aspect-ratio: 1/1;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	.name {
		font-weight: 700;
		font-size: 1.2rem;
		margin-top: 0.75rem;
		text-align: center;
	}

	.role {
		font-style: italic;
		margin-top: 0.25rem;
		text-align: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		gap: 1.5rem 1rem;
	}

	.placeholder {
		width: 100%;
		aspect-ratio: 1/1;
		background-color: var(--shade-70);
		border-radius: 0.5rem;
		position: relative;
	}

	.head {
		width: 40%;
		height: 40%;
		background-color: #d0d0d0;
		border-radius: 50%;
		position: absolute;
		top: 15%;
		left: 50%;
		transform: translateX(-50%);
	}

	.body {
		width: 70%;
		height: 40%;
		background-color: #d0d0d0;
		border-radius: 50% 50% 0 0;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	.website {
		text-align: center;
	}

	@media (max-width: 900px) {
	}

	@media (max-width: 700px) {
		h1 {
			font-size: 1.6rem;
		}
		h2 {
			font-size: 1.3rem;
		}
		.name {
			font-size: 1rem;
		}
	}
</style>
