import { ProductsHeader } from "@/features/products/components/products-header";
import { ProductsList } from "@/features/products/products-list";

export function Products() {
  return (
    <div className="h-full flex flex-col">
      <ProductsHeader />
      <ProductsList />
    </div>
  );
}
