import React from "react";
import { BsX, BsChevronExpand } from "react-icons/bs";

const MobileFilter = ({ showFilters, setShowFilters }) => {
  return (
    <div
      className={`bg-white w-screen h-screen pt-16 px-8 fixed top-0 left-0  
      transition duration-300 overflow-hidden
      ${
        showFilters
          ? "translate-x-0 translate-y-0"
          : "-translate-x-full -translate-y-full"
      }
      `}
    >
      <button
        onClick={() => setShowFilters(false)}
        className="flex items-center ml-auto uppercase text-xs font-bold"
      >
        close filter <BsX className="w-6 h-6" />
      </button>
      <div className="mt-8">
        <ul className="mr-12 flex flex-col  uppercase text-sm ">
          <li className="flex items-center justify-between border-b border-gray-200 py-4 cursor-pointer">
            brands <BsChevronExpand className="w-6 h-6 " />
          </li>
          <li className="flex items-center justify-between border-b border-gray-200 py-4 cursor-pointer">
            pret <BsChevronExpand className="w-6 h-6 " />
          </li>
          <li className="flex items-center justify-between border-b border-gray-200 py-4 cursor-pointer">
            marime <BsChevronExpand className="w-6 h-6 " />
          </li>
          <li className="flex items-center justify-between border-b border-gray-200 py-4 cursor-pointer ">
            <select className="w-full py-2 uppercase appearance-none ring-1 ring-gray-200 px-4 space-y-4">
              <option className="h-full">relevance</option>
              <option className="h-full">name, a to z</option>
              <option className="h-full">name, z to a</option>
              <option className="h-full">price, low to high</option>
              <option className="h-full">price,high to low</option>
            </select>
            <BsChevronExpand className="w-6 h-6 " />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileFilter;
