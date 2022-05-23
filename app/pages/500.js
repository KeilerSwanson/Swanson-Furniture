import NavTop from '../components/NavTop'
import styles from '../styles/error.module.scss'

export default function Custom500() {

	return (
		<div className={styles.error}>
			<Head>
        <title>500 | Swanson Furniture</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="Fine custom furniture and interiors." />
				<link rel='icon' href='/favicon.ico' />
      </Head>
			<NavTop />
			<h1 className={styles.errorMessage}>500 - Server Error</h1>
		</div>
	)
}