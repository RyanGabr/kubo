import { useSuppliers } from "./hooks/use-suppliers";
import { SuppliersSkeleton } from "./components/suppliers-skeleton";
import { EmptySuppliers } from "./components/empty-suppliers";
import { SuppliersCard } from "./components/suppliers-card";

export function SuppliersList() {
  const { data: suppliers, isLoading } = useSuppliers();

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-3 p-6">
        <SuppliersSkeleton />
      </div>
    );
  }

  if (suppliers?.length === 0) {
    return <EmptySuppliers />;
  }

  return (
    <div className="grid grid-cols-3 gap-3 p-6">
      {suppliers?.map((supplier) => (
        <SuppliersCard
          key={supplier.id}
          name={supplier.name}
          contact_email={supplier.contact_email}
          notes={supplier.notes}
          phone={supplier.phone}
        />
      ))}
    </div>
  );
}
