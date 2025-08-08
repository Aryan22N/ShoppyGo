import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex-1 mx-6 max-w-md shadow-sm">
      <form>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative text-gray-600 focus-within:text-gray-900">
          <input
            id="search"
            type="search"
            name="search"
            placeholder="Search products..."
            className="block w-full pl-15 pr-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm placeholder-gray-400"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch size={18} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
