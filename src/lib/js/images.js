export default async function importImage(image) {
	// console.log(image)
	const pictures = import.meta.glob(
		'/src/content/uploads/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}'
	)

	for (const [path, src] of Object.entries(pictures)) {
		if (path.includes(image)) {
			const img = await src()
			// console.log(img)
			return img
		}
	}
}
