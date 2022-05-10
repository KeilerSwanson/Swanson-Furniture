import Head from 'next/head'
import { useState } from 'react'
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
	const [modal, setModal] = useState({
		open: false,
		url: ''
	})

	function openModal(target) {
		setModal({
			open: true,
			url: target.dataset.url
		})
	}

	function closeModal() {
		setModal({
			open: false,
			url: modal.url
		})
	}

	const categories = [cabinetry, tables, stairs, beds, doors].map(category => {
		return (
			<div className={styles.category}>
				<h1 className={styles.title}>{category.title}</h1>
				<div 
					className={styles.images}
					onClick={(e) => openModal(e.target)}	
				>
					{
						category.collections.map(collection => {
							return (
								collection.images.map(image => {
									return (
										<div 
											className={styles.image}
											data-url={`${urlFor(image)}`}	
										>
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
			<Head>
        <title>Gallery | Swanson Furniture</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="Fine custom furniture and interiors." />
				<link rel='icon' href='/favicon.ico' />
      </Head>
			<NavTop />
			<div 
				className={styles.gallery}
				// onClick={(e) => openModal(e.target)}
			>
				{categories}
			</div>
			<Modal 
				open={modal.open}	
				url={modal.url}
				closeModal={closeModal}
			/>
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