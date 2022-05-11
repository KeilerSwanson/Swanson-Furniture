import Head from 'next/head'
import NavTop from '../components/NavTop'
import Image from 'next/image'
import dadSmile from '../public/dad-smile.jpeg'
import dadWork from '../public/dad-working.jpeg'
// import AboutMosaic from '../components/AboutMosaic'
import styles from '../styles/About.module.scss'

export default function AboutPage() {
	return (
		<div className={styles.about}>
			<Head>
        <title>About | Swanson Furniture</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="Fine custom furniture and interiors." />
				<link rel='icon' href='/favicon.ico' />
      </Head>
			<NavTop />
			{/* <AboutMosaic /> */}
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
		</div>
	)
}