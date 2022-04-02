import React from "react";
import SingleProduct from "./SingleProduct";
import { BsChevronCompactDown, BsChevronExpand } from "react-icons/bs";
import { useState } from "react";

import productPic from "../public/static/vans.jpg";
import MobileFilter from "./MobileFilter";
import BreadCrumb from "./BreadCrumb";
const Category = ({ cat = "sneakers" }) => {
  const [showMore, setShowMore] = useState();
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div>
      {/* Bread crumb */}
      <BreadCrumb categories={["acasa", "sneakers", "sneakers barbati"]} />
      <h2 className="font-bold text-2xl uppercase py-8 text-center text-[#1b1b1b]">
        {cat === "men" && "Sneakers barbati"}
        {cat === "women" && "Sneakers femei"}
        {cat === "sneakers" && "Sneakers"}
      </h2>
      <div className="mx-auto max-w-7xl text-sm leading-6">
        <>
          {cat === "men" && (
            <p>
              Why do men love sneakers? Chiar dacă nu există o explicație
              științifică pentru acest fenomen, încălțămintea, în special
              sneakerșii de bărbați, întotdeauna vor atrage atenția prin culori,
              modele, detalii și mai ales prin confortul pe care îl oferă –
              aspecte care îi vor face pe aceștia să iubească fiecare pereche pe
              care și-o achiziționează! Indiferent dacă este vorba de un model
              de sneakers Puma pentru bărbați sau de ultimii sneakers Nike,
              perechile din stocul Sneaker Industry sunt potrivite chiar dacă
              ești sau nu un sneakerhead declarat.
            </p>
          )}
          {cat === "women" && (
            <p>
              Cine spune că fetele nu pot avea o colecție personală de
              sneakers?! Mărcile de top lansează întotdeauna modele special
              destinate iubitoarelor de adidasi, femei care vor să fie cool, iar
              Sneaker Industry aduce o parte dintre ele mai aproape. În cele
              două magazine fizice – din Cluj și București, dar și în shop-ul
              online, poți găsi sneakers de dama, perechi emblematice de la
              branduri, precum Nike, Adidas, Vans, New Balance, selectate pentru
              un adevărat sneakerhead și nu numai.
            </p>
          )}
          {cat !== "sneakers" && (
            <BsChevronCompactDown
              className={`mx-auto h-10 w-10 text-[#1b1b1b] cursor-pointer transition ${
                showMore ? "rotate-180" : "rotate-0"
              } `}
              onClick={() => setShowMore((prevState) => !prevState)}
            />
          )}
        </>

        <div
          className={`flex  flex-col gap-4   overflow-x-hidden transition ease-linear ${
            showMore ? "max-h-full" : "max-h-0"
          } `}
        >
          <h5 className="w-2/3 mx-auto font-bold text-xl text-center">
            {cat === "men" &&
              "3 lucruri de care să ții cont atunci când alegi o pereche de adidași pentru bărbați"}

            {cat === "women" &&
              "Cum să alegi acea pereche potrivită de adidași de femei?"}
          </h5>
          {cat === "men" && (
            <div>
              <ul className="list-disc">
                <li>Comfy?</li>
                <li>Cool? </li>
                <li>Perfect match?</li>
              </ul>
              <p className="text-sm leading-6">
                Sunt trei dintre întrebările pe care ar trebui să ți le pui în
                momentul în care alegi perechea potrivită de sneakers pentru
                tine. Dacă ești pasionat de streetwear și vrei să te bucuri de
                articole cool, Sneaker Industry aduce mai aproape de tine modele
                de adidași pentru bărbați aflate pe wishlist-ul unui pasionat de
                footwear. Astfel, dacă ești în căutare de bocanci, sneakers
                femei sau barbati, Sneaker Industry îți oferă o gamă variată de
                modele actuale pentru ca tu să decizi care este cea mai bună
                pereche de încălțăminte sport, ce merită să fie adăugată în
                colecția ta.
              </p>
            </div>
          )}
          {cat === "women" && (
            <div>
              <ul className="list-decimal mb-4">
                <li>
                  1. <span className="font-bold">Choose the coolest one!</span>
                  Care ți se pare cea mai tare pereche de sneakers de damă în
                  momentul actual, pe care o vrei neapărat în colecția ta?!
                </li>
                <li>
                  2. Se potrivește cu hoodie-ul tău preferat? Gândește-te cu ce
                  articole vestimentare va crea acel{" "}
                  <span className="font-bold">perfect match!</span>
                </li>
                <li className="font-bold">
                  3. Asigură-te că ai ales bine mărimea și că ai consultat size
                  chart-ul brandului înainte!
                </li>
              </ul>
              <p>
                Perechea de adidași de damă potrivită, aceea care merită să facă
                parte din colecția ta de încălțăminte sport, menită să stea la
                loc de cinste; acea pereche de sneakers femei pe care vrei să o
                porți mereu mereu – se află, cu siguranță, în gama de produse
                Sneaker Industry. Din fericire pentru industria de streetwear in
                România aduce in the spotlight adesea, diverse perechi de
                încălțăminte de damă sport, versatile și potrivite pentru fetele
                care se declară a fi atrase de sneakers, dar și pentru cele care
                nu își doresc altceva mai mult decât o pereche de încălțăminte
                confortabilă. Indiferent daca esti in cautare de sneaker barbati
                sau femei, Sneaker Industry iti va pune mereu la dispozitie acea
                pereche de sneakers cool care sa intoarca toate privirile!
              </p>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => setShowFilters(true)}
        className="mt-4 px-4 flex items-center uppercase font-bold text-sm bg-[#1b1b1b] text-white w-full py-4 justify-between"
      >
        filter products <BsChevronExpand className="w-6 h-6 " />
      </button>

      <div className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-3">
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
        <SingleProduct
          width="w-full"
          height="h-72"
          src={productPic}
          brand="vans"
          model="Authentic 44 DX"
          sizes={["36", "36.5", "37", "38", "39", "40", "41"]}
          price="389,00"
        />
      </div>

      <MobileFilter showFilters={showFilters} setShowFilters={setShowFilters} />
    </div>
  );
};

export default Category;
