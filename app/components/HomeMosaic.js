import Image from 'next/image'
import ansleyLiving from '../public/ansley-living-2.jpg'
import ansleyKitchen5 from '../public/ansley-kitchen-5.jpg'
import ansleyKitchen1 from '../public/ansley-kitchen-1.jpg'
import styles from '../styles/HomeMosaic.module.scss'

export default function HomeMosaic() {
	return (
		// <div className={styles.wrapper}>
			<div className={styles.mosaic}>
				<div className={styles.image}>
					<Image 
						src={ansleyLiving} 
						alt=''
						layout='fill'
						objectFit='cover'
						priority	
					/>
				</div>
				<div className={styles.image}>
					<Image 
						src={ansleyKitchen5} 
						alt=''
						layout='fill'
						objectFit='cover'
						priority	
					/>
				</div>
				<div className={styles.image}>
					<Image 
						src={ansleyKitchen1} 
						alt=''
						layout='fill'
						objectFit='cover'
						priority	
					/>
				</div>
			{/* </div> */}
		</div>
	)
}