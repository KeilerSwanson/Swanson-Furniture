import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/NavTop.module.scss'
import effects from '../styles/Effects.module.scss'

export default function NavTop() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [logoText, setLogoText] = useState('SF')
	const menuClass = menuOpen ? styles.menuOpen : styles.menu
	const iconClass = menuOpen ? styles.iconCross : styles.icon


	useEffect(() => {
		console.log('nav effect hook')
		if (window.innerWidth >= 1366) {
			setLogoText('Swanson Furniture')
		}
	}, [])

	// const toggleMenu = () => setMenuOpen(!menuOpen)
	function toggleMenu() {
		setMenuOpen(!menuOpen)
	}

	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<h1 className={styles.swanson}>{logoText}</h1>
				{/* <h2 className={styles.custom}>Custom Furniture & Interiors</h2> */}
			</div>
			<menu className={menuClass}>
				<Link href='/gallery'>
					<a className={`${styles.menuItem} ${effects.menuItem}`}>Gallery</a>
				</Link>
				<Link href='/about'>
					<a className={`${styles.menuItem} ${effects.menuItem}`}>About</a>
				</Link>
				<Link href='/reviews'>
					<a className={`${styles.menuItem} ${effects.menuItem}`}>Reviews</a>
				</Link>
				<Link href='/contact'>
					<a className={`${styles.menuItem} ${effects.menuItem}`}>Contact</a>
				</Link>
			</menu>
			<button className={iconClass} onClick={toggleMenu}>
				<div className={styles.bar1} />
				<div className={styles.bar2} />
				<div className={styles.bar3} />
				<div className={styles.bar4} />
			</button>
		</nav>
	)
}

