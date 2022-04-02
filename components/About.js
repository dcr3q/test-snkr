import React from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="flex flex-col gap-8  lg:max-w-3xl mx-auto">
      <div className="flex flex-col gap-4">
        <h5 className="font-bold text-xl text-center">MAGAZIN SNEAKERS</h5>
        <p className="leading-7">
          Sneaker Industry aduce în același loc adidași, sneakers, bocanci – mai
          exact, tot ce ține de footwear, articole vestimentare ale celor mai
          noi colecții și numeroase accesorii – toate adunate într-un magazin
          sport online!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="font-bold text-xl text-center">
          CELE MAI COOL ARTICOLE DE STREETWEAR – FII UP-TO-DATE CU SNEAKER
          INDUSTRY
        </h5>
        <p className="leading-7">
          Dacă ești în căutarea unui magazin sport, București sau Cluj sunt două
          dintre orașele în care Sneaker Industry are locații fizice. Pasionații
          pot vedea detaliile fiecărui model de sneaker și se pot bucura de o
          experiență diferită într-un magazin special destinat streetwear-ului.
        </p>
      </div>
      <BsChevronCompactDown
        className={`mx-auto h-10 w-10 text-[#1b1b1b] cursor-pointer transition ${
          showMore ? "rotate-180" : "rotate-0"
        } `}
        onClick={() => setShowMore((prevState) => !prevState)}
      />

      <div
        className={`flex  flex-col gap-4 overflow-x-hidden transition ease-linear ${
          showMore ? "max-h-full" : "max-h-0"
        } `}
      >
        <h5 className="font-bold text-xl text-center">
          DE CE UN SNEAKER STORE?
        </h5>
        <p className="leading-7">
          Simplu! Ce poate fi mai frumos decât să ai o mulțime de elemente de
          streetwear într-un singur loc. Brandurile tale preferate, cu
          siguranță, se află pe lista Sneaker Industry! Descoperă într-un singur
          loc articole vestimentare noi, cei mai fresh sneakers și cele mai tari
          accesorii! Creează outfit-uri cool și fii mereu în trend! Indiferent
          dacă îți dorești o pereche de Adidas Superstar, un beanie Carhartt,
          bocanci DR. Martens sau Nike Air Force – diverse modele și multe alte
          produse ale brandurilor de top, se află pe lista Sneaker Industry.
        </p>
      </div>
    </section>
  );
};

export default About;
