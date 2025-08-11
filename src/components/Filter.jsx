"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleFilter = (value) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-end mt-4 mb-6 text-gray-500 bg-gray-100 p-4 text-sm rounded-lg gap-2">
      <span>Sort by:</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm bg-gray-100"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="price-low-to-high">price-low-to-high</option>
        <option value="price-high-to-low">price-high-to-low</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default Filter;
