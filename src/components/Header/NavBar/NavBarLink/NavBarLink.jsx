import { Link } from "react-router-dom";
import styles from './NavBarLink.module.css'
import { useEffect } from "react";

const NavBarLink = ({path, name, location, setShowNav}) => {
	return (
		<li className={styles['navbar-link']}>
			<Link
                onClick={() => setShowNav(false)}
				to={`/${path}`}
				className={
					location.pathname === `/${path}` ? styles.active : styles.inactive
				}
			>
				{name}
			</Link>
		</li>
	);
};

export default NavBarLink;