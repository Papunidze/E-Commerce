"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, ShoppingBag, Search } from "react-feather";

const TopBar = () => {
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
    <header className="">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6  ">
        <div className="flex items-center gap-4">
          {navItems.map(({ href, label }) => (
            <Link href={href} key={href} className="relative inline-block">
              <span
                className={`text-gray-700 font-bold hover:text-gray-700 ${
                  isActive(href) &&
                  "bg-gradient-to-tl text-transparent from-primary to-primary-light bg-clip-text"
                }`}
                onMouseEnter={() => setHoveredSpan(label)}
                onMouseLeave={() => setHoveredSpan(null)}
              >
                {label}
                <div
                  className={`absolute w-8 h-2 rounded-lg bg-gradient-to-tl from-blue-400 to-blue-200 shadow-inner ${
                    hoveredSpan === label ? "opacity-100" : "opacity-0"
                  } animate-bounce`}
                ></div>
              </span>
            </Link>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-primary font-dancing relative px-4 cursor-pointer">
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
        <div className="ml-4 flex gap-2 items-center justify-center">
          <div className="border-2 border-gray-200 flex rounded-full px-2 py-2 gap-2 items-center relative">
            <Search strokeWidth={2.5} color="black" />
            <div className="flex gap-2">
              <input
                placeholder="search"
                className="outline-none font-sans font-semibold  "
              />
              <div className="px-2 border-l-2 border-gray-200 relative">
                <ShoppingBag fill="black" color="white" />
              </div>
            </div>
            <span
              className="absolute right-0 top-0 bg-gradient-to-tl from-blue-400 to-blue-200 w-5 h-5 rounded-md text-white font-semibold text-center flex items-center justify-center -translate-y-2 shadow-md"
              aria-hidden="true"
            >
              4
            </span>
          </div>
          <div className="group">
            <Link
              href="?flow=auth"
              className="bg-gray-200 p-2 flex items-center justify-center rounded-tl-2xl rounded-tr-3xl rounded-bl-3xl rounded-br-xl cursor-pointer"
            >
              <User width={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
