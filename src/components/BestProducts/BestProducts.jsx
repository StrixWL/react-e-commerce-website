import styles from "./BestProducts.module.css";
import productDetailItem from "../../data/data";
import Product from "./Product/Product";

const BestProducts = () => {
	return (
		<div className={styles["wrapper"]}>
			<ul className={styles['items']}>
			{productDetailItem.map((item, i) => {
					return (
						<li key={i}>
							<Product
								title={item.title}
								beforeHoverImage={item.images[0].original}
								afterHoverImage={item.images[0].original}
								priceBefore={item.previousPrice}
								priceAfter={item.price}
								id={item.id}
							/>
						</li>
					);
				})}
				{productDetailItem.map((item, i) => {
					return (
						<li key={i}>
							<Product
								title={item.title}
								beforeHoverImage={item.images[0].original}
								afterHoverImage={item.images[0].original}
								priceBefore={item.previousPrice}
								priceAfter={item.price}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default BestProducts;
