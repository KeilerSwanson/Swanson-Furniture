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
		},
		{
			name: 'category',
			title: 'Category',
			type: 'string',
			options: {
				list: [
					{title: 'Cabinetry & Shelving', value: 'cabinetry-shelving'},
					{title: 'Tables & Chairs', value: 'tables-chairs'},
					{title: 'Stairs & Rails', value: 'stairs-rails'},
					{title: 'Beds', value: 'beds'},
					{title: 'Doors', value: 'doors'},
				]
			}
		}
	]
}