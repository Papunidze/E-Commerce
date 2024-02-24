import React, { useState } from "react";
import { ShoppingBag } from "react-feather";

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="block w-full">
      <ShoppingBag
        fill="black"
        color="white"
        className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer"
        onClick={handleToggle}
      />
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-transparent"
            onClick={handleClose}
          ></div>
          <div className="absolute top-full right-0 mt-2 bg-secondary shadow-lg rounded-lg w-full z-10 transform origin-top 0 animate-fadeIn px-2">
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
        </>
      )}
    </div>
  );
};

export default Cart;
