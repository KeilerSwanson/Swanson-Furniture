import Head from 'next/head'
import { useRef, useState } from 'react'
import NavTop from '../components/NavTop'
import Arrow from '../components/Arrow'
import styles from '../styles/Contact.module.scss'

export default function Contact() {
	const refs = {
		form: useRef(),
		name: useRef(),
		email: useRef(),
		phone: useRef(),
		message: useRef()
	}

	function submitForm() {

	}

	return (
		<div className={styles.contact}>
			<Head>
        <title>Contact | Swanson Furniture</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="Fine custom furniture and interiors." />
				<link rel='icon' href='/favicon.ico' />
      </Head>
			<NavTop />
			<div className={styles.formWrapper}>
				<a className={styles.tel} href='tel:+1678-522-7026'>+1-678-522-7026</a>
				<form 
					ref={refs.form}
					className={styles.form}
					netlify-honeypot="bot-field" 
					data-netlify='true' 
					name='contact' 
				>
					<input 
						type="hidden" 
						name="form-name" 
						value="contact"
					/>
					<label className={styles.label} htmlFor='name'>Name</label>
					<input 
						ref={refs.name}
						name='name' 
						type='text' 
						placeholder='Name' 
						className={styles.name}
						required={true}
						maxLength={50}
					/>
					<label className={styles.label} htmlFor='email'>Email</label>
					<input 
						ref={refs.email}
						name='email' 
						type='email' 
						placeholder='Email' 
						className={styles.email}
						required={true}
					/>
					<label className={styles.label} htmlFor='phone'>Phone</label>
					<input
						ref={refs.phone}
						name='phone'
						type='tel'
						placeholder='Phone'
						className={styles.phone}
						required={true}
					/>
					<label className={styles.label} htmlFor='message'>Message</label>
					<textarea 
						ref={refs.message}
						name='message' 
						placeholder='Message' 
						className={styles.message}
						required={true}
						maxLength={500}
					/>
					<button className={styles.submit} onClick={submitForm}>Send</button>
					{/* <div className={responseClass}>
						{(response === 200) ? "Message sent successfully!" : "Sorry, it looks like there was an error. Please refresh the page and try again."}
					</div> */}
				</form>
			</div>
		</div>
	)
}