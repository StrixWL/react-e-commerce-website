import React from 'react'
import CountrySelect from './contact/CountrySelect'

const DeliverySection = () => {
  return (
    <div>
       {/* Section de livraison */}
       <div className="">
          <h1 className="text-2xl mb-3  font-semibold">Delivery</h1>

          <div className="mb-4">
            <CountrySelect />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="first-name"
              >
                First name
              </label>
              <input
                type="text"
                id="first-name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                required
                placeholder="Enter a first name"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="last-name"
              >
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                required
                placeholder="Enter a last name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              required
              placeholder="Enter an address"
            />
          </div>
          <div className="mb-4 flex justify-between items-center space-x-4">
            <div className="w-full">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="postal"
              >
                Postal code
              </label>
              <input
                type="number"
                id="postal"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                required
                placeholder="Enter a postal code"
              />
            </div>
            <div className="w-full">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="city"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                required
                placeholder="Enter a city"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="apartment"
            >
              Apartment, suite, etc. (optional)
            </label>
            <input
              type="text"
              id="apartment"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="Enter details"
            />
          </div>
        </div>
    </div>
  )
}

export default DeliverySection
