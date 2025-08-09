"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RiShoppingBasketLine } from "react-icons/ri";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [productType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  // Function to handle size and color selection
  // This function updates the productType state based on user selection

  const handleProductType = (type, value) => {
    setProductType((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    // Card container
    <>
      {/*Image part */}
      <div className="shadow-lg rounded-lg overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-[2/3]">
            <Image
              src={product.images[productType.color]}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
        </Link>
        {/* Text part */}
        <div className="flex flex-col gap-2 ml-[20px] mt-4">
          <h1 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
            {product.name}
          </h1>
          <p className="text-sm text-gray-600">{product.shortDescription}</p>
          {/* SIZES */}
          <div className="flex gap-[30px]  my-[10px]">
            <div className="flex flex-col gap-1 w-[70px]">
              <span className="text-gray-500">Size</span>
              <select
                name="size"
                id="size"
                className="ring ring-gray-300 rounded-md px-2 py-1"
                onChange={(e) => handleProductType("size", e.target.value)}
                value={productType.size}
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            {/* COLORS */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Color</span>
              <div className="flex items-center  gap-2 ">
                {product.colors.map((color) => (
                  <div
                    className={` cursor-pointer border-1 ${
                      productType.color === color
                        ? "border-gray-500"
                        : "border-gray-200"
                    } cursor-pointer p-[4.2px] rounded-full`}
                    key={color}
                    onClick={() => handleProductType("color", color)}
                  >
                    <div
                      className="w-[14px] h-[14px] rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Price and Add to Cart Button */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <button className="ring-1 mr-4 mb-3 flex gap-2 shadow-md ring-gray-300 bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-200">
              <RiShoppingBasketLine className="w-4 h-4 mt-1" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
