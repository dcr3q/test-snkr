import React from "react";
import Image from "next/image";

const SingleProduct = ({
  src,
  brand,
  model,
  sizes,
  price,
  isNew = false,
  width,
  height,
}) => {
  return (
    <div className="shadow-lg ">
      <div className={`relative  mb-4 -z-10 ${width} ${height}`}>
        <Image
          src={src}
          objectFit="cover"
          objectPosition="center"
          alt=""
          layout="fill"
        />
        {isNew && (
          <p className="relative inline uppercase text-sm top-2 left-1 px-6 py-2  bg-white text-[#1b1b1b]">
            nou
          </p>
        )}
      </div>
      <div className="flex flex-col  gap-4 px-2 pb-4">
        <h6 className="font-bold text-[#1b1b1b] text-xl uppercase tracking-wide">
          {brand}
        </h6>
        <div className="text-gray-500">
          <p>{model}</p>
          <p>
            Disponibil:{" "}
            {sizes.map((size, i, arr) => (
              <span key={i}>
                {size}
                {i + 1 === arr.length ? "" : ", "}
              </span>
            ))}
          </p>
        </div>
        <p className="text-lg text-[#1b1b1b]">{price} RON</p>
      </div>
    </div>
  );
};

export default SingleProduct;
