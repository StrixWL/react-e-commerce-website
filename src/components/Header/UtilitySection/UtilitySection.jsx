import styles from "./UtilitySection.module.css";
import headerLogo from "./../../../assets/headerLogo.webp";
import { Link } from "react-router-dom";
import SearchButton from "../../ui/SearchButton/SearchButton";
import Utilities from "./Utilities/Utilities";
import navbarIcon from '../../../assets/navbar.svg'
import closeIcon from '../../../assets/close.svg'

const UtilitySection = ({showNav, setShowNav}) => {
	return (
		<section className={styles["utility-section"]}>
			<div className={styles["search"]}>
				<SearchButton className={styles['search-button']} />
			</div>
			<div className={styles['toggle-navbar']}>
				<button onClick={() => setShowNav(!showNav)} className={styles['toggle-navbar-btn']}>
					<img src={showNav ? closeIcon : navbarIcon} />
				</button>
			</div>
			<div className={styles["header-logo"]}>
				<Link to="/">
					<img src={headerLogo} alt="Logo" />
				</Link>
			</div>
			<Utilities />
		</section>
	);
};

export default UtilitySection;
