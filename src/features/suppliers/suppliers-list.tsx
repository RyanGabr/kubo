import { useSuppliers } from "./hooks/use-suppliers";
import { EmptySuppliers } from "./components/empty-suppliers";
import { SuppliersCard } from "./components/suppliers-card";
import { LoaderCircleIcon, TriangleAlert } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export function SuppliersList() {
  const { data: suppliers, isLoading, isError } = useSuppliers();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");

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
    if (search) {
      return (
        <div className="h-full w-full flex flex-col gap-2 items-center justify-center">
          <TriangleAlert className="text-foreground/50" />
          <h1 className="text-foreground/50 font-medium text-sm text-center">
            Fornecedor não encontrado.
          </h1>
        </div>
      );
    }
    return <EmptySuppliers />;
  }

  return (
    <div className="grid grid-cols-3 gap-3 p-6">
      {suppliers?.map((supplier) => (
        <SuppliersCard
          key={supplier.id}
          supplier={supplier}
        />
      ))}
    </div>
  );
}
