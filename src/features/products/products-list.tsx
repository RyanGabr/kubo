import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useProducts } from "./hooks/use-products";

export function ProductsList() {
  const { data: products, isLoading } = useProducts();

  return (
    <div>
      <DataTable columns={columns} data={products?.data!} isLoading={isLoading} />
    </div>
  );
}
