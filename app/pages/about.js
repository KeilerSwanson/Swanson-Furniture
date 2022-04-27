import NavTop from '../components/NavTop'
import AboutMosaic from '../components/AboutMosaic'
import styles from '../styles/About.module.scss'

export default function About() {
	return (
		<div className={styles.about} >
			<NavTop />
			<AboutMosaic />
		</div>
	)
}