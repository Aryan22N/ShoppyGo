import Image from "next/image";

import Hero from "../components/Hero.jsx";
import ProductList from "@/components/ProductList.jsx";
export default function Home() {
  return (
    <div>
      {/* <Image src={Hero} alt="Hero Ing" className="max-w-[1080px]" /> */}
      <Hero />
      <ProductList />
    </div>
  );
}
