import { CreateSupplierForm } from "../create-supplier-form";
import { TruckIcon } from "@heroicons/react/24/solid";

export function EmptySuppliers() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-1/3 flex flex-col gap-8">
        <div className="p-2 rounded-lg bg-indigo-400/20 w-fit">
          <TruckIcon className="size-6 text-indigo-400" />
        </div>
        <div className="space-y-3">
          <h3 className="font-medium text-base">Fornecedores</h3>
          <p className="text-sm font-medium text-foreground/50">
            A seção Fornecedores permite cadastrar, visualizar e gerenciar os
            responsáveis pelo fornecimento de produtos, facilitando o controle e
            a organização das suas fontes de abastecimento.
          </p>
        </div>

        <CreateSupplierForm buttonVariant="indigo"/>
      </div>
    </div>
  );
}
