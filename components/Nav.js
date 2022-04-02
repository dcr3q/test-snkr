import React from "react";
import { BsSearch, BsChevronRight, BsChevronLeft } from "react-icons/bs";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { useState } from "react";

const Nav = ({ isNavOpen, closeNav }) => {
  const [expandShop, setExpandShop] = useState(false);

  return (
    <>
      <nav
        className={`bg-[#1b1b1b] text-white font-light uppercase tracking-wider h-screen -ml-4 fixed top-0 pt-12 pb-12 pr-8 transition  ease-linear z-20 overflow-x-hidden overflow-y-scroll scrollbar-thumb-gray-700 scrollbar-track-gray-600 scrollbar-thin
        isolate ${isNavOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className=" ml-4 px-4 -mr-4  flex items-center py-2 mb-8 focus-within:bg-black/20  ring-gray-400/10 focus-within:ring-1">
          <input
            className="w-full bg-transparent 
          focus-within:outline-none placeholder:text-gray-500 "
            type="text"
            placeholder="Cauta produse"
          />
          <BsSearch />
        </div>
        <ul>
          <li onClick={closeNav} className="sideNavItem">
            home
          </li>
          <li
            onClick={() => setExpandShop(true)}
            className="flex items-center justify-between sideNavItem"
          >
            shop <BsChevronRight />
          </li>
          <li className="sideNavItem">brands</li>
          <li className="sideNavItem">sales</li>
          <li className="sideNavItem">blog</li>
          <li className="sideNavItem">magazine</li>
          <li className="sideNavItem">contact</li>
        </ul>
        <div className="mt-24 pb-24 text-xs flex flex-col gap-4  border-b border-gray-200/10 pl-8">
          <p className="cursor-pointer hover:text-white/50">livrare</p>
          <p className="cursor-pointer hover:text-white/50">
            termeni si conditii de livrare
          </p>
          <p className="cursor-pointer hover:text-white/50">autentificare</p>
          <p className="cursor-pointer hover:text-white/50">contul meu</p>
          <p className="cursor-pointer hover:text-white/50">retururi</p>
        </div>
        <div className="flex items-center mt-24 justify-around">
          <RiFacebookCircleLine className="w-10 h-10 cursor-pointer hover:text-white/50" />
          <RiYoutubeLine className="w-10 h-10 cursor-pointer hover:text-white/50" />
          <RiInstagramLine className="w-10 h-10 cursor-pointer hover:text-white/50" />
        </div>
        <div
          className={`tracking-normal  px-8 pt-16 space-y-8 text-sm fixed top-0 left-0 bg-white h-[150%] w-full transition duration-300 text-[#1b1b1b] ${
            expandShop ? "translate-x-0" : "translate-x-[150%]"
          }`}
        >
          <button
            onClick={() => setExpandShop(false)}
            className="flex uppercase items-center  gap-2 hover:font-bold"
          >
            <BsChevronLeft /> inapoi
          </button>
          <div>
            <p className="text-base font-bold mb-2 cursor-pointer">sneakers</p>
            <ul className="pl-2 text-xs space-y-2">
              <li className="cursor-pointer">sneakers barbati</li>
              <li className="cursor-pointer">sneakers femei</li>
              <li className="cursor-pointer">sneakers copii</li>
              <li className="cursor-pointer">editii limitate</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
