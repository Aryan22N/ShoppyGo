import React from "react";
import Image from "next/image";
import Heroimg from "../imgs/featured.png";

const Hero = () => {
  return (
    <div className="relative aspect-[3/1] mb-12 max-w-[1080px] mx-auto mt-5">
      <Image src={Heroimg} alt="Shopify Logo" className="fill  " />
    </div>
  );
};

export default Hero;
