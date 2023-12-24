import Image from "next/image";
import Link from "next/link";
import { User, Heart, ShoppingBag, ArrowDown, Menu } from "react-feather";
import Searchbar from "./Searchbar";
import PopoverContent from "./Popovercontent";
import Menubar from "./Menubar";
import Authorization from "@/app/(root)/(auth)";

const TopBar = () => {
  return (
    <nav className="fixed z-30 flex w-full items-center justify-between max-w-screen-2xl shadow-sm bg-ghost-10">
      <div className="flex items-center w-full px-8 justify-between md:justify-start">
        <div className="absolute p-4 left-2 top-0 z-50">
          <Menubar />
        </div>

        <div className="flex items-center justify-center md:justify-start m-auto">
          <Link href={"/"} className="z-50 ">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={74}
              height={74}
              loading="eager"
              priority
              className="rounded-full bg-transparent"
            />
          </Link>
        </div>

        <div className="hidden  md:flex items-center justify-end w-full gap-4">
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              <span>PRODUCTS</span>
              <ArrowDown width={12} />
            </div>
          </div>

          <Link href="/track-order">
            <p className="text-light-1">TRACK YOUR ORDER</p>
          </Link>

          <div className="flex items-center gap-4">
            <Searchbar />
            <div className="relative">
              <PopoverContent icon={<Heart />} title="Favorites">
                <p>Your favorite items go here.</p>
              </PopoverContent>
              <div className="absolute top-1 -right-2 w-4 h-4 bg-[#229099] rounded-full p-1 z-10 flex items-center justify-center ">
                <span className="text-xs text-ghost-10">3</span>
              </div>
            </div>
            <PopoverContent icon={<ShoppingBag />} title="Favorites">
              <p>Your favorite items go here.</p>
            </PopoverContent>
          </div>

          <div className="border-l-2 border-l-slate-200 h-6 rounded-full"></div>

          <div className="relative group">
            <Link href={"?flow=auth"}>
              <div className="bg-slate-200 p-2 flex  items-center justify-center rounded-tl-2xl rounded-tr-3xl rounded-bl-3xl rounded-br-xl cursor-pointer">
                <User width={16} />
              </div>
            </Link>
          </div>
          <Authorization />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
