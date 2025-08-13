"use client";

import React, { use } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

//Temporary
const cartItems = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedsize: "m",
    selectedcolor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 5,
    selectedsize: "m",
    selectedcolor: "gray",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 10,
    selectedsize: "m",
    selectedcolor: "green",
  },
];

const Cartpage = () => {
  //Steps for routing means when we select a step 1 (shopping cart) it will automatically highlight that step and when we select step 2 (shipping address) it will highlight that step and so on.

  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the active step from the URL search parameters, default to step 1 if not present
  const activeStep = parseInt(searchParams.get("step") || "1");

  return (
    <div className="xl:max-w-[1180px] max-w-[1000px] mx-auto ">
      <div className="flex flex-col gap-8 item-center text-center justify-center mt-15">
        <h1 className="text-3xl font-medium text-black">Your Shopping Cart</h1>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row justify-center mt-10 items-center gap-8 lg:gap-16">
          {steps.map((step) => (
            <div
              className={`flex items-center gap-2 cursor-pointer font-semibold border-b-2 pb-4 ${
                step.id === activeStep
                  ? "border-gray-800 text-gray-800 "
                  : "border-gray-300 text-gray-400 "
              }`}
              key={step.id}
            >
              <div
                className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                  step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
                } `}
              >
                {step.id}
              </div>
              <div
                className={`${
                  step.id === activeStep ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps & Details */}
      <div className="flex flex-col lg:flex-row w-full mt-[30px] gap-16">
        {/* Steps */}
        <div className="w-full lg:w-7/12 shadow-gray-300 border-0 shadow-lg p-8 rounded-lg text-black flex flex-col gap-8">
          <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
          <div className="flex flex-col gap-4">1</div>
        </div>
        {/* Details */}
        <div className="w-full lg:w-5/12  shadow-gray-300 border-0 shadow-lg p-8 rounded-lg text-black flex flex-col gap-8">
          <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
          <div>
            Something Crazy is going to happen here, like a payment method or
            shipping address.
          </div>
          <button className="w-full flex  gap-2 items-center justify-center bg-gray-800 text-white p-2 rounded-xl cursor-pointer">
            Continue <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
