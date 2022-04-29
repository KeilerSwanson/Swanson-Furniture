import { useState } from 'react'
import NavTop from '../components/NavTop'
import Arrow from '../components/Arrow'
import styles from '../styles/ReviewsPage.module.scss'

export default function Reviews() {
	const [reviews, setReviews] = useState([
		{
			quote: `Scott is a true craftsman and it's what sold me on going with him. He was prompt to every appointment and was communicative regarding when he would be finished with the work and ready to install. The final product was exactly as discussed and even had some personal touches that truly made it one of a kind. Exactly what I was hoping for. Something not cookie cutter. He was willing to go as fancy as we wanted, but stuck to his value/cost mantra which worked really well for my wife and I. Overall a great experience. I will be hiring Scott again for other custom work I plan to have done. Thanks Scott!`,
			author: 'Chad B.'
		},
		{
			quote: `Can't say enough about Swanson Services! Incredibly talented and professional. Built custom iron stair railing, refaced kitchen cabinets and more. Great design ideas and incredible craftsmanship. Showed up on time and finished work in a timely manner. Great company! Highly recommend.`,
			author: 'Deborah M.'
		},
		{
			quote: `Scott was very responsive, professional, and punctual. But more importantly, he gave us great ideas from a design standpoint and did an overall amazing job with the cabinetry and the install. I would recommend him, and utilize him again for future jobs.`,
			author: 'Erika W.'
		},
		{
			quote: `I had admired Scott's beautiful work for a while and was so excited to ask him to build bedroom furniture for my husband and I as an anniversary present for him. The process was so exciting! It was a completely custom furniture and it was exactly what I imagined! I have the most beautiful elegant bedroom furniture and it was made just for us! I love it so much! Scott listened to vision and helped guide me through the process so that the end result was my vision and his incredible skills brought it to life! I am so grateful!!`,
			author: 'Cindy H.'
		},
		{
			quote: `Scott is the man, I am so happy that I found him! My shop is beautiful! I am beyond pleased and will definitely work with him again. Highly recommend.`,
			author: 'Regina S.'
		}
	])

	console.log('current review: ', reviews[0])

	function nextReview() {
		const rotated = [...reviews]
		const curr = rotated.shift()
		rotated.push(curr)
		setReviews(rotated)
	}

	function prevReview() {
		const rotated = [...reviews]
		const curr = rotated.pop()
		rotated.unshift(curr)
		setReviews(rotated)
	}

	return (
		<div className={styles.reviewsPage}>
			<NavTop />
			<blockquote className={styles.review}>
				<p className={styles.quoteMark}>"</p>
				<p className={styles.quote}>{reviews[0].quote}</p>
				<p className={styles.author}>{`- ${reviews[0].author}`}</p>
			</blockquote>
			<div className={styles.controls}>
				<Arrow left={true} handler={prevReview} />
				<Arrow handler={nextReview} />
			</div>
		</div>
	)
}