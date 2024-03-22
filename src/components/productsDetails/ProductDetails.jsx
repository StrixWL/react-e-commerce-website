import React, { useState } from "react";
import ZoomImage from "./productImages/ZoomImage";
import ImageThumbnail from "./productImages/ImageThumbnail";
import Details from "./productInfos/Details";
import Colors from "./productInfos/Colors";
import SizeChoices from "./productInfos/SizeChoices";
import QuantitySelector from "./productInfos/QuantitySelector";
import Addons from "./addOns/Addons";
import Button from "../../ui/Button";
import black1 from "../../pages/assets/details/amazighFront.jfif";
import black2 from "../../pages/assets/details/amazighBack.jfif";
import black3 from "../../pages/assets/details/greenAmzigh.jfif";
const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(black1);
  const [selectedImage, setSelectedImage] = useState(black1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const sizes = ["S", "M", "L", "XL", "2XL"];
  const colors = ["Black", "Green", "Gray"];
  const changeMainImage = (newImage) => {
    setMainImage(newImage);
    setSelectedImage(newImage);
  };
  return (
    <div className="flex flex-col pb-14 bg-white ">
      <div className="self-center mt-20 w-full max-w-[1201px] max-md:mt-10 max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full h-auto " >
            <div className="flex flex-col px-15  top-0 max-md:mt-10  max-md:max-w-full sticky  ">
              <div className="mb-4">
                <ZoomImage src={mainImage} alt="Product Image" />
              </div>
              <div className="flex justify-center  w-full items-center">
                <ImageThumbnail
                  src={black1}
                  isSelected={selectedImage === black1}
                  onClick={() => changeMainImage(black1)}
                />
                <ImageThumbnail
                  src={black2}
                  isSelected={selectedImage === black2}
                  onClick={() => changeMainImage(black2)}
                />
                <ImageThumbnail
                  src={black3}
                  isSelected={selectedImage === black3}
                  onClick={() => changeMainImage(black3)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col ml-5 max-w-full w-[426px]">
                <Details
                  title={"Imazighen Heritage T-shirts"}
                  price={"€28,21"}
                  oldPrice={"€89,90"}
                />
                <div className="flex flex-col mt-4 space-y-3">
                  <Colors
                    colors={colors}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                  <SizeChoices
                    sizes={sizes}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                  />
                  <QuantitySelector
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                  <Addons />

                  <div className="flex flex-col items-start space-y-2 ">
                    <div className="w-full space-y-3">
                      <Button
                        className="px-4 py-3 rounded-3xl cursor-pointer w-full bg-white border-2 text-black"
                        click={() => console.log("button clicked")}
                        name={"Add to cart"}
                      />
                      <Button
                        className="px-4 py-3 rounded-3xl cursor-pointer w-full bg-black text-white"
                        click={() => console.log("by clicked")}
                        name={"Buy with PayPal"}
                      />
                    </div>
                  </div>

                  <div className="text-normal font-medium text-justify text-slate-400">
                    Discover the essence of Imazighen culture with our Imazighen
                    Essence T-Shirt. More than just a piece of clothing, it's a
                    celebration of heritage and style. Crafted for comfort and
                    designed to honor the rich Imazighen legacy, this T-shirt is
                    a wearable testament to a timeless tradition. Wear it not
                    just for style, but as a symbol of cultural pride and
                    history. Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Atque esse nisi sunt sit, delectus quam blanditiis
                    eveniet in unde fugit maxime ipsum laboriosam nostrum
                    debitis soluta architecto expedita sapiente. Asperiores!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse quas modi nulla asperiores, amet atque doloremque
                    doloribus quae, commodi totam beatae dolor consequatur
                    cupiditate obcaecati deleniti vitae quos repellat officia?
                    Discover the essence of Imazighen culture with our Imazighen
                    Essence T-Shirt. More than just a piece of clothing, it's a
                    celebration of heritage and style. Crafted for comfort and
                    designed to honor the rich Imazighen legacy, this T-shirt is
                    a wearable testament to a timeless tradition. Wear it not
                    just for style, but as a symbol of cultural pride and
                    history. Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Atque esse nisi sunt sit, delectus quam blanditiis
                    eveniet in unde fugit maxime ipsum laboriosam nostrum
                    debitis soluta architecto expedita sapiente. Asperiores!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse quas modi nulla asperiores, amet atque doloremque
                    doloribus quae, commodi totam beatae dolor consequatur
                    cupiditate obcaecati deleniti vitae quos repellat officia?
                    Discover the essence of Imazighen culture with our Imazighen
                    Essence T-Shirt. More than just a piece of clothing, it's a
                    celebration of heritage and style. Crafted for comfort and
                    designed to honor the rich Imazighen legacy, this T-shirt is
                    a wearable testament to a timeless tradition. Wear it not
                    just for style, but as a symbol of cultural pride and
                    history. Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Atque esse nisi sunt sit, delectus quam blanditiis
                    eveniet in unde fugit maxime ipsum laboriosam nostrum
                    debitis soluta architecto expedita sapiente. Asperiores!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse quas modi nulla asperiores, amet atque doloremque
                    doloribus quae, commodi totam beatae dolor consequatur
                    cupiditate obcaecati deleniti vitae quos repellat officia?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
