import styles from "./BestProducts.module.css";
import productDetailItem from "../../data/data";
import { testItems } from "../../data/data";
import Product from "./Product/Product";
import { useEffect, useRef, useState } from "react";

const BestProducts = () => {
	const [columnsCount, setColumnsCount] = useState(-1)
	const _items = [...testItems, ...testItems,...testItems, ...testItems, ...testItems, ...testItems]
	const ref = useRef(null)
	useEffect(() => {
		if (window.innerWidth > 989)
			setColumnsCount(3)
		else if (window.innerWidth > 749)
			setColumnsCount(2)
		else
			setColumnsCount(1)
	})
	return (
		<div id="ref" ref={ref} className={styles["wrapper"]}>
			<ul className={styles["items"]}>
			{_items.map((item, i) => {
					return (
						<li data-aos-duration={700 + (i % columnsCount) * 400} data-aos-once="true" data-aos="fade-up" key={i}>
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
