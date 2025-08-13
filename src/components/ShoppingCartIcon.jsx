"use client";

import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";

import React from "react";

const ShoppingCartIcon = () => {
  return (
    <Link href="/cart" className="relative flex items-center">
      <IoCartOutline size={20} className=" w-4 h-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 text-gray-600 bg-amber-400 text-center rounded-full font-semibold flex items-center justify-center  px-1 text-xs">
        0
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
