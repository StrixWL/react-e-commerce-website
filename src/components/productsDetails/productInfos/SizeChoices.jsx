import React from "react";

const SizeChoices = ({sizes, selectedSize, setSelectedSize}) => {
  return (
    <div className="flex flex-col items-start space-y-2 ">
      <div className="text-slate-400">Size</div>
      <div className="flex items-center space-x-2">
        {sizes.map((size) => (
          <div
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-4 py-1 rounded-2xl cursor-pointer ${
              selectedSize === size
                ? "bg-black text-white"
                : "bg-white border text-black"
            }`}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeChoices;
