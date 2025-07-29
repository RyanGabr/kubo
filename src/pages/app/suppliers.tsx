import { SuppliersHeader } from "@/features/suppliers/components/suppliers-header";
import { SuppliersList } from "@/features/suppliers/suppliers-list";

export function Suppliers() {
  return (
    <div className="h-full flex flex-col">
      <SuppliersHeader />
      <SuppliersList />
    </div>
  );
}
