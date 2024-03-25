import React from 'react'

const Colors =  ({colors, selectedColor, setSelectedColor}) => {
    return (
      <div className="flex flex-col items-start space-y-2 ">
        <div className="text-slate-400">Colors</div>
        <div className="flex items-center space-x-2">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-4 py-1 rounded-2xl cursor-pointer ${
                selectedColor === color
                  ? "bg-black text-white"
                  : "bg-white border text-black"
              }`}
            >
              {color}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Colors
