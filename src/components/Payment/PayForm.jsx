import React, { useState } from "react";
import ContactSection from "./contact/ContactSection";
import PaymentSection from "./PaymentSection";
import DeliverySection from "./DeliverySection";
import paypal from "../../assets/express-checkout/Paypal-logo.png";
import google from "../../assets/express-checkout/Google_Pay_Logo.svg.png";
import shopPay from "../../assets/express-checkout/shopPay.png";
const PayForm = () => {
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactValid = ContactSection.validate();
    const deliveryValid = DeliverySection.validate();
    const paymentValid = PaymentSection.validate();

    if (contactValid && deliveryValid && paymentValid) {
      console.log("Form submitted successfully");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <section className="border-r-2">
      <div className="max-w-lg mx-auto p-4">
        <div className="">
          <div className="mb-3">
            <h1 className="text-sm text-slate-700 text-center">
              Express Checkout
            </h1>
          </div>
          <div className="flex justify-stretch w-full space-x-4">
            <button className="border shadow text-white px-4 py-2 rounded-lg w-full">
              <img src={shopPay} alt="paypal" />
            </button>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg w-full">
              <img src={paypal} alt="paypal" />
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg w-full">
              <img src={google} alt="paypal" />
            </button>
          </div>
        </div>

        <div className="my-6 flex justify-center items-center space-x-3">
          <span className="w-full border-b-2"></span>
          <div className="text-center uppercase my-2 ">or</div>
          <span className="w-full border-b-2"></span>
        </div>

        <form onSubmit={handleSubmit}>
          <ContactSection setFormErrors={setFormErrors} />
          <DeliverySection setFormErrors={setFormErrors} />
          <PaymentSection setFormErrors={setFormErrors} />

          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center  py-3 px-4 border rounded-3xl shadow-sm text-sm font-medium text-white bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Check Out
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PayForm;
