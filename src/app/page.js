import Image from "next/image";
import Hero from "../components/Hero.jsx";
import ProductList from "../components/ProductList.jsx";

export default async function Home({ searchParams }) {
  // Await searchParams first
  const params = await searchParams;
  const category = params?.category || "all";

  return (
    <div>
      {/* Hero component displays the main promotional content */}
      <Hero />

      {/* ProductList component displays products based on the selected category */}
      <ProductList category={category} />
      {/* If no category is selected, it defaults to "all" */}
    </div>
  );
}
