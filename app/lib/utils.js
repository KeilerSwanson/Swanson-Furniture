function formatCatTitle(slug) {
	return slug.split('-').map(word => {
		word.forEach((char, i) => {
			return char.toUpperCase()
		})
	}).join(' & ')
}

export { formatCatTitle }