import NavTop from '../components/NavTop'
import styles from '../styles/error.module.scss'

export default function Custom404() {

	return (
		<div className={styles.error}>
			<NavTop />
			<h1 className={styles.errorMessage}>404 - Page Not Found</h1>
		</div>
	)
}