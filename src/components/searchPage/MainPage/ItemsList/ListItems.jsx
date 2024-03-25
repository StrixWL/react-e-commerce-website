import { useState, useEffect } from "react";
import getProductInfoByTitle from "../../../../utils/searchFunctions/getProductFromTitle";
import ProductItem from "../ProductItem/ProductItem";
import "./ListItems.css";
import "aos/dist/aos.css";

const ListItems = ({ matchedProducts }) => {
  const [productsInfo, setProductsInfo] = useState([]);
  const [columnsCount, setColumnsCount] = useState(-1);

  useEffect(() => {
    const fetchProductsInfo = () => {
      const info = matchedProducts.map((title) => {
        const productInfo = getProductInfoByTitle(title);
        return productInfo;
      });
      setProductsInfo(info);
    };
    fetchProductsInfo();
  }, [matchedProducts]);
  // useEffect(() => {
  // 	if (window.innerWidth > 989)
  // 		setColumnsCount(4)
  // 	else if (window.innerWidth > 749)
  // 		setColumnsCount(2)
  // 	else
  // 		setColumnsCount(1)
  // })
  return (
    <section className="list-items-section">
      <section className="product-list">
        {productsInfo.map((productInfo, index) => (
            <ProductItem
              key={index}
              title={productInfo?.title}
              beforeHoverImage={productInfo?.originalImage}
              afterHoverImage={productInfo?.thumbnailImage}
              priceBefore={productInfo?.price}
              priceAfter={productInfo?.previousPrice}
              index={index}
            />
        ))}
      </section>
    </section>
  );
};

export default ListItems;
