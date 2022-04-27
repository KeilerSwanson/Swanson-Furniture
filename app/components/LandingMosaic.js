import Image from 'next/image'
import ansleyLiving from '../public/ansley-living-2.jpg'
import ansleyKitchen5 from '../public/ansley-kitchen-5.jpg'
import ansleyKitchen1 from '../public/ansley-kitchen-1.jpg'
import styles from '../styles/LandingMosaic.module.scss'

export default function LandingMosaic() {
	return (
		// <div className={styles.wrapper}>
			<div className={styles.mosaic}>
				<div className={styles.image}>
					<Image 
						src={ansleyLiving} 
						layout='fill'
						objectFit='cover'
						priority	
					/>
				</div>
				<div className={styles.image}>
					<Image 
						src={ansleyKitchen5} 
						layout='fill'
						objectFit='cover'
						priority	
					/>
				</div>
				<div className={styles.image}>
					<Image 
						src={ansleyKitchen1} 
						layout='fill'
						objectFit='cover'
						priority	
					/>
				</div>
			{/* </div> */}
		</div>
	)
}