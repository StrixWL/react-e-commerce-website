import React from "react";
import ContactSection from "./contact/ContactSection";
import PaymentSection from "./PaymentSection";
import DeliverySection from "./DeliverySection";


const PayForm = () => {
  return (
    <div>
      <div className="max-w-lg mx-auto p-4">
        <div className="">
          <div className="mb-3">
            <h1 className="text-sm text-slate-700 text-center">
              Express Checkout
            </h1>
          </div>
          <div className="flex justify-stretch w-full space-x-4">
            {/* Boutons de paiement express (factice) */}
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full">
              Shop Pay
            </button>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg w-full">
              PayPal
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg w-full">
              G Pay
            </button>
          </div>
        </div>

        <div className="my-6 flex justify-center items-center space-x-3">
          <span className="w-full border-b-2"></span>
          <div className="text-center uppercase my-2 ">or</div>
          <span className="w-full border-b-2"></span>
        </div>

        <ContactSection />
        <DeliverySection />
        <PaymentSection />

        <div className="mt-6">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayForm;
