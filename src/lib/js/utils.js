export function formatDate(date) {
	return new Date(date).toLocaleString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	})
}

export function nameFromPath(path) {
	return path.split('/').slice(-1)[0].split('.')[0]
}
