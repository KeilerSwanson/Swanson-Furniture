import Image from 'next/image'
import blur from '../public/blur.png'
import LoadingSpinner from '../components/LoadingSpinner'
import styles from '../styles/Modal.module.scss'

export default function Modal({ url, closeModal }) {
	const modalClass = url ? styles.modalOpen : styles.modal

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
			{
				url ?
				<div className={styles.image}>
					<Image
						src={url}
						alt=''
						layout='fill'
						objectFit='contain'
						// priority
						// placeholder='blur'
						// blurDataURL={blur}
					/>
				</div> :
				<LoadingSpinner />
			}
		</div>
	)
}