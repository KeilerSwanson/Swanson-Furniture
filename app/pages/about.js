import Head from 'next/head'
import Image from 'next/image'
import NavTop from '../components/NavTop'
import styles from '../styles/about.module.scss'

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
			<div className={styles.mosaic}>
				<div className={styles.image}>
					<Image 
						src='/dad-working.jpeg'
						alt='Scott Swanson hand-planing a table'	
						layout='fill'
						objectFit='cover'
						priority
						placeholder='blur'
						blurDataURL='/blur.png'
					/>
				</div>
				<div className={styles.image}>
					<Image 
						src='/dad-smile.jpeg'
						alt='Scott Swanson smiling in his shop'	
						layout='fill'
						objectFit='cover'
						priority
						placeholder='blur'
						blurDataURL='/blur.png'
					/>
				</div>
				<p className={styles.copy}>
					Scott Swanson is a designer and carpenter specializing in fine furniture and interiors. For more than 30 years, he’s been helping clients of all kinds bring their ideas to life. His passion for the craft and love for collaboration keep him as inspired today as when he started.
				</p>
			</div>
		</div>
	)
}