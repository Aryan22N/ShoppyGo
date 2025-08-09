import ProductList from "../../components/ProductList";

export default function ProductsPage({ searchParams }) {
  const category = searchParams?.category || "all";

  return (
    <div>
      <ProductList category={category} />
    </div>
  );
}
