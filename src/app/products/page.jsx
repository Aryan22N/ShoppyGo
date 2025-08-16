import ProductList from "../../components/ProductList";

export default async function ProductsPage({ searchParams }) {
  const category = (await searchParams?.category) || "all";

  return (
    <div>
      <ProductList category={category} />
    </div>
  );
}
