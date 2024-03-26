import React from "react";
import { useCart } from "../../store/cartContext/cartContext";
import useLocation from "../../hooks/useLocation";

const OrderInfo = () => {
  const { cartItems } = useCart();
  const {currentLocation} = useLocation();

  const totalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price;
  }, 0);

  return (
    <section className="relative md:sticky md:top-0 bg-slate-200 md:h-screen md:overflow-y-auto">
      <div className="px-16 py-10 space-y-6">
        {cartItems.map((item) => {
          console.log(item);
          return(
          <div className="flex justify-between items-center " key={item.id}>
            <div className="flex justify-center items-center space-x-4">
              <img
                srcSet={item.image}
                alt="image"
                className="w-20 rounded-xl border border-black"
              />
              <div className="flex flex-col justify-start items-start">
                <h1 className="text-xl font-semibold line-clamp-1">{item.title}</h1>
                <h2>
                  {item.color} / {item.size}
                </h2>
              </div>
            </div>
            <div className="">
              <h2 className="font-semibold">{currentLocation.split(' ')[1]}{item.price}</h2>
            </div>
          </div>);
        })}
        <div className="flex justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Discount code"
            className="p-3 rounded-3xl w-full"
          />
          <button className="bg-white p-3 rounded-3xl shadow border font-medium">
            Apply
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h2>Subtotal</h2>
            <h2>{currentLocation.split(' ')[1]} {totalPrice}</h2>
          </div>
          <div className="flex justify-between gap-6 items-center ">
            <h2 className="md:text-lg text-sm">
              Shipping <span className="md:visible hidden">&#63;</span>
            </h2>
            <h2 className="md:text-base text-sm md:line-clamp-2 line-clamp-1">Enter shipping address</h2>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="ms:text-2xl text-base font-semibold">Total</h2>
            <h2 className="ms:text-2xl text-base  font-semibold">{currentLocation.split('|')[0]} {totalPrice}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderInfo;
