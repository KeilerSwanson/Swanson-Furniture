import Image from 'next/image'
import blur from '../public/blur.png'
import styles from '../styles/Modal.module.scss'

export default function Modal({ url, closeModal, modalRef }) {
	// const imageClass = url ? styles.image : styles.imageBlur
	console.log('modal render')
	const modalClass = url ? styles.modalOpen : styles.modal

	return (
		<div 
			// ref={modalRef}
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
				<div className={styles.image}>
					{
						url ? 
						<Image
							src={url}
							// alt=''
							layout='fill'
							objectFit='contain'
							priority
							placeholder='blur'
							blurDataURL={blur}
						/> :
						null
					}
					{/* <Image
						src={url}
						// alt=''
						layout='fill'
						objectFit='contain'
						priority
						placeholder='blur'
						blurDataURL={blur}
					/> */}
				</div>
			}
		</div>
	)
}