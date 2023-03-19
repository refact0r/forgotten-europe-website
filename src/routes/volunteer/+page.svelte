<script>
	import PageHead from '$lib/components/PageHead.svelte'
</script>

<PageHead title="Curriculum" description="Description" />

<div class="content">
	<h1>Volunteer</h1>

	<section class="signup">
		<div>
			We are always looking for High School students willing to contribute to the Project’s
			mission statement and goals. If interested in volunteer involvement, please complete the
			sign-up form below.
		</div>

		<br />

		<a class="button" href="https://forms.gle/G1dM2FCGaQ52tKBk9">
			Sign Up to Volunteer &nbsp;<i class="fa-solid fa-arrow-right" />
		</a>
	</section>
</div>

<style lang="scss">
	h1 {
		margin-top: $space-l;
		text-align: center;
	}
	.signup {
		margin: 40px 400px 100px 400px;
		text-align: center;
	}
</style>
