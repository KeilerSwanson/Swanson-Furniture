import Image from 'next/image'
import ansleyKitchen from '../public/ansley-kitchen-1.jpg'
import styles from '../styles/Modal.module.scss'

export default function Modal({ open, url, closeModal }) {
	const modalClass = open ? styles.modalOpen : styles.modal

	return (
		<div 
			className={modalClass}
			onClick={closeModal}	
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
					src={url ? url : ansleyKitchen}
					alt=''
					layout='fill'
					objectFit='contain'
					priority
				/>
			</div>
		</div>
	)
}