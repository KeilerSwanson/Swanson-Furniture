import Head from 'next/head'
import Image from 'next/image'
import NavTop from '../components/NavTop'
import dadSmile from '../public/dad-smile.jpeg'
import dadWork from '../public/dad-working.jpeg'
import blur from '../public/blur.png'
import styles from '../styles/about.module.scss'

export default function AboutPage() {
	
	return (
		<div className={styles.about}>
			<Head>
        <title>About | Swanson Furniture</title>
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
						src={dadWork}
						alt='Scott Swanson hand-planing a table'	
						layout='fill'
						objectFit='cover'
						priority
						placeholder='blur'
						blurDataURL={blur}
					/>
				</div>
				<div className={styles.image}>
					<Image 
						src={dadSmile}
						alt='Scott Swanson smiling'	
						layout='fill'
						objectFit='cover'
						priority
						placeholder='blur'
						blurDataURL={blur}
					/>
				</div>
				<p className={styles.copy}>
					Scott Swanson is a designer and carpenter based out of Atlanta, GA. For more than 30 years, he’s been building fine furniture and living spaces for a wide range of clients. His passion for the craft and love for collaboration keep him as inspired today as when he started. 
				</p>
			</div>
		</div>
	)
}