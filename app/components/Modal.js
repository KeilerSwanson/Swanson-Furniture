import Image from 'next/image'
import styles from '../styles/Modal.module.scss'

export default function Modal({ open, url, closeModal }) {
	const modalClass = open ? styles.modalOpen : styles.modal
	console.log('url in modal: ', url)

	return (
		<div className={modalClass}>
			<div className={styles.closeWrapper}>
				<div className={styles.logo}>
					<h1 className={styles.swanson}>Swanson Furniture</h1>
					<h2 className={styles.custom}>Custom Furniture & Interiors</h2>
				</div>
				<button className={styles.close} onClick={closeModal}>
					<div className={styles.bar1} />
					<div className={styles.bar2} />
				</button>
			</div>	
			<div className={styles.image}>
				<Image
					src={url ? url : '/public/ansley-kitchen-1.jpg'}
					alt=''
					layout='fill'
					objectFit='contain'
					priority
				/>
			</div>
		</div>
	)
}