import React from "react";
import { BsSearch, BsX } from "react-icons/bs";
import Backdrop from "./Backdrop";

const Search = ({ onClick }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/90">
      <BsX
        onClick={onClick}
        className="text-white ml-auto w-10 h-10 mr-8 cursor-pointer translate-y-8"
      />
      <div className="w-full h-full flex items-center justify-center ">
        <div className="w-[90%]  flex items-center z-50 border-b-2 border-white">
          <input
            className="bg-transparent w-full p-2 focus-within:outline-0 placeholder:text-white text-white"
            type="text"
            placeholder="Cauta Produse"
          />
          <BsSearch className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Search;
