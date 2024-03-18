import Image from "next/image";
import HomeImg from "@/public/assets/home.svg";

export default function Home() {
  return (
    <div className="flex w-full items-center p-2 flex-col md:flex-row gap-3 h-[calc(100vh_-_10rem)]">
      <div className="flex items-start flex-col justify-center gap-2 w-full mt-5">
        <h1 className="font-dancing font-semibold text-primary text-5xl">
          Trendy Collection
        </h1>
        <h1 className="font-sans font-bold text-5xl">
          Let`s Create 🔥 Your Own Style
        </h1>
        <h4 className="font-sans text-gray-400 font-semibold">
          Style is something of us already has, all we need to do is find it.
          So, let`s find it out
        </h4>
        <button className="button primary rounded-full">Start Shopping</button>
      </div>
      <div className="flex-[1 100%] hidden md:block">
        <Image
          src={HomeImg}
          alt="home"
          width={500}
          height={500}
          loading="lazy"
          className="object-cover w-full rounded-lg"
        />
      </div>
    </div>
  );
}
