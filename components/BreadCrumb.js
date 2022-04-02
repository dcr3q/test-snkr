import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const BreadCrumb = ({ categories }) => {
  return (
    <div className="flex  bg-gray-200 justify-center">
      {categories.map((cat, i, arr) => (
        <div
          key={cat}
          className=" uppercase flex items-center justify-center text-xs gap-4 py-4 text-gray-400  
      "
        >
          <p className="hover:underline underline-offset-4 cursor-pointer ml-4">
            {cat}
          </p>
          {i + 1 !== arr.length && <BsArrowRightShort />}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
