import Image from "next/image";
import Link from "next/link";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  ArrowDown,
  Menu,
} from "react-feather";

const TopBar = () => {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between max-w-screen-2xl shadow-sm">
      <div className="flex items-center  w-full px-8 justify-between">
        <Menu width={20} className="cursor-pointer flex md:hidden" />

        <Image
          src={"/assets/logo.png"}
          alt="Logo"
          width={65}
          height={10}
          layout="fixed"
        />

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

          <div className="flex space-x-6">
            <Search width={16} className="cursor-pointer" />
            <div className="relative">
              <Heart width={16} className="cursor-pointer z-20" />
              <div className="absolute top-[-2px] right-[-10px] w-4 h-4 bg-[#229099] rounded-full p-1 z-10 flex items-center justify-center">
                <span className="text-xs text-white">3</span>
              </div>
            </div>
            <ShoppingBag width={16} className="cursor-pointer" />
          </div>

          <div className="border-l-2 border-l-slate-200 h-6 rounded-full"></div>

          <div className="relative group">
            <div className="bg-slate-200 flex p-2 items-center justify-center rounded-tl-2xl rounded-tr-3xl rounded-bl-3xl rounded-br-xl cursor-pointer">
              <User width={16} />
            </div>
          </div>
        </div>

        <div className="flex: md:hidden  ">
          <Search width={16} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
