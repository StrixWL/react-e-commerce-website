import styles from "./Utilities.module.css";
import { Link } from "react-router-dom";
import loginIcon from "../../../../assets/login.svg";
import cartIcon from "../../../../assets/cart.svg";
import DropDownMenu from "../../../ui/DropDownMenu/DropDownMenu";
import useLocation from "../../../../hooks/useLocation";
import { locations } from "../../../../data/locations";

const Utilities = () => {
	const { currentLocation, changeLocation } = useLocation();
	return (
		<div className={styles["utilities"]}>
			<DropDownMenu
				items={locations}
				current={currentLocation}
				onChange={changeLocation}
			/>
			<Link className={styles["login"]} to="/login">
				<img src={loginIcon}></img>
			</Link>
			<Link className={styles["cart"]} to="/cart">
				<img src={cartIcon}></img>
			</Link>
		</div>
	);
};

export default Utilities;
