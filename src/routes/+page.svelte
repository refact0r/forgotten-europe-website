<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import banner3 from '$lib/images/banner3.jpg?format=avif&aspect=4:3&w=1000&quality=75'
	import banner3_fallback from '$lib/images/banner3.jpg?aspect=4:3&w=1000'
	import banner4 from '$lib/images/banner4.jpg?format=avif&aspect=4:3&w=1000&quality=75'
	import banner4_fallback from '$lib/images/banner4.jpg?aspect=4:3&w=1000'
	import ukraine from '$lib/images/ukraine-protest.jpg?format=avif&w=1500&quality=75'
	import ukraine_fallback from '$lib/images/ukraine-protest.jpg'

	import { onMount } from 'svelte'

	onMount(() => {
		instgrm.Embeds.process()
	})
</script>

<PageHead title="" description="Home page of The Forgotten Europe Project website" />

<div class="content">
	<div class="images">
		<picture class="picture-2">
			<source srcset={banner3} type="image/avif" />
			<img
				class="image-2"
				src={banner3_fallback}
				width="400"
				height="300"
				type="image/jpeg"
				alt="Site banner"
			/>
		</picture>

		<div class="images-middle">
			<picture class="picture-1">
				<source srcset={ukraine} type="image/avif" />
				<img
					class="image-1"
					src={ukraine_fallback}
					width="644"
					height="483"
					type="image/jpeg"
					alt="Site banner"
				/>
			</picture>
		</div>

		<picture class="picture-3">
			<source srcset={banner4} type="image/avif" />
			<img
				class="image-3"
				src={banner4_fallback}
				width="400"
				height="300"
				type="image/jpeg"
				alt="Site banner"
			/>
		</picture>
	</div>
	<h1>Preserving the stories, traditions, and history of Central-Eastern Europe.</h1>

	<p>
		Our mission is to enlighten the world with the stories, traditions, and history of
		Central-Eastern Europe which are omitted from mainstream education. Through personal
		interviews and activism for secondary school curriculums, we intend to redefine the
		marginalized role the region holds in today's global awareness. With your help, we can
		overcome the barriers of Western-centrism and bring equal representation in learning and
		discussion.
	</p>

	<br />
	<br />

	<h2>The Importance of Central-Eastern Europe</h2>
	<p>
		From time immemorial, the people, cultures, and societies of Central-Eastern Europe have had
		a monumental impact on the course of human history. In the last century alone, the region
		has overcome two world wars, Soviet subjugation, and countless internal conflicts. Yet it is
		often overlooked in mainstream curricula despite its current strength of over 300 million.
		The international ramifications of Russia's recent invasion in Ukraine makes it only more
		crucial to recognize and recount Central-Eastern Europe's often forgotten stories.
	</p>

	<br />
	<br />

	<div class="instagram">
		<blockquote
			class="instagram-media"
			data-instgrm-permalink="https://www.instagram.com/forgotteneuropeproject/?utm_source=ig_embed&amp;utm_campaign=loading"
			data-instgrm-version="14"
			style="background:#FFF; border:none; border-radius:0px; box-shadow:none; margin:0 0 12px; min-width:326px; padding:0px; width:100%;"
		>
			<a
				href="https://www.instagram.com/forgotteneuropeproject/?utm_source=ig_embed&amp;utm_campaign=loading"
				class="insta-outer"
			>
				<div class="insta-top">
					<div class="insta-pfp" />
				</div>
				<div class="insta-middle">
					<div class="insta-logo">
						<svg
							width="52px"
							height="52px"
							viewBox="0 0 60 60"
							version="1.1"
							xmlns="https://www.w3.org/2000/svg"
							xmlns:xlink="https://www.w3.org/1999/xlink"
						>
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g
									transform="translate(-511.000000, -20.000000)"
									fill="currentColor"
								>
									<g>
										<path
											d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"
										/>
									</g>
								</g>
							</g>
						</svg>
					</div>
					<div>Loading posts...</div>
					<div>Click to view full profile on Instagram</div>
				</div>
				<div class="insta-bottom">
					<div class="insta-button" />
				</div>
			</a>
		</blockquote>
	</div>
</div>

<style lang="scss">
	.content {
		padding: 3rem 1rem;
		text-align: center;
	}

	.images {
		display: inline-flex;
		justify-content: center;
		gap: 2%;
		max-width: 96rem;
	}

	.images-middle {
		display: flex;
		flex-direction: column;
		// max-width: 5.5 * $g;
		width: 42%;
	}

	.image-1 {
		width: 100%;
		height: auto;
		border-radius: 1rem;
	}

	.picture-2,
	.picture-3 {
		// max-width: 3.5 * $g;
		width: 26%;
	}

	.image-2,
	.image-3 {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		margin-top: 23%;
	}

	h1 {
		width: fit-content;
		margin-left: auto;
		margin-right: auto;
		font-size: 2em;
	}

	p {
		max-width: 56rem;
		margin: auto;
	}

	.instagram {
		max-width: 56rem;
		margin: auto;
	}

	.insta-outer {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: var(--mid-dark);
		font-weight: 500;
	}

	.insta-top {
		height: 136px;
	}
	.insta-middle {
		aspect-ratio: 3/2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 16px;
	}
	.insta-logo {
		line-height: 0;
	}
	.insta-bottom {
		height: 64px;
	}

	@media (max-width: 545px) {
		.insta-top {
			height: 106px;
		}
		.insta-bottom {
			height: 48px;
		}
	}

	@media (max-width: 700px) {
		.images-middle {
			width: 95%;
		}

		.picture-2,
		.picture-3 {
			display: none;
		}
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 1.5rem;
			margin: 2rem auto;
		}

		h2 {
			font-size: 1.2rem;
		}
	}
</style>
