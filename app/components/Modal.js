import Image from 'next/image'
import styles from '../styles/Modal.module.scss'

export default function Modal({ url = '/blur.png', closeModal }) {
	const modalClass = url ? styles.modalOpen : styles.modal

	return (
		<div className={modalClass} onClick={closeModal}>
			<nav className={styles.nav}>
				<h1 className={styles.dummyLogo}>Swanson Furniture</h1>
				<button className={styles.close} aria-label='Close image modal'>
					<div className={styles.bar1} />
					<div className={styles.bar2} />
				</button>
			</nav>	
			{
				<div className={styles.image}>
					{
						url ? 
						<Image
							src={url}
							layout='fill'
							objectFit='contain'
							priority
							placeholder='blur'
							blurDataURL='/blur.png'
						/> :
						null
					}
				</div>
			}
		</div>
	)
}