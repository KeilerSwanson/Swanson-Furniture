import Head from 'next/head'
import NavTop from '../components/NavTop'
import AboutMosaic from '../components/AboutMosaic'
import styles from '../styles/AboutPage.module.scss'

export default function AboutPage() {
	return (
		<div className={styles.aboutPage} >
			<Head>
        <title>About | Swanson Furniture</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="Fine custom furniture and interiors." />
				<link rel='icon' href='/favicon.ico' />
      </Head>
			<NavTop />
			<AboutMosaic />
		</div>
	)
}