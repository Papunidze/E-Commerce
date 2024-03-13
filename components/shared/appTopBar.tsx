"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Search, Menu } from "react-feather";
import Cart from "../forms/cart/cart";
import { useSession } from "next-auth/react";
import Me from "../forms/me/me.form";

const TopBar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [hoveredSpan, setHoveredSpan] = useState<String | null>(null);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/CreateUser", label: "Trendy" },
    { href: "/ClientMember", label: "Dresses" },
    { href: "/Member", label: "Accessories" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="block relative ">
      <nav className="container mx-auto flex items-center justify-between  py-4 px-2 lg:px-6  ">
        <div className="hidden items-center gap-4 md:flex ">
          {navItems.map(({ href, label }) => (
            <Link href={href} key={href} className="relative inline-block">
              <span
                className={`font-semibold hover:text-gray-700 ${
                  isActive(href) &&
                  "bg-gradient-to-tl text-transparent from-primary to-primary-light bg-clip-text"
                }`}
                onMouseEnter={() => setHoveredSpan(label)}
                onMouseLeave={() => setHoveredSpan(null)}
              >
                {label}
                <div
                  className={`absolute max-w-8 h-2 rounded-lg bg-gradient-to-tl from-slate-400 to-blue-200 shadow-inner mt-2 ${
                    hoveredSpan === label ? "w-full" : "w-0"
                  } transition-all duration-300`}
                ></div>
              </span>
            </Link>
          ))}
        </div>
        <div className="flex gap-2 items-center justify-center">
          <Menu className="md:hidden block" />
          <h1 className="text-2xl lg:text-3xl font-bold text-primary font-dancing relative cursor-pointer flex items-center lg:px-4 px-2">
            Shopping
            <span
              className="absolute w-full left-0 h-full bg-transparent border-[1px] border-red-200 rounded-full rotate-[5deg]"
              aria-hidden="true"
            ></span>
            <span
              className="absolute w-full left-0 h-full bg-transparent border-[1px]  border-red-200 rounded-full rotate-[10deg]"
              aria-hidden="true"
            ></span>
          </h1>
        </div>

        <div className="ml-2 md:ml-0 flex items-center relative">
          <div className="border border-gray-200 flex rounded-full px-1 py-1 lg:py-2 lg:px-2 gap-1 md:gap-2 items-center relative">
            <Search
              strokeWidth={2}
              color="black"
              className="w-4 h-4 lg:w-6 lg:h-6 ml-1"
            />
            <input
              placeholder="Search"
              className="outline-none font-sans font-semibold flex-grow ml-1 md:ml-2 text-sm md:text-base w-36 lg:w-full"
            />
            <div className="px-1 md:px-2 border-l border-gray-200  md:block hidden">
              <Cart />
            </div>
            <span
              className="md:flex hidden absolute right-0 top-0 bg-gradient-to-tl from-slate-400 to-blue-200 w-4 h-4 md:w-5 md:h-5 rounded-full text-xs md:text-sm text-white font-semibold  items-center justify-center -translate-y-1 shadow-md"
              aria-hidden="true"
            >
              4
            </span>
          </div>
          <div className="group md:block hidden ml-2 ">
            {status === "authenticated" ? (
              <Me session={session} />
            ) : (
              <Link
                href="?flow=sign-in"
                className="bg-gray-200 p-1 lg:p-2 flex items-center justify-center rounded-tl-2xl rounded-tr-3xl rounded-bl-3xl rounded-br-xl cursor-pointer outline-none"
              >
                <User strokeWidth={2} className="w-4 lg:w-6 lg:h-6" />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
