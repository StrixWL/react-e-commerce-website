import { useState, useEffect } from "react";
import getProductInfoByTitle from "../../../../utils/searchFunctions/getProductFromTitle";
import ProductItem from "../ProductItem/ProductItem";
import "./ListItems.css";

const ListItems = ({ matchedProducts }) => {
  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    const fetchProductsInfo = async () => {
      const info = matchedProducts.map((title) => {
        const productInfo = getProductInfoByTitle(title);
        return productInfo;
      });
      setProductsInfo(info);
    };

    fetchProductsInfo();
  }, [matchedProducts]);

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
          />
        ))}
      </section>
    </section>
  );
};

export default ListItems;
