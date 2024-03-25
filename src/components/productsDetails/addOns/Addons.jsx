import React, { useState } from "react";
import addonImage from "../../../assets/details/greenAmzigh.jfif";
const Addons = () => {
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const toggleAddon = (addon) => {
    setSelectedAddons((current) => {
      if (current.includes(addon)) {
        return current.filter((item) => item !== addon);
      } else {
        return [...current, addon];
      }
    });
  };
  const updateQuantity = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };
  const addons = [
    {
      id: 1,
      name: "AFRIKA | ARIF INO Hoodie: Unveil Your Amazigh Style",
      price: 40.21,
      originalPrice: 45.21,
      image: addonImage,
    },
  ];

  return (
    <div>
      <div className="flex flex-col space-y-1">
        <span className="text-2xl font-semibold">Select addons</span>
        <span className="text-lg font-medium">Get 10% off on add-ons.</span>
        <span className="text-base font-light">
          (Discount will apply at checkout)
        </span>
      </div>
      {addons.map((addon) => (
        <div
          key={addon.id}
          className="flex items-center border space-x-2 px-4 py-2 mt-2 rounded-md"
        >
          <input
            type="checkbox"
            checked={selectedAddons.includes(addon.id)}
            onChange={() => toggleAddon(addon.id)}
            className="h-4 w-4"
          />
          <img
            src={addon.image}
            alt={addon.name}
            className="w-[130px] h-[100px]"
          />
          <div className="flex flex-col space-y-1">
            <span className="text-base line-clamp-1	 font-normal text-gray-600">
              {addon.name}
            </span>
            <div className="price">
              <span className="text-lg text-red-500">{`€${addon.price}`}</span>
              <span className="text-[14px] ml-2 line-through">{`€${addon.originalPrice}`}</span>
            </div>
            <div className="flex justify-between items-center">
              <select
                id="size-select"
                //value={selectedSize}
                //onChange={handleSizeChange}
                className="bg-white border text-black px-2 py-1 rounded-xl cursor-pointer"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
              </select>
              <div
                className={`bg-white border text-black px-4 py-1 flex items-center justify-between w-[90px] rounded-xl `}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => updateQuantity(quantity - 1)}
                >
                  -
                </div>
                <div>{quantity}</div>
                <div
                  className="cursor-pointer"
                  onClick={() => updateQuantity(quantity + 1)}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Addons;
