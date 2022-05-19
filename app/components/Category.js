import Image from 'next/image'
import blur from '../public/blur.png'
import { urlFor } from '../lib/utils'
import styles from '../styles/Category.module.scss'

export default function Category({ category, keyProp, openModal }) {
	return (
		<div className={styles.category} key={keyProp}>
			<h1 className={styles.title}>{category.title}</h1>
			<div className={styles.images} onClick={(e) => openModal(e.target)}>
				{
					category.collections.map(collection => {
						return (
							collection.images.map((image, j) => {
								return (
									<div 
										className={styles.image}
										data-url={`${urlFor(image)}`}	
										key={j}
									>
										<Image 
											src={`${urlFor(image)}`}
											// alt='' 
											objectFit='cover'
											width={400}
											height={400}
											placeholder='blur'
											blurDataURL={blur}
										/>
									</div>
								)
							})
						)
					})
				}
			</div>	
		</div>
	)
}