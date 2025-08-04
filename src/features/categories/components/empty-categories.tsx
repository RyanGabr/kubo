import { CreateCategoryForm } from "../create-category-form";
import { Layers3Icon } from "lucide-react";

export function EmptyCategories() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-1/3 flex flex-col gap-8">
        <div className="p-2 rounded-lg bg-indigo-400/20 w-fit">
          <Layers3Icon size={24} className="text-indigo-400" />
        </div>
        <div className="space-y-3">
          <h3 className="font-medium text-base">Categorias</h3>
          <p className="text-sm font-medium text-foreground/50">
            A seção Categorias permite cadastrar, visualizar e gerenciar os
            diferentes tipos de produtos disponíveis, facilitando a organização
            e a classificação dos itens no sistema.
          </p>
        </div>

        <CreateCategoryForm buttonVariant="indigo"/>
      </div>
    </div>
  );
}
