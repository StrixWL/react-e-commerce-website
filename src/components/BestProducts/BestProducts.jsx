import styles from "./BestProducts.module.css";
import productDetailItem from "../../data/data";
import { testItems } from "../../data/data";
import Product from "./Product/Product";
import { useState } from "react";

const BestProducts = () => {
	const [items, setItems] = useState(testItems)
	return (
		<div className={styles["wrapper"]}>
			<ul className={styles['items']}>
			{testItems.map((item, i) => {
					console.log("hh", item.images.map(i => i.original))
					return (
						<li key={i}>
							<Product
								title={item.title}
								beforeHoverImage={item.beforeImage}
								afterHoverImage={item.afterImage}
								priceBefore={item.previousPrice}
								priceAfter={item.price}
								id={item.id}
							/>
						</li>
					);
				})}
				{/* {testItems.map((item, i) => {
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
				})} */}
			</ul>
		</div>
	);
};

export default BestProducts;
