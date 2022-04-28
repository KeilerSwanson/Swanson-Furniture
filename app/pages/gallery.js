import Image from 'next/image'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'
// import { formatCatTitle } from '../lib/utils'
import NavTop from '../components/NavTop'
import Gallery from '../components/Gallery'
import Modal from '../components/Modal'
import styles from '../styles/GalleryPage.module.scss'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function GalleryPage({ cabinetry, tables, stairs, beds, doors }) {

	const categories = [cabinetry, tables, stairs, beds, doors].map(category => {

		return (
			<div className={styles.category}>
				<h1 className={styles.title}>{category.title}</h1>
				<div className={styles.images}>
					{
						category.collections.map(collection => {
							return (
								collection.images.map(image => {
									return (
										<div className={styles.image}>
											<Image 
												src={`${urlFor(image)}`}
												alt='' 
												objectFit='cover'
												width={400}
												height={400}
											/>
										</div>
									)
								})
							)
						})
					}
				</div>	
			</div>
		)
	})

	return (
		<div className={styles.galleryPage}>
			<NavTop />
			<div className={styles.gallery}>
				{categories}
			</div>
			<Modal />
		</div>
	)
}

export async function getStaticProps() {
	const cabinetry = await client.fetch(
		`*[_type == 'collection' && category == 'cabinetry-shelving']{ images }`
	)
	const tables = await client.fetch(
		`*[_type == 'collection' && category == 'tables-chairs']{ images }`
	)
	const stairs = await client.fetch(
		`*[_type == 'collection' && category == 'stairs-rails']{ images }`
	)
	const beds = await client.fetch(
		`*[_type == 'collection' && category == 'beds']{ images }`
	)
	const doors = await client.fetch(
		`*[_type == 'collection' && category == 'doors']{ images }`
	)
	

  return {
    props: {
			cabinetry: {
				title: 'Cabinetry & Shelving',
				collections: cabinetry
			},
			tables: {
				title: 'Tables & Chairs',
				collections: tables
			},
			stairs: {
				title: 'Stairs & Rails',
				collections: stairs
			},
			beds: {
				title: 'Beds',
				collections: beds
			},
			doors: {
				title: 'Doors',
				collections: doors
			},
		}
  }
}