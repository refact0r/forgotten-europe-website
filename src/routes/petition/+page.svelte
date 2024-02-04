<script>
	import PageHead from '$lib/components/PageHead.svelte'
	import PictureSources from '$lib/components/PictureSources.svelte'
	import liam from '$lib/images/liam.jpg?w=800;400'
</script>

<PageHead
	title="Petition"
	description="Petition to Washington State Schools on The Importance of Central-Eastern European Studies"
/>

<div class="content">
	<h1>Petition</h1>

	<section>
		<p>
			<b>
				Petition to Washington State Schools on the importance of Central-Eastern European
				studies.
			</b>
		</p>

		<p>
			From time immemorial, the peoples, cultures, societies, and history of Central-Eastern
			Europe have had a monumental impact on human history. The region has endured two world
			wars, brutal crimes against humanity, Soviet subjugation, and more recently, an ongoing
			war in Ukraine. Each development has had implications and relevant lessons for the
			global community. Mainstream American curricula in primary through secondary educational
			institutions frequently overlooks Central-Eastern European history. The memories,
			stories, and knowledge of this important past have gradually become forgotten as a
			result.
		</p>

		<p>
			Signees of this petition recognize the important role of Central-Eastern European
			history in American educational institutions. Especially since the eruption of war in
			Ukraine, understanding this region’s history has become important and relevant to global
			developments. We ask schools to adopt lesson plans on important topics of
			Central-Eastern European history. With your help, we will redefine the marginalized role
			the region holds in today’s global awareness.
		</p>
	</section>

	<a class="button" href="https://forms.gle/bsQpvj2kDGX6Ahsx6">
		Sign the Petition &nbsp;<i class="fa-solid fa-arrow-up-right-from-square" />
	</a>
</div>

<style lang="scss">
	.content {
		padding: 0rem 2rem 4rem 2rem;
	}

	section {
		max-width: 55rem;
		margin: auto;
		margin-bottom: 3rem;

		text-align: left;
	}

	h1 {
		text-align: center;
	}

	.button {
		margin: auto;
		display: block;
		width: fit-content;
		font-size: 1.1rem;
		padding: 0.8rem 1.1rem;
	}
</style>
