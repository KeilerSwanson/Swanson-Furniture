import Image from 'next/image'
import dadSmile from '../public/dad-smile.jpeg'
import dadWork from '../public/dad-working.jpeg'
import styles from '../styles/AboutMosaic.module.scss'

export default function AboutMosaic() {
	return (
		<div className={styles.mosaic}>
			<div className={styles.image}>
				<Image 
					src={dadWork}
					alt='Scott Swanson hand-planing a table'	
					layout='fill'
					objectFit='cover'
					priority
				/>
			</div>
			<div className={styles.image}>
				<Image 
					src={dadSmile}
					alt='Scott Swanson smiling'	
					layout='fill'
					objectFit='cover'
					priority
				/>
			</div>
			<p className={styles.copy}>
				
			</p>
		</div>
	)
}