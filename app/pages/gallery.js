import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { urlFor } from '../lib/utils'
import client from '../client'
import NavTop from '../components/NavTop'
import Modal from '../components/Modal'
import blur from '../public/blur.png'
import styles from '../styles/gallery.module.scss'

export default function GalleryPage({ cabinetry, tables, stairs, beds, doors }) {
	const [modalUrl, setModalUrl] = useState('')

	function openModal(target) {
		if (target.dataset.url) {
			setModalUrl(target.dataset.url)
		}
	}

	function closeModal() {

		setModalUrl('')
	}

	return (
		<div className={styles.galleryPage}>
			<Head>
        <title>Gallery | Swanson Furniture</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="Fine custom furniture and living spaces." />
				<link rel='icon' href='/favicon.ico' />
      </Head>
			<NavTop />
			<div className={styles.gallery}>
				{
					[cabinetry, tables, stairs, beds, doors].map((category, i) => {
						return (
							<div className={styles.category} key={i}>
								<h1 className={styles.title}>{category.title}</h1>
								<div className={styles.images} onClick={(e) => openModal(e.target)}>
									{
										category.collections.map(collection => {
											return (
												collection.images.map((image, j) => {
													return (
														<div 
															className={styles.image}
															data-url={`${urlFor(image)}`}	
															key={j}
														>
															<Image 
																src={`${urlFor(image)}`}
																alt='' 
																objectFit='cover'
																width={400}
																height={400}
																placeholder='blur'
																blurDataURL={blur}
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
				}
			</div>
			<Modal url={modalUrl} closeModal={closeModal} />
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