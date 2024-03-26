import React, { useState } from "react";

const PaymentSection = () => {
  const [creditCard, setCreditCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const formatCreditCard = (value) => {
    return value
      .replace(/\s/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const handleCreditCardChange = (event) => {
    const formattedValue = formatCreditCard(event.target.value);
    setCreditCard(formattedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      creditCard,
      cvv,
      expiryDate,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Payment Details */}
      <fieldset className="">
        <legend className="text-2xl font-semibold">Payment Details</legend>
        <div className="mt-4">
          <label
            htmlFor="creditCard"
            className="block text-sm font-medium text-gray-700"
          >
            Credit Card Number:
          </label>
          <input
            type="text"
            id="creditCard"
            name="creditCard"
            pattern="\d{4} \d{4} \d{4} \d{4}"
            maxLength="19"
            placeholder="1234 5678 9123 1234"
            title="Please enter a 16-digit credit card number"
            required
            value={creditCard}
            onChange={handleCreditCardChange}
            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-3xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className=" flex justify-between items-center space-x-4">
           <div className="mt-4 w-full">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700"
          >
            CVV:
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            pattern="\d{3}"
            maxLength="3"
            placeholder="123"
            required
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-3xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div className="mt-4 w-full">
          <label
            htmlFor="expiryDate"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Expiry:
          </label>
          <input
            type="month"
            id="expiryDate"
            name="expiryDate"
            required
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-3xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        </div>
       
      </fieldset>
    </form>
  );
};

export default PaymentSection;
