import Head from 'next/head'
import { useRef, useState } from 'react'
import NavTop from '../components/NavTop'
import styles from '../styles/Contact.module.scss'
// import effects from '../styles/Effects.module.scss'

export default function Contact() {
	const [loading, setLoading] = useState(false)
	const [response, setResponse] = useState(null)
	const submitClass = loading ? styles.submitLoading : styles.submit
	const responseClass = response ? styles.responseShow : styles.response
	const refs = {
		form: useRef(),
		name: useRef(),
		email: useRef(),
		phone: useRef(),
		message: useRef()
	}

	function validForm(...inputs) {
		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].value.length === 0) return false
		}
		return true
	}

	async function submitForm(e) {
		e.preventDefault()
		if (!validForm(refs.name.current, refs.email.current, refs.phone.current, refs.message.current)) return

		setLoading(true)
		try {
			const formData = new FormData(refs.form.current)
			const resp = await fetch('/', {
				method: 'POST',
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(formData).toString()
			})
			console.log('resp: ', resp)
			setResponse(resp.status)
		} catch (err) {
			alert(`Sorry, there was an error: '${err}'. Please refresh the page and try again.`)
		}
		setLoading(false)
		refs.form.current.reset()
	}

	return (
		<div className={styles.contact}>
			<Head>
        <title>Contact | Swanson Furniture</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="Fine custom furniture and living spaces." />
				<link rel='icon' href='/favicon.ico' />
      </Head>
			<NavTop />
			<div className={styles.formWrapper}>
				{/* <a className={styles.tel} href='tel:+1678-522-7026'>+1-678-522-7026</a> */}
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
					<div className={styles.buttons}>
						<a className={styles.call} href='tel:+1678-522-7026'>Call</a>
						<button 
							className={submitClass}
							onClick={submitForm}
						>
							{loading ? 'Sending...' : 'Send'}
						</button>
					</div>
					<div className={responseClass}>
						{(response === 200) ? "Message sent successfully!" : "Sorry, there was an error."}
					</div>
				</form>
			</div>
		</div>
	)
}