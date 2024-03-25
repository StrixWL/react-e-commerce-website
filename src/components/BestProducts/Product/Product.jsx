import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { useEffect } from "react";
import test from '../../../assets/products/fearnone.webp'
import useLocation from "../../../hooks/useLocation";
// title={item.title}
// beforeHoverImage={item.images[0].original}
// afterHoverImage={item.images[0].original}
// priceBefore={item.previousPrice}
// priceAfter={item.price}
const Product = ({
	title,
	beforeHoverImage,
	afterHoverImage,
	priceBefore,
	priceAfter,
    id
}) => {
	const {currentLocation} = useLocation()

	return (
		<Link to={"/product/" + id} className={styles["wrapper"]}>
			<img className={styles['after-hover-image']} src={afterHoverImage} />
			<img className={styles['before-hover-image']} src={beforeHoverImage} />
			<div className={styles["item-infos"]}>
				<h1>{title}</h1>
				<div className={styles["price-before"]}>{priceBefore ? currentLocation.split(' ')[1] : ""}{priceBefore}</div>{" "}
				<div className={styles["price-after"]}>{currentLocation.split(' ')[1]}{priceAfter}</div>
			</div>
            <button className={styles['buy-btn']}>Buy now</button>
		</Link>
	);
};

export default Product;
