import React from "react";
import { Home, Heart, ShoppingBag, User } from "react-feather";
const iconProps = {
  width: 20,
  strokeWidth: 1,
  className: "cursor-pointer",
};

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism backdrop-blur-lg md:hidden">
      <div className="bg-slate-200 bg-opacity-30 shadow-lg backdrop-blur-2.5 backdrop-filter border-1 border-solid border-opacity-18 rounded-10 p-4">
        <div className="flex items-center justify-around gap-6">
          <Home {...iconProps} />
          <div className="relative">
            <Heart {...iconProps} />
            <div className="absolute top-[-2px] right-[-10px] w-4 h-4 bg-[#229099] rounded-full p-1 z-10 flex items-center justify-center">
              <span className="text-xs text-white">3</span>
            </div>
          </div>
          <ShoppingBag {...iconProps} />
          <User {...iconProps} />
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
