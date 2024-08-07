<svelte:head>
	<meta name="robots" content="noindex" />
	<script defer src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
	<script>
		CMS.registerEditorComponent({
			// Internal id of the component
			id: 'custom-image',
			// Visible label
			label: 'Custom Image',
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
				return `<Image src="${data['custom-image']}" caption="${data.caption}" />`
			},
			// Preview output for this component
			toPreview: function (data) {
				return `
<figure>
  <img src="${data['custom-image']}" alt="${data.caption}" />
  <figcaption>${data.caption}</figcaption>
</figure>
`
			}
		})
	</script>
</svelte:head>

<style>
	:global(div#svelte) {
		display: none;
	}
</style>
