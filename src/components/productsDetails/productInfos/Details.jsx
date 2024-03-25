import React from "react";

const Details = ({ title, price, oldPrice, currentLocation}) => {
  return (
    <div>
      
        <div className="text-xl font-light text-stone-500 max-md:max-w-full">
          Afrika Brand
        </div>
        <div className=" text-4xl font-semibold text-black leading-[43px] tracking-[2.16px]  max-md:max-w-full">
          {title}
        </div>
        <div className="flex justify-start items-center  max-md:flex-wrap">
          <div className=" my-auto text-4xl font-semibold text-black leading-[53px] tracking-[2.16px]">
            <span className="text-xl line-through mr-4">{currentLocation.split(' ')[1]}{oldPrice}</span>
            <span className="text-3xl mr-4">{currentLocation.split(' ')[1]}{price}</span>
          </div>
          <div className="justify-center h-8 items-center px-2 text-lg tracking-widest whitespace-nowrap bg-white border border-solid border-stone-400  text-neutral-400 max-md:pr-5">
            Sale
          </div>
        </div>
        <div className=" text-base tracking-wider text-black  leading-[23px] max-md:max-w-full">
          <span className="font-light">Tax included. </span>
          <a
            href="https://afrikabrand.com/policies/shipping-policy"
            className="font-light underline"
            target="_blank"
          >
            Shipping
          </a>
          <span className="font-light"> calculated at checkout.</span>
        </div>
      
    </div>
  );
};

export default Details;
