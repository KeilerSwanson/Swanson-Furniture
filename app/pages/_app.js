import { useEffect } from 'react'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  })

  return <Component {...pageProps} />
}

export default MyApp