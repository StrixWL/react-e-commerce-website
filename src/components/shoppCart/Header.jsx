import React from "react";

const Header = ({setShowCart}) => {
  return (
    <div>
      <header className="flex items-center justify-between">
        <h2
          className="text-[30px] font-bold text-gray-900"
          id="slide-over-title"
        >
          Your Cart
        </h2>
        <div className="ml-3 flex h-7 items-center">
          <button
            type="button"
            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
            onClick={() => setShowCart(false)}
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Close panel</span>
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </header>
      <div className="flex justify-between py-4 text-[12px] font-semibold text-slate-500 tracking-wider border-b-2 w-full">
        <div className="">PRODUCT</div>
        <div className="">TOTAL</div>
      </div>
    </div>
  );
};

export default Header;
