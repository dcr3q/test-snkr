import React from "react";
import BreadCrumb from "./BreadCrumb";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import LatestProducts from "./LatestProducts";

const imagesPath = [
  "/static/dx/auth44dx1.jpg",
  "/static/dx/auth44dx2.jpg",
  "/static/dx/auth44dx3.jpg",
  "/static/dx/auth44dx4.jpg",
  "/static/dx/auth44dx5.jpg",
  "/static/dx/auth44dx6.jpg",
  "/static/dx/auth44dx7.jpg",
  "/static/dx/auth44dx8.jpg",
];

const images = imagesPath.map((i) => ({
  original: i,
  thumbnail: i,
  thumbnailClass: "custom-thumbnail",
}));

const Product = () => {
  return (
    <div>
      <BreadCrumb
        categories={["acasa", "femei", "incaltaminte femei", "authentic 44 dx"]}
      />
      <div className="flex flex-col lg:flex-row  mt-4 lg:mx-4 gap-8 ">
        <div>
          <ImageGallery
            items={images}
            infinite
            lazyLoad
            showThumbnails={true}
            showPlayButton={false}
            autoPlay
            showFullscreenButton={false}
            additionalClass="gallery"
            renderLeftNav={(onClick, disabled) => (
              <LeftNav onClick={onClick} disabled={disabled} />
            )}
            renderRightNav={(onClick, disabled) => (
              <RightNav onClick={onClick} disabled={disabled} />
            )}
          />
        </div>
        <div className="inline-flex flex-col gap-5 flex-1">
          <h1 className="text-xl font-bold uppercase  text-center lg:text-left">
            vans authentic 44 dx
          </h1>
          <p className="capitalize text-xl text-gray-400 text-center lg:text-left">
            epic flame / black / true white
          </p>
          <p className="text-xl text-red-700 uppercase font-bold text-center lg:text-left">
            389,00 ron
          </p>
          <div className="flex gap-8 mb-8 mx-4 lg:mx-0">
            <select
              className="flex-1 w-full ring-1 ring-gray-200 py-4 px-2"
              name="sizes"
              id="sizes"
            >
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
            </select>
            <button className="text-white bg-[#1b1b1b] px-6 py-2 uppercase text-sm ">
              adauga in cos
            </button>
          </div>
          <div className="w-full bg-gray-200 h-px" />
          <div className="capitalize space-y-4 mt-4 mx-4 lg:mx-0">
            <p className="uppercase">descriere</p>
            <p>
              <span className="font-bold">culori: </span>
              rosu / galben / negru
            </p>
            <p>
              <span className="font-bold">materiale: </span>
              materiale textile
            </p>
            <p>
              <span className="font-bold">interior: </span>
              textile
            </p>
            <p>
              <span className="font-bold">talpa: </span>
              cauciuc vulcanizat durabil
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200 h-px my-8" />
      <h6 className="text-4xl text-[#1b1b1b] font-bold uppercase  text-center">
        articole asemanatoare
      </h6>
      <LatestProducts />
    </div>
  );
};

export default Product;
