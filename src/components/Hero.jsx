import React from "react";
import Image from "next/image";
import Heroimg from "../../public/Hero.png";

const Hero = () => {
  return (
    <div>
      <Image
        src={Heroimg}
        alt="Shopify Logo"
        className="max-w-[980px] mx-auto my-8"
      />
    </div>
  );
};

export default Hero;
