import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { useCart } from "../../store/cartContext/cartContext";
import Header from "../../components/shoppCart/Header";
import MyCart from "../../components/shoppCart/MyCart";
import { useNavigate } from "react-router";

const Cart = ({ setShowCart }) => {
  const [cartVisible, setCartVisible] = useState(true);
  const { cartItems, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const formatPrice = (price) =>
    parseFloat(price.replace("€", "").replace(",", "."));
  const total = cartItems
    .reduce((acc, item) => acc + formatPrice(item.price) * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    setShowCart(false); // Fermez le panier
    navigate("/payment"); // Naviguez vers la page de paiement
  };
  const closeCart = () => setCartVisible(false);
  const goToLandingPage = () => setCartVisible(false);
  return (
    <>
      {cartVisible && (
        <div
          className="relative z-10 ease-in-out duration-1000 from:opacity-100 from overflow-hidden flex flex-row items-center justify-center"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={() => setShowCart(false)}
          ></div>

          <div className="fixed inset-0 overflow-hidden sm:w-screen">
            <div className="absolute inset-0 overflow-hidden">
              <div className=" fixed inset-y-0 right-0 flex ">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-hidden sm:p-0 p-2 bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto  sm:px-6">
                      <Header setShowCart={setShowCart} />
                      <MyCart
                        goToLandingPage={() => setShowCart(false)}
                        cartItems={cartItems}
                        setQuantity={setQuantity}
                        formatPrice={formatPrice}
                        removeFromCart={removeFromCart}
                      />
                    </div>

                    <section className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Estimated total</p>
                        <p> {total}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500 overflow-hidden ">
                        Tax included. Shipping and discounts calculated at
                        checkout.
                      </p>
                      <div className="mt-6">
                        <Button
                          click={handleCheckout}
                          className={
                            "px-4 py-3 rounded-3xl cursor-pointer w-full bg-black text-white"
                          }
                          name={"Check Out"}
                        />
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
