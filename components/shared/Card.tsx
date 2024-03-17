import Image from "next/image";
import React from "react";
import { ArrowRight } from "react-feather";

const Card = () => {
  return (
    <div className="max-w-80 w-full bg-secondary shadow-3xl rounded-md p-2">
      <div className="relative w-full h-80 overflow-hidden rounded-lg bg-secondary-light p-2">
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/pchat-2442c.appspot.com/o/1710669141950.webp?alt=media"
          }
          alt="T-Shirt"
          loading="lazy"
          className="object-contain w-full h-full rounded-3xl"
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-between mt-2 items-center px-1">
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-lg">T-Shirt</span>
          <span className="text-gray-600">450$</span>
        </div>
        <div className="bg-primary rounded-full p-2 cursor-pointer shadow-md">
          <ArrowRight color="white" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Card;
