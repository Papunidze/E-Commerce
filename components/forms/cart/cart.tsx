import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ShoppingBag, Trash2 } from "react-feather";

const Cart = ({ customStyle }: { customStyle?: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="block w-auto">
      <ShoppingBag
        fill="black"
        color="white"
        className={`w-5 h-5 lg:w-6 lg:h-6 cursor-pointer ${customStyle}`}
        onClick={handleToggle}
      />

      <div
        className={`md:hidden flex w-full h-full bg-secondary-light fixed top-0 left-0  flex-col items-center justify-start z-50 transition-all duration-300 ease-linear ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <header className="w-full  flex items-center justify-between p-2 mt-2">
          <ArrowLeft
            size={18}
            className="cursor-pointer"
            onClick={handleClose}
          />
          <h1 className="text-base font-semibold text-accent-light">
            Shopping Cart
          </h1>
          <Trash2 size={18} className="cursor-pointer" />
        </header>

        <main className="w-full h-[calc(100%_-_12rem)]  top-14 absolute  flex flex-col items-center justify-between gap-4 p-4 bg-secondary rounded-3xl z-50">
          test
          <div className="flex items-center justify-center border-gray-300 w-full gap-4">
            <span className=" text-gray-400  font-semibold font-sans text-lg">
              Total Prices:
            </span>
            <span className="text-accent font-semibold font-sans text-lg">
              $2178.95
            </span>
          </div>
        </main>

        <div className="w-full h-40 bg-accent absolute bottom-0 z-40">
          <div className="flex w-full justify-between p-4 h-20 m-auto absolute bottom-10 gap-10 items-center">
            <div className="flex items-center gap-2">
              <span className="text-white text-2xl font-bold">Buy</span>
              <span className="text-gray-600 text-2xl font-bold">Now</span>
            </div>
            <div className="w-18 h-18 p-2 bg-pink-600 rounded-full bg-opacity-20">
              <button className="relative w-18 h-18 p-4  bg-gradient-to-tl from-primary to-primary-light flex items-center justify-center  rounded-full text-white shadow-orange-400">
                <ArrowRight color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:block hidden transition-all duration-300 ease-linear ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`fixed inset-0 bg-transparent ${
            !isOpen ? "hidden" : "block"
          }`}
          onClick={handleClose}
        ></div>
        <div
          className={`absolute top-full right-0 mt-2 bg-secondary shadow-lg rounded-lg w-full z-10 transform origin-top 0 ${
            isOpen ? "animate-fadeIn" : "animate-fadeOut"
          } px-2`}
        >
          <ul className="py-2">
            <li>
              <a
                href="/cart"
                className="block px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200"
              >
                View Cart
              </a>
            </li>
            <li>
              <a
                href="/checkout"
                className="block px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200"
              >
                Checkout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
