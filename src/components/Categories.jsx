"use client";
import React, { use } from "react";
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoShirtOutline } from "react-icons/io5";
import { PiFootprintsLight } from "react-icons/pi";
import { Gi3dGlasses } from "react-icons/gi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegHandPaper } from "react-icons/fa";
import { GiSleevelessJacket } from "react-icons/gi";
import { PiDress } from "react-icons/pi";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <RiShoppingBasketLine className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <IoShirtOutline className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <PiFootprintsLight className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Gi3dGlasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <IoBriefcaseOutline className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <PiDress className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <GiSleevelessJacket className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <FaRegHandPaper className="w-4 h-4" />,
    slug: "gloves",
  },
];

const Categories = () => {
  //searchParams is used to get the current URL parameters
  //useRouter is used to navigate to a different URL without reloading the page
  //usePathname is used to get the current pathname of the URL
  //SelectedCategory is used to get the current selected category from the URL parameters

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const SelectedCategory = searchParams.get("category");

  //handleChange function updates the URL with the selected category
  //and navigates to the same page without reloading

  const handleChange = (value) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false }); //scroll: false prevents the page from scrolling to the top when the URL changes
  };
  return (
    <div className="grid grid-cols-2 cursor-pointer sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-200 p-2 rounded-lg mb-4 text-black text-sm">
      {categories.map((category) => (
        <div
          key={category.slug}
          className={`flex items-center gap-[12px]  justify-center  p-2 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ${
            category.slug === SelectedCategory ? "bg-white" : "text-gray-500"
          } `}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
