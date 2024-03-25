import styles from "./Utilities.module.css";
import { Link } from "react-router-dom";
import loginIcon from "../../../../assets/login.svg";
import cartIcon from "../../../../assets/cart.svg";
import DropDownMenu from "../../../ui/DropDownMenu/DropDownMenu";
import useLocation from "../../../../hooks/useLocation";
import { locations } from "../../../../data/locations";
import SearchButton from "../../../ui/SearchButton/SearchButton";
import { useEffect, useState } from "react";
import Cart from "../../../../pages/Cart/Cart";
import { useCart } from "../../../../store/cartContext/cartContext";

const Utilities = ({setShowNav}) => {
	const { currentLocation, changeLocation } = useLocation();
	const [showCart, setShowCart] = useState(false);
	const { cartItems } = useCart();
	return (
		<div className={styles["utilities"]}>
			<DropDownMenu
				items={locations}
				current={currentLocation}
				onChange={changeLocation}
				className={styles['dropdown-menu']}
			/>
			<SearchButton setShowNav={setShowNav} className={styles['search']} />
			<Link className={styles["login"]} to="/login">
				<img src={loginIcon}></img>
			</Link>
			<div className={styles["cart"]} onClick={() => setShowCart(!showCart)}>
				<img src={cartIcon}></img>
				<span className={styles['cart-count']}>{cartItems.length}</span>
			</div>
			{showCart && <Cart setShowCart={setShowCart} />} 
		
		</div>
	);
};

export default Utilities;
