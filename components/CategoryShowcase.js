import React from "react";
import Image from "next/image";

const CategoryShowcase = ({ categorySrc = "", categoryName = "" }) => {
  return (
    <div className="cursor-pointer relative w-1/5 min-w-[320px]  h-52 flex justify-center -z-10">
      <Image
        alt=""
        src={categorySrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <p className="relative text-white top-40 text-xs md:text-base xl:text-2xl text-shadow uppercase ">
        {categoryName}
      </p>
    </div>
  );
};

export default CategoryShowcase;
