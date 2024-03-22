import styles from "./Header.module.css";
import searchLogo from "./../../assets/search.svg";
import NavBar from "./NavBar/NavBar";
import useScrollDirection from "../../hooks/useScrollDirection";

const Header = () => {
	const scrollDirection = useScrollDirection()
	return (
		<header
			className={
				styles.header +
				(scrollDirection == "up" ? " " + styles.active : "")
			}
		>
			<img className={styles.search} src={searchLogo} alt="Search" />
			<NavBar className={styles["nav-bar"]} />
		</header>
	);
};

export default Header;
