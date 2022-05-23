import Head from 'next/head'
import Image from 'next/image'
import NavTop from '../components/NavTop'
import styles from '../styles/index.module.scss'

export default function Home() {

	return (
		<div className={styles.home}>
			<Head>
        <title>Swanson Furniture</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="Fine custom furniture and interiors." />
				<link rel='icon' href='/favicon.ico' />
      </Head>
			<NavTop />
			<div className={styles.mosaic}>
				<div className={styles.image}>
					<Image 
						src='/ansley-living-2.jpg'
						alt='Modern walnut kitchen cabinetry'
						layout='fill'
						objectFit='cover'
						priority	
						placeholder='blur'
						blurDataURL='/blur.png'
					/>
				</div>
				<div className={styles.image}>
					<Image 
						src='/ansley-kitchen-5.jpg'
						alt='Modern walnut kitchen cabinetry'
						layout='fill'
						objectFit='cover'	
						priority
						placeholder='blur'
						blurDataURL='/blur.png'
					/>
				</div>
				<div className={styles.image}>
					<Image 
						src='/ansley-kitchen-1.jpg'
						alt='Modern walnut kitchen cabinetry'
						layout='fill'
						objectFit='cover'	
						priority
						placeholder='blur'
						blurDataURL='/blur.png'
					/>
				</div>
			</div>
		</div>
	)
}