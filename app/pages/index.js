import { useEffect } from 'react'
import Head from 'next/head'
import NavTop from '../components/NavTop'
import Image from 'next/image'
import ansleyLiving from '../public/ansley-living-2.jpg'
import ansleyKitchen5 from '../public/ansley-kitchen-5.jpg'
import ansleyKitchen1 from '../public/ansley-kitchen-1.jpg'
import blur from '../public/blur.png'
import styles from '../styles/index.module.scss'
// import effects from '../styles/Effects.module.scss'

export default function Home() {

	return (
		<div className={styles.home}>
			<Head>
        <title>Swanson Furniture</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="Fine custom furniture and living spaces." />
				<link rel='icon' href='/favicon.ico' />
      </Head>
			<NavTop />
			<div className={styles.mosaic}>
				<div className={styles.image}>
					<Image 
						src={ansleyLiving} 
						alt=''
						layout='fill'
						objectFit='cover'
						priority	
						placeholder='blur'
						blurDataURL={blur}
					/>
				</div>
				<div className={styles.image}>
					<Image 
						src={ansleyKitchen5} 
						alt=''
						layout='fill'
						objectFit='cover'
						priority	
						placeholder='blur'
						blurDataURL={blur}
					/>
				</div>
				<div className={styles.image}>
					<Image 
						src={ansleyKitchen1} 
						alt=''
						layout='fill'
						objectFit='cover'
						priority	
						placeholder='blur'
						blurDataURL={blur}
					/>
				</div>
			</div>
		</div>
	)
}