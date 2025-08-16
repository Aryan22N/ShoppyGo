"use client";

import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import useCartStore from "../store/cartstore.js";
import React, { use } from "react";

const ShoppingCartIcon = () => {
  //global state cartstore use karo kyuki add to cart and remove from cart functionality chahiye
  const { cart } = useCartStore();

  return (
    <Link href="/cart" className="relative flex items-center">
      <IoCartOutline size={20} className=" w-4 h-4 font-extrabold text-black" />
      <span className="absolute -top-3 -right-3 text-gray-600 bg-amber-400 text-center rounded-full font-semibold flex items-center justify-center  px-1 text-xs">
        {cart.length}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
