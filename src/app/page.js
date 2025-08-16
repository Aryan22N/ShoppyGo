import Image from "next/image";

import Hero from "../components/Hero.jsx";
import ProductList from "../components/ProductList.jsx";
export default async function Home({ searchParams }) {
  const category = searchParams?.category || "all"; // Default to 'all' if no category is specified
  // The searchParams object is used to get the category from the URL parameters
  // If no category is specified, it defaults to 'all'
  // This allows the page to display products based on the selected category
  // and also allows for a view of all products when no category is selected.
  // This is useful for filtering products based on categories like 'shoes', 't-shirts', etc.
  // The ProductList component will use this category to filter the products displayed on the page.
  return (
    <div>
      {/* <Image src={Hero} alt="Hero Ing" className="max-w-[1080px]" /> */}
      <Hero />
      {/* Hero component displays the main promotional content */}

      <ProductList category={category} />
      {/* ProductList component displays products based on the selected category */}
      {/* The category prop is passed to filter products accordingly */}
      {/* If no category is selected, it defaults to showing all products */}
      {/* This allows users to browse products by category or view all products */}
    </div>
  );
}
