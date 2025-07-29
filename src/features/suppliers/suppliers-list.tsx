import { useSuppliers } from "./hooks/use-suppliers";
import { EmptySuppliers } from "./components/empty-suppliers";
import { SuppliersCard } from "./components/suppliers-card";
import { LoaderCircleIcon, TriangleAlert } from "lucide-react";

export function SuppliersList() {
  const { data: suppliers, isLoading, isError } = useSuppliers();

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <LoaderCircleIcon className="animate-spin text-foreground/60" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-full w-full flex flex-col gap-2 items-center justify-center">
        <TriangleAlert className="text-red-400" />
        <h1 className="text-red-400 font-medium text-sm text-center">
          Não foi possível listar seus fornecedores. <br /> Tente novamente mais
          tarde.
        </h1>
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
