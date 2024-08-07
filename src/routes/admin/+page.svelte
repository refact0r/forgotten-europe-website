<script>
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

	function initCMS() {
		if (typeof window !== 'undefined' && window.CMS) {
			window.CMS.registerEditorComponent({
				// Internal id of the component
				id: 'image',
				// Visible label
				label: 'Image',
				// Fields the user need to fill out when adding an instance of the component
				fields: [
					{
						name: 'image',
						label: 'image',
						widget: 'image'
					},
					{
						name: 'caption',
						label: 'caption',
						widget: 'string'
					}
				],
				// Regex pattern to search for instances of this block in the markdown document
				pattern: /<Image\s+src="([^"]+)"\s+caption="([^"]+)"\s*\/>/,
				// Function to convert a RegExp Match object to an object with properties for each field
				fromBlock: function (match) {
					return {
						image: match[1],
						caption: match[2]
					}
				},
				// Function to convert field data to a markdown string
				toBlock: function (data) {
					return `<Image src="${data.image}" caption="${data.caption}" />`
				},
				// Preview output for this component
				toPreview: function (data) {
					return `
            <figure>
              <img src="${data.image}" alt="${data.caption}" />
              <figcaption>${data.caption}</figcaption>
            </figure>
          `
				}
			})
		} else if (typeof window !== 'undefined') {
			// If window exists but CMS is not available yet, try again after a short delay
			setTimeout(initCMS, 100)
		}
	}

	onMount(() => {
		// Only run initCMS in the browser
		if (browser) {
			initCMS()
		}
	})
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
	{#if browser}
		<script
			defer
			src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
			on:load={initCMS}
		></script>
	{/if}
</svelte:head>

<style>
	:global(div#svelte) {
		display: none;
	}
</style>
