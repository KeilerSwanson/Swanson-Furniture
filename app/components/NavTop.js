import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/NavTop.module.scss'
import effects from '../styles/Effects.module.scss'

export default function NavTop() {
	const [menuOpen, setMenuOpen] = useState(false)
	const menuClass = menuOpen ? styles.menuOpen : styles.menu
	const iconClass = menuOpen ? styles.iconCross : styles.icon

	// const toggleMenu = () => setMenuOpen(!menuOpen)
	function toggleMenu() {
		setMenuOpen(!menuOpen)
	}

	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<h1 className={styles.swanson}>Swanson Furniture<sup>TM</sup></h1>
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
				<div className={styles.bar2} />
				<div className={styles.bar3} />
			</button>
		</nav>
	)
}

