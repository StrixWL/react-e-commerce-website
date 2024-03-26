import React, { useState } from 'react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (validateEmail(emailValue) || emailValue === '') {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setEmailError('Email is required.');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    console.log('Submitted email:', email);
    console.log('Subscribe to offers:', subscribe);
  };

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <div className="contact">
          <div>
            <h1 className="text-2xl mb-3 -mt-4 font-semibold">Contact</h1>
          </div>
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email or mobile phone number
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@example.com"
                value={email}
                onChange={handleEmailChange}
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-3xl text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                required
              />
              {emailError && <p className="text-red-500 text-xs ">{emailError}</p>}
            </div>

            <div className="flex items-start mb-4">
              <div className="flex items-center h-5">
                <input
                  id="offers"
                  type="checkbox"
                  checked={subscribe}
                  onChange={(e) => setSubscribe(e.target.checked)}
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
      </form>
    </section>
  );
};

export default ContactSection;
