import React from "react";
import Image from "next/image";
import footerImg from "../public/static/footer.jpg";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiYoutubeLine,
} from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="mt-8 bg-[#1b1b1b] overflow-hidden ">
      <div className="relative w-full h-52 bg-black flex items-center justify-center">
        <Image
          style={{ opacity: "0.25" }}
          src={footerImg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="footer - nike background"
        />
        <div className="relative text-white flex items-center justify-between w-2/3">
          <RiFacebookCircleLine className="w-20 h-20 cursor-pointer hover:text-white/70 hover:scale-105" />
          <RiYoutubeLine className="w-20 h-20 cursor-pointer hover:text-white/70 hover:scale-105" />
          <RiInstagramLine className="w-20 h-20 cursor-pointer hover:text-white/70 hover:scale-105" />
        </div>
      </div>
      <div className="p-8 mt-8 overflow-x-hidden text-white uppercase flex  justify-between lg:max-w-4xl mx-auto">
        <div className="flex gap-8 ">
          <div className="h-full bg-white w-px" />
          <div>
            <p className="mb-4 cursor-pointer hover:font-bold">cont</p>
            <ul className="text-sm space-y-2">
              <li className="cursor-pointer hover:text-white/50">contul meu</li>
              <li className="cursor-pointer hover:text-white/50">
                inregistreza-te
              </li>
              <li className="cursor-pointer hover:text-white/50">cum comand</li>
              <li className="cursor-pointer hover:text-white/50">livrare</li>
              <li className="cursor-pointer hover:text-white/50">
                formular retur
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-8 ">
          <div className="h-full bg-white w-px" />
          <div>
            <p className="mb-4 cursor-pointer hover:font-bold">legal</p>
            <ul className="text-sm space-y-2">
              <li className="cursor-pointer hover:text-white/50">
                termeni si conditii
              </li>
              <li className="cursor-pointer hover:text-white/50">
                regulament concurs
              </li>
              <li className="cursor-pointer hover:text-white/50">
                politica de confidentialitate
              </li>
              <li className="cursor-pointer hover:text-white/50">
                politica de cookie
              </li>
              <li className="cursor-pointer hover:text-white/50">plata</li>
              <li className="cursor-pointer hover:text-white/50">anpc</li>
              <li className="cursor-pointer hover:text-white/50">
                platoforma sol
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="h-full bg-white w-px" />
          <div>
            <p className="mb-4 cursor-pointer hover:font-bold">contact</p>
            <ul className="text-sm space-y-2">
              <li className="cursor-pointer hover:text-white/50">
                bucuresti, romania
              </li>
              <li className="cursor-pointer hover:text-white/50">
                program de lucru:
              </li>
              <li className="cursor-pointer hover:text-white/50">
                luni - vineri
              </li>
              <li className="cursor-pointer hover:text-white/50">
                09:00 - 17:00
              </li>
              <li className="cursor-pointer hover:text-white/50">
                contact@sneakerindustry.ro
              </li>
              <li className="cursor-pointer hover:text-white/50">
                +4 0000 000 000
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="bg-white py-8 pl-8">
        ©2022 Sneaker Industry. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
