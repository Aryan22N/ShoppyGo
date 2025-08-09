import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import SearchBar from "./SearchBar";
import Link from "next/link";
import logo from "../imgs/shopify.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow xl:max-w-[1180px] max-w-[1000px] mx-auto rounded-2xl border-gray-200">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-auto py-2">
          {/* Left side */}
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Shopify Logo"
              className="xl:w-[40px] w-[20px] xl:h-[40px] h-[20px]"
            />
            <Link
              href="/"
              className="text-lg sm:text-2xl font-extrabold text-gray-900"
            >
              Shopify
            </Link>
          </div>

          {/* Middle */}
          <div className="w-full sm:w-auto mt-2 sm:mt-0">
            <SearchBar />
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <CgProfile size={20} className="text-black" />
            <FaRegBell size={20} className="text-black" />
            <IoCartOutline size={20} className="text-black" />
            <Link
              href="/signup"
              className="text-gray-700 hover:text-gray-900 font-medium whitespace-nowrap"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
