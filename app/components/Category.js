import { memo } from 'react'
import CategoryImage from './CategoryImage'
import styles from '../styles/Category.module.scss'

function Category({ category, openModal }) {

	return (
		<div className={styles.category} >
			<h1 className={styles.title}>{category.title}</h1>
			<div className={styles.images} onClick={(e) => openModal(e.target)}>
				{
					category.collections.map(collection => {
						return (
							collection.images.map((image, j) => {
								return (
									<CategoryImage image={image} key={j} />
								)
							})
						)
					})
				}
			</div>	
		</div>
	)
}

export default memo(Category)