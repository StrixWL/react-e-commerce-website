import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../../components/productsDetails/ProductDetails";
import getProductFromId from "../../utils/searchFunctions/getProductFromId";

const Product = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getProductFromId(parseInt(productId));
      if (data && data.images) {
      const updatedImages = data.images.map((image) => image.original);
      setProductData({ ...data, images: updatedImages });
    }
    })()    
  }, [productId]);
  
  return (
    <>
      {productData && (
        <ProductDetails
          title={productData.title}
          imageTreeSrc={productData.images}
          price={productData.price}
          oldPrice={productData.previousPrice}
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
