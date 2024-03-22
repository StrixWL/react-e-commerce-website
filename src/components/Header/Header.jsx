import styles from "./Header.module.css";
import NavBar from "./NavBar/NavBar";
import useScrollDirection from "../../hooks/useScrollDirection";
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
