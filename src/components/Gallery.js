import React from "react";
import IMAGES from "./Gallery/index.js";

const Gallery = () => {
  return (
    <>
      <div>
        <h1 className="flex justify-center text-[80px]">Gallery</h1>
      </div>

      <div className="m-[50px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 object-contain hover:object-scale-down">
        <img className="pt-[10px]" src={IMAGES.camion} alt="" />
        <img className="pt-[10px]" src={IMAGES.cimetiere} alt="" />
        <img className="pt-[10px]" src={IMAGES.dark} alt="" />
        <img className="pt-[10px]" src={IMAGES.moscou} alt="" />
        <img className="pt-[10px]" src={IMAGES.robeDark} alt="" />
        <img className="pt-[10px]" src={IMAGES.rougeBar} alt="" />
        <img className="pt-[10px]" src={IMAGES.roseblack} alt="" />
        <img className="pt-[10px]" src={IMAGES.rue} alt="" />
        <img className="pt-[10px]" src={IMAGES.escalier} alt="" />
      </div>
    </>
  );
};

export default Gallery;
