import React, { useState } from "react";
import ProductDetails from "../../components/productsDetails/ProductDetails";

const Product = () => {
  const [productData, setProductData] = useState({
    title: "Imazighen Heritage T-shirts",
    images: ["src_of_image1", "src_of_image2", "src_of_image3"],
    price: "€28,21",
    oldPrice: "€89,90",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse nisi sunt sit, delectus quam blanditiis eveniet in unde fugit maxime ipsum laboriosam nostrum debitis soluta architecto expedita sapiente. Asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas modi nulla asperiores, amet atque doloremque doloribus quae, commodi totam beatae dolor consequatur cupiditate obcaecati deleniti vitae quos repellat officia? Discover the essence of Imazighen culture with our Imazighen Essence T-Shirt. More than just a piece of clothing, it's a celebration of heritage and style. Crafted for comfort and designed to honor the rich Imazighen legacy, this T-shirt is a wearable testament to a timeless tradition. Wear it not just for style, but as a symbol of cultural pride and history. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque esse nisi sunt sit, delectus quam blanditiis eveniet in unde fugit maxime ipsum laboriosam nostrum debitis soluta architecto expedita sapiente. Asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas modi nulla asperiores, amet atque doloremque doloribus quae, commodi totam beatae dolor consequatur cupiditate obcaecati deleniti vitae quos repellat officia? Discover the essence of Imazighen culture with our Imazighen Essence T-Shirt. More than just a piece of clothing, it's a celebration of heritage and style. Crafted for comfort and designed to honor the rich Imazighen legacy, this T-shirt is a wearable testament to a timeless tradition. Wear it not just for style, but as a symbol of cultural pride and history. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque esse nisi sunt sit, delectus quam blanditiis eveniet in unde fugit maxime ipsum laboriosam nostrum debitis soluta architecto expedita sapiente. Asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas modi nulla asperiores, amet atque doloremque doloribus quae, commodi totam beatae dolor consequatur cupiditate obcaecati deleniti vitae quos repellat officia?",
    colors: ["Black", "Green", "Gray"],
    sizes: ["S", "M", "L", "XL", "2XL"],
  });

  return (
    <>
      <ProductDetails
        title={productData.title}
        imageTreeSrc={productData.images}
        price={productData.price}
        oldPrice={productData.oldPrice}
        description={productData.description}
        colors={productData.colors}
        sizes={productData.sizes}
      />
    </>
  );
};

export default Product;
