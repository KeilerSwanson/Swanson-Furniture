import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import blur from '../public/blur.png'
import ansleyKitchen from '../public/ansley-kitchen-1.jpg'
import styles from '../styles/Modal.module.scss'

export default function Modal({ open, url, closeModal }) {
	const modalRef = useRef()
	const modalClass = open ? styles.modalOpen : styles.modal

	// useEffect(() => {
	// 	if (open) {
	// 		modalRef.current.style.cssText = 'opacity: 1; visibility: visible;'
	// 	}
	// })

	return (
		<div 
			ref={modalRef}
			className={modalClass}
			onClick={() => {
				// modalRef.current.style.cssText = 'opacity: 0; visibility: hidden;'
				closeModal()
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
					src={url}
					alt=''
					// width={575}
					// height={700}
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