import Head from 'next/head'
import { useState, useRef, useEffect, useCallback } from 'react'
import NavTop from '../components/NavTop'
import Arrow from '../components/Arrow'
import { reviews } from '../public/reviews'
import styles from '../styles/reviews.module.scss'

export default function Reviews() {
	const [currIdx, setCurrIdx] = useState(0)
	const firstMount = useRef(true)
	const reviewRef = useRef()

	const dots = reviews.map((review, idx) => {
		return (idx === currIdx) ? <div className={styles.dotCurrent} key={idx} /> : <div className={styles.dot} key={idx} />
	})

	useEffect(() => {
		if (!firstMount.current) {
			reviewRef.current.style.cssText = 'opacity: 1;'
		}
		firstMount.current = false
	})
	
	function nextReview() {
		reviewRef.current.style.cssText = 'opacity: 0;'
		setTimeout(() => {
			const nextIdx = currIdx < (reviews.length - 1) ? currIdx + 1 : 0
			setCurrIdx(nextIdx)
		}, 300)
	}

// const nextReview = useCallback(() => {
// 	reviewRef.current.style.cssText = 'opacity: 0;'
// 	setTimeout(() => {
// 		const nextIdx = currIdx < (reviews.length - 1) ? currIdx + 1 : 0
// 		setCurrIdx(nextIdx)
// 	}, 300)
// }, [reviewRef, currIdx, setCurrIdx])

	function prevReview() {
		reviewRef.current.style.cssText = 'opacity: 0;'
		setTimeout(() => {
			const prevIdx = currIdx > 0 ? currIdx - 1 : (reviews.length - 1)
			setCurrIdx(prevIdx)
		}, 300)
	}

	// const prevReview = useCallback(() => {
	// 	reviewRef.current.style.cssText = 'opacity: 0;'
	// 	setTimeout(() => {
	// 		const prevIdx = currIdx > 0 ? currIdx - 1 : (reviews.length - 1)
	// 		setCurrIdx(prevIdx)
	// 	}, 300)
	// }, [reviewRef, currIdx, setCurrIdx])

	return (
		<div className={styles.reviews}>
			<Head>
        <title>Reviews | Swanson Furniture</title>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='author' content='Keiler Swanson' />
        <meta name='description' content="Fine custom furniture and living spaces." />
				<link rel='icon' href='/favicon.ico' />
      </Head>
			<NavTop />
			<blockquote ref={reviewRef} className={styles.review}>
				<p className={styles.quote}>{reviews[currIdx].quote}</p>
				<p className={styles.author}>{`- ${reviews[currIdx].author}`}</p>
			</blockquote>
			<div className={styles.controls}>
				<Arrow left={true} handler={prevReview} />
			<div className={styles.dots}>
				{dots}
			</div>
				<Arrow handler={nextReview} />
			</div>
		</div>
	)
}