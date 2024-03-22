import LocalisationSelector from "./LocalisationSelector/LocalisationSelector";
import styles from "./Utilities.module.css";
import { Link } from "react-router-dom";
import loginIcon from "../../../../assets/login.svg";
import cartIcon from "../../../../assets/cart.svg";

const Utilities = () => {
	return (
		<div className={styles["utilities"]}>
			<LocalisationSelector />
			<Link className={styles['login']} to="/login">
				<img src={loginIcon}></img>
			</Link>
            <Link className={styles['cart']} to="/cart">
				<img src={cartIcon}></img>
			</Link>
		</div>
	);
};

export default Utilities;
