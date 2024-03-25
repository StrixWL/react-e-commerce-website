import React from "react";

const TrackingOrder = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 z-0">
        <header className="text-center mb-12 mt-12">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold">Track Your Order</h1>
        </header>
      <section className="bg-white p-8 border-2 md:px-20 px-2 w-full max-w-4xl  ">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="orderNumber"
                  className="block text-sm font-normal text-gray-700 mb-2"
                >
                  Order Number
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  name="orderNumber"
                  required
                  className="border border-black text-gray-900 sm:text-sm  block w-full p-2.5"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact"
                  className="block text-sm font-normal text-gray-700 mb-2"
                >
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  className="border border-black text-gray-900 sm:text-sm  block w-full p-2.5"
                />
              </div>
              <button
                type="submit"
                className="w-1/3 bg-black text-white  px-4 py-2"
              >
                Track
              </button>
            </form>
          </div>
          <div className="text-center flex mb-8 justify-center items-center md:flex-col md:mx-8 md:mb-0">
            <span className="inline-block mx-4 my-2 border-l-2 border-gray-300 h-8"></span>
            <span className="text-gray-400">OR</span>
            <span className="inline-block mx-4 my-2 border-l-2 border-gray-300 h-8"></span>
          </div>
          <div className="md:w-1/2">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="trackingNumber"
                  className="block text-sm font-normal text-gray-700 mb-2"
                >
                  Tracking Number
                </label>
                <input
                  type="text"
                  id="trackingNumber"
                  name="trackingNumber"
                  required
                  className="border border-black text-gray-900 sm:text-sm  block w-full p-2.5"
                />
              </div>
              <button
                type="submit"
                className="w-1/3 bg-black text-white  px-4 py-2"
              >
                Track
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackingOrder;
