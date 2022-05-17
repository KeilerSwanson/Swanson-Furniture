import styles from '../styles/Arrow.module.scss'

export default function Arrow({ left = false, handler }) {
	const arrowClass = left ? styles.arrowLeft : styles.arrow

	return (
		<div 
			className={arrowClass}
			onClick={handler}	
		>
			<div className={styles.arrowInner} />
		</div>
	)
}