"use client";

import React, { useState } from "react";
import { Home, Heart, ShoppingBag, Search } from "react-feather";
import SwipeableDrawer from "./SwipeableDrawer";

const iconProps = {
  size: 18,
  strokeWidth: 1,
  className: "cursor-pointer",
};

const BottomBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 z-10 w-full rounded-t-3xl  md:hidden bg-ghost-10 border-2 border-slate-100 shadow-sm">
        <div className="bg-transparent bg-opacity-30 shadow-lg backdrop-blur-2.5 backdrop-filter border-1 border-solid border-opacity-18 rounded-10 p-4">
          <div className="flex items-center justify-around gap-6  w-full ">
            <Home {...iconProps} onClick={() => setIsOpen(true)} />
            <div className="relative">
              <Heart {...iconProps} />
              <div className="absolute top-[-2px] right-[-10px] w-4 h-4 bg-[#229099] rounded-full p-1 z-10 flex items-center justify-center">
                <span className="text-xs text-ghost-10">3</span>
              </div>
            </div>
            <ShoppingBag {...iconProps} />
            <Search {...iconProps} />
          </div>
        </div>
      </div>
      <SwipeableDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-4">test</div>
      </SwipeableDrawer>
    </>
  );
};

export default BottomBar;
