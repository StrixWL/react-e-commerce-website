import React, { useState } from "react";
import CountrySelect from "./contact/CountrySelect";

const DeliverySection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    apartment: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div>
      <div className="">
        <h1 className="text-2xl mb-3 font-semibold">Delivery</h1>

        <div className="mb-4">
          <CountrySelect />
        </div>

        <form onSubmit={handleSubmit}>
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
                id="firstName"
                className={`mt-1 block w-full px-3 py-3 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-3xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter a first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
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
                id="lastName"
                className={`mt-1 block w-full px-3 py-3 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-3xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter a last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
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
              className={`mt-1 block w-full px-3 py-3 border ${
                errors.address ? "border-red-500" : "border-gray-300"
              } rounded-3xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter an address"
            />
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">{errors.address}</p>
            )}
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
                id="postalCode"
                className={`mt-1 block w-full px-3 py-3 border ${
                  errors.postalCode ? "border-red-500" : "border-gray-300"
                } rounded-3xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Enter a postal code"
              />
              {errors.postalCode && (
                <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
              )}
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
                className={`mt-1 block w-full px-3 py-3 border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } rounded-3xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter a city"
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
              )}
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
              className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-3xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              value={formData.apartment}
              onChange={handleChange}
              placeholder="Enter details"
            />
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default DeliverySection;
