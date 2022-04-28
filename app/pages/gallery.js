import Image from 'next/image'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
import NavTop from '../components/NavTop'
import Gallery from '../components/Gallery'
import Modal from '../components/Modal'
import styles from '../styles/GalleryPage.module.scss'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function GalleryPage({ collections }) {
	const images = collections.map(collection => {
		return (
			collection.images.map(image => {
				const url = urlFor(image)
				console.log({url})
				return (
					<div className={styles.image}>
						<Image 
							src={`${urlFor(image)}`}
							alt='' 
							// layout='fill'
							objectFit='cover'
							width={400}
							height={400}
						/>
					</div>
				)
			})
		)
	})

	return (
		<div className={styles.galleryPage}>
			<NavTop />
			{/* <Gallery tiles={images} /> */}
			<div className={styles.gallery}>
				{images}
			</div>
			<Modal />
		</div>
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