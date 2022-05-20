import Image from 'next/image'
import { memo } from 'react'
import { urlFor } from '../lib/utils'
import styles from '../styles/CategoryImage.module.scss'


function CategoryImage({ image }) {

	return (
		<div className={styles.image} data-url={`${urlFor(image)}`}>
			<Image 
				src={`${urlFor(image)}`} 
				objectFit='cover'
				width={400}
				height={400}
				placeholder='blur'
				blurDataURL='/blur.png'
			/>
		</div>
	)
}

export default memo(CategoryImage)