import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function Gallery({ collections }) {
	const images = collections.map(collection => {
		return (
			collection.images.map(image => {
				// const url = urlFor(image)
				return (
					<img src={urlFor(image)} alt='something' />
				)
			})
		)
	})

	return (
		<main>
			<h1>This is the gallery page.</h1>
			{images}
		</main>
	)
}

export async function getStaticProps() {
	const collections = await client.fetch(
		`*[_type == 'collection']`
	)

  return {
    props: {
			collections
		}
  }
}