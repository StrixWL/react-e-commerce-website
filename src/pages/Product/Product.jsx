import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../../components/productsDetails/ProductDetails";
import getProductFromId from "../../utils/searchFunctions/getProductFromId";

const Product = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const data = getProductFromId(parseInt(productId));
    console.log(data);
    data.images = data.images.map((image) => image.original);

    setProductData(data);
  }, [productId]);
  return (
    <>
      {productData && (
        <ProductDetails
          title={productData.title}
          imageTreeSrc={productData.images}
          price={productData.price}
          oldPrice={productData.oldPrice}
          description={productData.description}
          colors={productData.color}
          sizes={productData.size}
          productId={productId}
        />
      )}
    </>
  );
};

export default Product;
