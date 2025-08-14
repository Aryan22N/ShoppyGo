"use client";

import React, { use } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";
import { FiTrash2 } from "react-icons/fi";
import AddressForm from "../../components/AddressForm";
import PaymentForm from "../../components/paymentForm";

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

//logic for the price calculation with respect to quantity
const Cartpage = () => {
  let subtotal = 0;
  let total = 0;
  // Calculate subtotal by iterating through cart items
  for (const item of cartItems) {
    subtotal += item.price * item.quantity;
  }
  //logic for discounting the total price
  let discount = 0;
  if (subtotal > 100) {
    discount = 20; // Flat $10 discount for orders over $100
    total = subtotal - discount; // Apply discount to total
  }
  //logic for shipping fee
  let shippingFee = 40; // Flat shipping fee

  if (subtotal > 500) {
    shippingFee = 10; // Free shipping for orders over $200
  }
  if (subtotal > 1500) {
    shippingFee = 0; // Free shipping for orders over $500
  }
  total += shippingFee; // Add shipping fee to total

  //Steps for routing means when we select a step 1 (shopping cart) it will automatically highlight that step and when we select step 2 (shipping address) it will highlight that step and so on.

  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the active step from the URL search parameters, default to step 1 if not present
  const activeStep = parseInt(searchParams.get("step") || "1");

  return (
    <div className="xl:max-w-[1180px] max-w-[1000px] mx-auto ">
      {/* steps(1,2,3) vala part is active selection */}
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
      <div className="flex flex-col lg:flex-row w-full mt-[30px] gap-16 ">
        {/* Steps */}
        <div className="w-full lg:w-7/12 shadow-gray-300 border-0 shadow-lg p-8 rounded-lg text-black flex flex-col gap-8">
          {activeStep === 1 ? (
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between  pb-4"
                >
                  <div className="flex items-center gap-8">
                    <img
                      src={item.images[item.selectedcolor]}
                      alt={item.name}
                      className=" w-32 h-32 bg-gray-50 rounded-lg overflow-hidden relative object-cover shadow-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <div className="flex flex-col">
                        <p className="text-sm text-gray-500">
                          {" "}
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-sm text-gray-500">
                          {" "}
                          Size: {item.selectedsize}
                        </p>
                        <p className="text-sm text-gray-500">
                          color: {item.selectedcolor}
                        </p>
                        <p className="text-lg font-semibold mt-8">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer">
                    <FiTrash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          ) : activeStep === 2 ? (
            <AddressForm />
          ) : activeStep === 3 ? (
            <PaymentForm />
          ) : (
            <p>Please fill the Address to Continue</p>
          )}
        </div>
        {/* Details */}
        {
          <div className="w-full lg:w-5/12 h-max  shadow-gray-300 border-0 shadow-lg p-8 rounded-lg text-black flex flex-col gap-8">
            <h2 className="text-2xl font-semibold mb-4">Cart Details</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-sm">
                <p className="text-gray-700 font-medium text-[16px]">
                  Subtotal
                </p>
                <p className="font-medium">${subtotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-sm">
                <p className="text-gray-700 font-medium text-[16px]">
                  Discount
                </p>
                <p className="font-medium">${discount}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-sm">
                <div className="flex flex-col ">
                  <p className="text-gray-700 font-medium text-[16px]">
                    Shipping Fee
                  </p>
                  <p className="text-gray-500 text:sm w-[200px] mt-1 ">
                    (For no shipping fee subtotal should exceed $1500){" "}
                  </p>
                </div>
                <p className="font-medium">${shippingFee}</p>
              </div>
            </div>

            <div className="w-full border-gray-300 border-b-2"></div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-md font-semibold">
                <p className="text-gray-800">Total</p>
                <p className="font-medium">${total.toFixed(2)}</p>
              </div>
            </div>

            {activeStep === 1 && (
              <button
                className="w-full flex  gap-2 items-center justify-center bg-gray-800 text-white p-2  hover:text-white hover:bg-black transition-all duration-300 rounded-xl cursor-pointer"
                onClick={() => router.push("/cart?step=2", { scroll: false })}
              >
                Continue <GoArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default Cartpage;
