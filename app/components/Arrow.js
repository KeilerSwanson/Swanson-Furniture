import styles from '../styles/Arrow.module.scss'

export default function Arrow({ left = false, handler }) {
	const arrowClass = left ? styles.arrowLeft : styles.arrow

	return (
		<div 
			className={styles.arrowWrapper}
			onClick={handler}	
		>
			<div className={arrowClass} />
		</div>
	)
}