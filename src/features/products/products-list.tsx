import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useProducts } from "./hooks/use-products";

export function ProductsList() {
  const { data: products } = useProducts();

  return (
    <div className="h-full p-5">
      <DataTable columns={columns} data={products!} />
    </div>
  );
}
