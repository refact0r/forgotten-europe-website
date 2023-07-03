export function formatDate(date) {
	return new Date(date).toLocaleString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	})
}
