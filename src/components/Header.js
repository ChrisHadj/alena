import React from "react";
import Pic from "../pic/header.jpg";

const Header = () => {
  return (
    <div className="bg-zinc-900 flex justify-center items-center">
      <img src={Pic} alt="header" />

      <div className="absolute text-center text-white font-roboto ">
        <h1 className="lg:text-[20px] text-[16px] lg:tracking-[20px] tracking-[5px]">Mannequin Photographe</h1>
        <p className="text-[32px] lg:mb-[-20px] mb-[-10px] tracking-[15px] lg:text-[72px]">Alena</p>
        <p className="text-[32px] tracking-[15px] lg:text-[72px]">Photography</p>
      </div>
    </div>
  );
};

export default Header;
