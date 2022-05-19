import Image from 'next/image'
import blur from '../public/blur.png'
import styles from '../styles/Modal.module.scss'

export default function Modal({ url, closeModal, modalRef }) {
	const imageClass = url ? styles.image : styles.imageBlur

	return (
		<div 
			ref={modalRef}
			className={styles.modal}
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
				<div className={imageClass}>
					<Image
						src={url ? url : blur}
						// alt=''
						layout='fill'
						objectFit='contain'
						priority
						placeholder='blur'
						blurDataURL={blur}
					/>
				</div>
			}
		</div>
	)
}