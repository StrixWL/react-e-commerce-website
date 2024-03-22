import styles from "./UtilitySection.module.css";
import searchLogo from "./../../../assets/search.svg";
import headerLogo from "./../../../assets/headerLogo.webp";
import { Link } from "react-router-dom";

const UtilitySection = () => {
	return (
		<section className={styles["utility-section"]}>
			<div className={styles["search"]}>
				<button className={styles["search-button"]}>
					<img src={searchLogo} alt="Search" />
				</button>
			</div>
			<div className={styles["header-logo"]}>
				<Link to="/">
					<img src={headerLogo} alt="Logo" />
				</Link>
			</div>
			<div className={styles["search"]}>
				<button className={styles["search-button"]}>
					<img src={searchLogo} alt="Search" />
				</button>
			</div>
		</section>
	);
};

export default UtilitySection;
