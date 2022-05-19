import Head from 'next/head'
import { useState, useRef } from 'react'
import client from '../client'
import NavTop from '../components/NavTop'
import Modal from '../components/Modal'
import Category from '../components/Category'
import styles from '../styles/gallery.module.scss'

export default function GalleryPage({ cabinetry, tables, stairs, beds, doors }) {
	const [modalUrl, setModalUrl] = useState('')
	const modalRef = useRef()

	function openModal(target) {
		if (target.dataset.url) {
			modalRef.current.style.cssText = 'opacity: 1; visibility: visible;'
			console.log('modal opacity to 1')
			setTimeout(() => {
				setModalUrl(target.dataset.url)
			}, 300)
		}
	}

	function closeModal() {
		modalRef.current.style.cssText = 'opacity: 0; visibility: hidden;'
		console.log('modal opacity to 0')
		setTimeout(() => {
			setModalUrl('')
		}, 300)
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
							<Category 
								category={category}	
								keyProp={i}
								openModal={openModal}
							/>
						)
					})
				}
			</div>
			<Modal url={modalUrl} closeModal={closeModal} modalRef={modalRef} />
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