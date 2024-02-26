"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Home, ShoppingBag, User } from "react-feather";
import Cart from "../forms/cart/cart";

const iconProps = {
  size: 20,
};
const BottomBar = () => {
  const pathname = usePathname();

  return (
    <section className="fixed bottom-0 w-full  block md:hidden">
      <div className="w-full p-2 rounded-t-3xl bg-gradient-to-tl from-secondary to-secondary-light">
        <div className="px-3 flex w-full gap-2 items-center justify-between">
          <button className="flex items-center justify-center">
            <Home
              {...iconProps}
              className={`${
                pathname === "/" && "text-primary"
              } hover:text-primary-light`}
            />
            {pathname === "/" && (
              <div
                className={`absolute max-w-8 h-1 rounded-lg bg-gradient-to-tl from-primary to-primary-light shadow-inner mt-1 w-full transition-all duration-300 bottom-2 translate-y-1.5`}
              ></div>
            )}
          </button>
          <Cart
            customStyle={
              "hover:text-primary-light  fill-transparent stroke-accent w-4 h-4"
            }
          />
          <Link href={"?flow=sign-in"}>
            <User {...iconProps} className="hover:text-primary-light" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BottomBar;
