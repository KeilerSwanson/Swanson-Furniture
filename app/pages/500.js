import NavTop from '../components/NavTop'
import styles from '../styles/error.module.scss'

export default function Custom500() {

	return (
		<div className={styles.error}>
			<NavTop />
			<h1 className={styles.errorMessage}>500 - Server Error</h1>
		</div>
	)
}