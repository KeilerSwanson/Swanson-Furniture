import styles from '../styles/LoadingSpinner.module.scss'

export default function LoadingSpinner() {
	return (
		<div className={styles.spinner}>
			<span className={styles.dot1}></span>
			<span className={styles.dot2}></span>
			<span className={styles.dot3}></span>
		</div>
	)
}