import React, { useState } from "react";
import ZoomImage from "./productImages/ZoomImage";
import ImageThumbnail from "./productImages/ImageThumbnail";
import Details from "./productInfos/Details";
import Colors from "./productInfos/Colors";
import SizeChoices from "./productInfos/SizeChoices";
import QuantitySelector from "./productInfos/QuantitySelector";
import Addons from "./addOns/Addons";
import Button from "../../ui/Button";
import PropTypes from "prop-types";

const ProductDetails = ({
  title,
  imageTreeSrc,
  price,
  oldPrice,
  description,
  colors,
  sizes
}) => {
  const [mainImage, setMainImage] = useState(imageTreeSrc[0]);
  const [selectedImage, setSelectedImage] = useState(imageTreeSrc[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const changeMainImage = (newImage) => {
    setMainImage(newImage);
    setSelectedImage(newImage);
  };

  return (
    <div className="flex flex-col pb-14 bg-white ">
      <div className="self-center mt-20 w-full max-w-[1201px] max-md:mt-10 max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full h-auto ">
            <div className="flex flex-col px-15  top-0 max-md:mt-10  max-md:max-w-full sticky  ">
              <div className="mb-4">
                <ZoomImage src={mainImage} alt="Product Image" />
              </div>
              <div className="flex justify-center  w-full items-center">
                {imageTreeSrc.map((src, index) => (
                  <ImageThumbnail
                    key={index}
                    src={src}
                    isSelected={selectedImage === src}
                    onClick={() => changeMainImage(src)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col ml-5 max-w-full w-[426px]">
                <Details title={title} price={price} oldPrice={oldPrice} />
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
                    {description}
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

ProductDetails.propTypes = {
  title: PropTypes.string.isRequired,
  imageTreeSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProductDetails;
