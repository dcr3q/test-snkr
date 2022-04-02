import React from "react";
import Image from "next/image";
import latestProd from "../public/static/latest-prod-1.jpg";
const LatestProducts = () => {
  return (
    <div className="overflow-hidden ">
      <div className="relative w-screen  my-8 h-[70vh] bg-gray-400 -mx-4">
        <Image
          src={latestProd}
          alt="latest products"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/75 w-1/2  flex items-center justify-center flex-col gap-2 p-4 outline outline-1 outline-white/75 outline-offset-2 md:text-xl lg:text-3xl">
          <p className="uppercase">check our</p>
          <p className="uppercase font-bold">latest products</p>
          <button className="bg-[#1b1b1b] text-white uppercase px-8 py-2 text-sm hover:bg-black/75">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
