import Image from "next/image";
import Link from "next/link";
import { User, Heart, ShoppingBag, ArrowDown, Menu } from "react-feather";
import Searchbar from "./Searchbar";
import PopoverContent from "./Popovercontent";
import Menubar from "./Menubar";
import Authorization from "@/app/(root)/(auth)";

const TopBar = () => {
  return (
    <nav className="fixed top-2 z-30 flex w-full items-center justify-between max-w-screen-2xl shadow-sm">
      <div className="flex items-center  w-full px-8 justify-between">
        <Menubar />
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
          <Link href={"/"} className=" z-50">
            <Image
              src={"/assets/logo.png"}
              alt="Logo"
              width={55}
              height={10}
              layout="fixed"
            />
          </Link>
        </div>

        <div className=" hidden  md:flex items-center space-x-4 gap-6">
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              <span>PRODUCTS</span>
              <ArrowDown width={12} />
            </div>
          </div>

          <Link href="/track-order">
            <p className="text-light-1">TRACK YOUR ORDER</p>
          </Link>

          <div className="flex space-x-6 items-center">
            <Searchbar />
            <div className="relative">
              <PopoverContent icon={<Heart />} title="Favorites">
                <p>Your favorite items go here.</p>
              </PopoverContent>
              <div className="absolute top-1 -right-2 w-4 h-4 bg-[#229099] rounded-full p-1 z-10 flex items-center justify-center ">
                <span className="text-xs text-white">3</span>
              </div>
            </div>
            <PopoverContent icon={<ShoppingBag />} title="Favorites">
              <p>Your favorite items go here.</p>
            </PopoverContent>
          </div>

          <div className="border-l-2 border-l-slate-100 h-6 rounded-full"></div>

          <div className="relative group">
            <Link href={"?flow=auth"}>
              <div className="bg-slate-100 flex p-2 items-center justify-center rounded-tl-2xl rounded-tr-3xl rounded-bl-3xl rounded-br-xl cursor-pointer">
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
