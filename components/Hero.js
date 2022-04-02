import React from "react";
import { useState } from "react";

const Hero = () => {
  const [images, setImages] = useState([
    "/static/hero1.jpg",
    "/static/hero2.jpg",
    "/static/hero3.jpg",
    "/static/hero4.jpg",
  ]);
  console.log(images[0]);
  return (
    <article className="h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[80vh] -ml-4 -mr-4  mb-4">
      <div
        className={`w-full h-full bg-[url('/static/hero1.jpg')] bg-cover flex items-center justify-center bg-center`}
      >
        {/* <img
          className="max-h-[85vh] w-full object-cover"
          src="/static/hero1.jpg"
          alt=""
        /> */}
        <button className=" uppercase bg-[#333] text-white py-2 px-4 cursor-pointer  outline-2 outline outline-[#333] outline-offset-1 hover:bg-[#1b1b1b] ">
          shop now
        </button>
      </div>
    </article>
  );
};

export default Hero;
