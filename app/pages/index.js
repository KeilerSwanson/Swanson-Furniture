import NavTop from '../components/NavTop'
import HomeMosaic from '../components/HomeMosaic'
// import GalleryLink from '../components/GalleryLink'
import styles from '../styles/HomePage.module.scss'

export default function Home() {

	return (
		<div className={styles.homePage}>
			<NavTop />
			<HomeMosaic />
			{/* <GalleryLink /> */}
		</div>
	)
}