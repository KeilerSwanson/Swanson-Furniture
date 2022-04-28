import NavTop from '../components/NavTop'
import AboutMosaic from '../components/AboutMosaic'
import styles from '../styles/AboutPage.module.scss'

export default function AboutPage() {
	return (
		<div className={styles.aboutPage} >
			<NavTop />
			<AboutMosaic />
		</div>
	)
}