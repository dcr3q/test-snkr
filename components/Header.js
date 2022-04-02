import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  BsBox,
  BsArrowRepeat,
  BsSearch,
  BsPerson,
  BsCart2,
} from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import Backdrop from "./Backdrop";
import Nav from "./Nav";
import Search from "./Search";

const HeaderItem = ({ Icon, text, clicked, isOnNav = true }) => {
  return (
    <div
      className="uppercase text-sm cursor-pointer flex gap-2 items-center group 
  "
      onClick={clicked}
    >
      <Icon
        className={`${
          isOnNav ? "group-hover:text-gray-600" : "group-hover:text-gray-200"
        } h-8 w-8 md:h-5 md:w-5`}
      />
      <p
        className={`${
          isOnNav ? "group-hover:text-gray-600" : "group-hover:text-gray-200"
        } hidden md:block`}
      >
        {text}
      </p>
    </div>
  );
};

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState();
  const openNav = () => {
    setIsNavOpen(true);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      <div className="bg-black text-white uppercase font-medium text-xs flex items-center justify-center mx-0 xl:justify-between gap-8 py-2.5 px-8 overflow-x-hidden mb-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <BsBox className="w-5 h-5" />
            <p>livrare gratuita peste 450 ron</p>
          </div>
          <div className="flex items-center gap-2">
            <BsArrowRepeat className="w-5 h-5" />
            <p>retur in 14 zile</p>
          </div>
        </div>
        <div className="hidden xl:flex items-center gap-8 ">
          <HeaderItem
            isOnNav={false}
            clicked={() => setIsSearchOpen(true)}
            Icon={BsSearch}
            text="cauta"
          />
          <HeaderItem isOnNav={false} Icon={BsPerson} text="autentificare" />
          <HeaderItem isOnNav={false} Icon={BsCart2} text="cos" />
        </div>
      </div>
      {/* <LocalShippingIcon /> */}
      <header className="flex pb-4 px-4 ">
        <div className="cursor-pointer mr-auto items-center flex-1 flex justify-center">
          <HiMenu onClick={openNav} className="w-8 h-8 mr-auto" />
        </div>
        <Link href="/">
          <a>
            <div>
              <Image src="/static/logo.png" width="80" height="80" alt="" />
            </div>
          </a>
        </Link>
        <div className="xl:hidden flex items-center justify-end gap-6 flex-1 mr-auto">
          <HeaderItem
            clicked={() => setIsSearchOpen(true)}
            Icon={BsSearch}
            text="cauta"
          />
          <HeaderItem Icon={BsPerson} text="autentificare" />
          <HeaderItem Icon={BsCart2} text="cos" />
        </div>
        <div className="mr-auto flex-1 items-center justify-end hidden xl:flex ">
          <ul className="flex items-center  gap-6 uppercase tracking-wide ">
            <li className="customUnderline ">Sneakers men</li>
            <li className="customUnderline ">Sneakers women</li>
            <li className="customUnderline ">clothing</li>
            <li className="customUnderline ">accesories</li>
          </ul>
        </div>
      </header>
      <Nav isNavOpen={isNavOpen} closeNav={closeNav} />
      <Backdrop show={isNavOpen} clicked={closeNav} />
      {isSearchOpen && <Search onClick={() => setIsSearchOpen(false)} />}
    </>
  );
};

export default Header;
