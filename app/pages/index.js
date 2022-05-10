import Head from 'next/head'
import NavTop from '../components/NavTop'
import HomeMosaic from '../components/HomeMosaic'
// import GalleryLink from '../components/GalleryLink'
import styles from '../styles/HomePage.module.scss'

export default function Home() {

	return (
		<div className={styles.homePage}>
			<Head>
        <title>Swanson Furniture</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="Fine custom furniture and interiors." />
				<link rel='icon' href='/favicon.ico' />
      </Head>
			<NavTop />
			<HomeMosaic />
			{/* <GalleryLink /> */}
		</div>
	)
}