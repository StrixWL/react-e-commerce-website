import React from 'react'

const ContactSection = () => {
  return (
    <div>
       {/* Section de contact */}
       <div className="contact">
          <div className="">
            <h1 className="text-2xl mb-3 -mt-4 font-semibold">Contact</h1>
          </div>
          <div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
                Email or mobile phone number
              </label>
              <input
                type="email"
                id="email"
                placeholder='example@example.com'
                className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-3xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="flex items-start mb-4">
              <div className="flex items-center h-5">
                <input
                  id="offers"
                  type="checkbox"
                   
                  className="focus:ring-black h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="offers" className="font-medium text-gray-700">
                  Email me with news and offers
                </label>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactSection
