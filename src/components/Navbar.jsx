import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import SearchBar from "./SearchBar";
import Link from "next/link";
import logo from "../../public/shopify.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow max-w-[1080px] mx-auto rounded-2xl border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side: Logo and links */}
          <div className="flex  items-center space-x-2">
            <Image src={logo} alt="Shopify Logo" width={40} height={40} />
            <Link href="/" className="text-2xl font-extrabold text-gray-900">
              Shopify
            </Link>
          </div>

          {/* Middle: Search bar */}
          <SearchBar />

          {/* Right side: Cart */}
          <div className="flex items-center space-x-6">
            <IoHomeOutline size={18} className="text-black" />
            <FaRegBell size={18} className="text-black" />
            <IoCartOutline size={18} className="text-black" />

            <Link
              href="/signup"
              className="text-gray-700 hover:text-gray-900 font-medium"
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
