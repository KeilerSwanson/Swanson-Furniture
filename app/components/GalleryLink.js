import Link from 'next/link'
import styles from '../styles/GalleryLink.module.scss'

export default function GalleryLink() {
	return (
		<div className={styles.galleryLink}>
			<Link href='/gallery'>
				<a className={styles.text}>Gallery</a>
			</Link>
			<div className={styles.arrow} />
		</div>
	)
}