// import client from '../client'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {

	return (
		<main className={styles.home}>
			<h1>This is the home page.</h1>
			<img src='/dad-working-color.jpeg' alt='Scott Swanson hand-carving a table' />
		</main>
	)
}

// export async function getStaticProps(context) {
// 	const ansleyKitchen = await client.fetch(
// 		`*[_type == 'collection']`
// 	)

//   return {
//     props: {
// 			ansleyKitchen
// 		} // will be passed to the page component as props
//   }
// }