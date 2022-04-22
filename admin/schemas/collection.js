export default {
	name: 'collection',
	title: 'Collection',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [{type: 'image'}]
		}
	]
}