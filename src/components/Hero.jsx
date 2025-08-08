import React from "react";
import Image from "next/image";
import { Hero } from "../../public/featured.png";

const Hero = () => {
  return (
    <div>
      <Image src={Hero} alt="Shopify Logo" />
    </div>
  );
};

export default Hero;
