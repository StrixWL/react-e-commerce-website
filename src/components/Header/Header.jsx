import styles from "./Header.module.css";
import NavBar from "./NavBar/NavBar";
import useScrollDirection from "../../hooks/useScrollDirection";
import UtilitySection from "./UtilitySection/UtilitySection";
import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const Header = () => {
	const scrollDirection = useScrollDirection()
	const [showNav, setShowNav] = useState(false)
	const ref = useClickOutside(() => {
		setShowNav(false)
	})
	return (
		<header
			ref={ref}
			className={
				styles.header +
				(scrollDirection == "up" ? " " + styles.active : "") +
				(showNav ? " " + styles['active-mob'] : "")
			}
		>
			<UtilitySection showNav={showNav} setShowNav={setShowNav} />
			<NavBar showNav={showNav} setShowNav={setShowNav} />
		</header>
	);
};

export default Header;
