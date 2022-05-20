import { memo } from 'react'
import styles from '../styles/Arrow.module.scss'

function Arrow({ left = false, handler }) {
	const arrowClass = left ? styles.arrowLeft : styles.arrow

	return (
		<div className={arrowClass} onClick={handler}>
			<div className={styles.arrowInner} />
		</div>
	)
}

export default memo(Arrow)