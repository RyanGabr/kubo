import { SuppliersHeader } from "@/features/suppliers/components/suppliers-header";
import { SuppliersList } from "@/features/suppliers/suppliers-list";
import { useEffect } from "react";

export function Suppliers() {
  useEffect(() => {
    document.title = "Fornecedores | Kubo"
  }, []);

  return (
    <div className="h-full flex flex-col">
      <SuppliersHeader />
      <SuppliersList />
    </div>
  );
}
