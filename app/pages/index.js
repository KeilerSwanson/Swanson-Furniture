import NavTop from '../components/NavTop'
import LandingMosaic from '../components/LandingMosaic'
import GalleryLink from '../components/GalleryLink'
import styles from '../styles/Home.module.scss'

export default function Home() {

	return (
		<div className={styles.home}>
			<NavTop />
			<LandingMosaic />
			<GalleryLink />
		</div>
	)
}