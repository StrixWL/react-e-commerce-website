import styles from "./Header.module.css";
import searchLogo from "./../../assets/search.svg";
import headerLogo from "./../../assets/headerLogo.webp";
import NavBar from "./NavBar/NavBar";
import useScrollDirection from "../../hooks/useScrollDirection";
import { Link } from "react-router-dom";
import UtilitySection from "./UtilitySection/UtilitySection";

const Header = () => {
	const scrollDirection = useScrollDirection()
	return (
		<header
			className={
				styles.header +
				(scrollDirection == "up" ? " " + styles.active : "")
			}
		>
			<UtilitySection />
			<NavBar />
		</header>
	);
};

export default Header;
