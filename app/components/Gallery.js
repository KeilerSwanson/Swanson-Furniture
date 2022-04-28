// import Image from 'next/image'
import styles from '../styles/Gallery.module.scss'

export default function Gallery({ tiles }) {
	return (
		<div className={styles.gallery}>
			 {tiles}
		</div>
	)
}