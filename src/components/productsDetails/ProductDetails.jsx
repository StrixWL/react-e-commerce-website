import React, { useEffect, useState } from "react";
import ZoomImage from "./productImages/ZoomImage";
import ImageThumbnail from "./productImages/ImageThumbnail";
import Details from "./productInfos/Details";
import Colors from "./productInfos/Colors";
import SizeChoices from "./productInfos/SizeChoices";
import QuantitySelector from "./productInfos/QuantitySelector";
import Addons from "./addOns/Addons";
import Button from "../ui/Button";
import { useCart } from "../../store/cartContext/cartContext";
import Modal from "./popUp/Modal";
import useLocation from "../../hooks/useLocation";
const ProductDetails = ({
  title,
  imageTreeSrc,
  price,
  oldPrice,
  description,
  colors,
  productId,
  sizes,
}) => {
  const [mainImage, setMainImage] = useState(imageTreeSrc[0]);
  const [selectedImage, setSelectedImage] = useState(imageTreeSrc[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {currentLocation} = useLocation()
  useEffect(()=>{
    console.log(currentLocation.split(' ')[1]);
  })
  const changeMainImage = (newImage) => {
    setMainImage(newImage);
    setSelectedImage(newImage);
  };
  const handleAddToCart = () => {
    const product = {
      id: productId,
      title,
      price,
      image: mainImage,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    };
    addToCart(product, quantity);
    setIsModalVisible(true);
    setTimeout(() => setIsModalVisible(false), 3000);
  };
  return (
    <div className="flex flex-col pb-14 bg-white ">
      {isModalVisible && (
        
          <Modal isModalVisible={isModalVisible} />
      )}
      <div className="self-center mt-20 w-full max-w-[1201px] max-md:mt-10 max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full h-auto ">
            <div className="flex flex-col px-15  top-0 max-md:mt-10  max-md:max-w-full sticky  ">
              <div className="mb-4">
                <ZoomImage src={mainImage} alt="Product Image" />
              </div>
              <div className="flex justify-start flex-wrap w-[100%] items-center">
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
              <div className="flex flex-col p-2 max-w-full w-[426px]">
                <Details title={title} price={price} oldPrice={oldPrice} currentLocation={currentLocation}/>
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
                        click={handleAddToCart}
                        // click={() => console.log("button clicked")}
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

export default ProductDetails;
