import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
// import ansleyKitchen from '../public/ansley-kitchen-1.jpg'
import blur from '../public/blur.png'
import styles from '../styles/Modal.module.scss'

export default function Modal({ open, url, closeModal }) {
	console.log('modal render')
	const modalRef = useRef()

	useEffect(() => {
		console.log('modal did mount')
		if (open) {
			modalRef.current.style.cssText = 'opacity: 1; visibility: visible;'
		}
	})

	return (
		<div 
			ref={modalRef}
			className={styles.modal}
			onClick={() => {
				console.log('close modal handler')
				modalRef.current.style.cssText = 'opacity: 0; visibility: hidden;'
				setTimeout(closeModal, 300)
			}}	
		>
			<nav className={styles.nav}>
				<h1 className={styles.dummyLogo}>Swanson Furniture</h1>
				<button className={styles.close}>
					<div className={styles.bar1} />
					<div className={styles.bar2} />
				</button>
			</nav>	
			<div className={styles.image}>
				<Image
					src={url ? url : blur}
					alt=''
					layout='fill'
					objectFit='contain'
					priority
					placeholder='blur'
					blurDataURL={blur}
				/>
			</div>
		</div>
	)
}