import { ProductsHeader } from "@/features/products/components/products-header";
import { ProductsList } from "@/features/products/products-list";
import { useEffect } from "react";

export function Products() {
  useEffect(() => {
    document.title = "Produtos | Kubo";
  }, []);

  return (
    <div className="h-full flex flex-col">
      <ProductsHeader />
      <ProductsList />
    </div>
  );
}
