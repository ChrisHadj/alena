import React from "react";
import ig from "../pic/ig.png";
import fb from "../pic/fb.png";
import twitter from "../pic/twitter.png";

const Footer = () => {
  return (
    <div className="bg-zinc-900 ">
      <div className="flex justify-center flex-row">
        <a href="https://www.instagram.com/alena_kravchenko_/">
          <img src={ig} alt="instgram" />
        </a>
        <a href="https://www.instagram.com/alena_kravchenko_/">
          <img src={fb} alt="instgram" />
        </a>
        <a href="https://www.instagram.com/alena_kravchenko_/">
          <img src={twitter} alt="instgram" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
