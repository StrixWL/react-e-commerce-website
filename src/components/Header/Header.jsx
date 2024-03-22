import styles from "./Header.module.css";
import searchLogo from './../../assets/search.svg';
import NavBar from "./NavBar/NavBar";
import { useEffect, useState } from "react";

const Header = () => {
	const [scrollDirection, setScrollDirection] = useState('up')

	useEffect(() => {
		let y = window.scrollY
		let scrollDirection = 'up'
		const handleScroll = () => {
			if ((y < window.scrollY - 1 && scrollDirection == 'up')) {
				scrollDirection = 'down'
				setScrollDirection(scrollDirection)
			}
			else if (y > window.scrollY + 1 && scrollDirection == 'down' && window.scrollY > 151) {
				scrollDirection = 'up'
				setScrollDirection(scrollDirection)
			}
			y = window.scrollY
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
    return (
        <header className={styles.header + (scrollDirection == 'up' ? ' ' + styles.active : '')}>
            <img className={styles.search} src={searchLogo} alt="Search" />
            <NavBar className={styles['nav-bar']} />
        </header>
    );
};

export default Header;
