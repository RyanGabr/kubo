import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Layers3Icon, Search, CircleQuestionMarkIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { CreateCategoryForm } from "../create-category-form";

export function CategoriesHeader() {
  const [_, setSearchParams] = useSearchParams();

  return (
    <div className="w-full py-2 px-6 flex items-center justify-between border-b border-border">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-md bg-indigo-400/10 w-fit">
            <Layers3Icon size={16} className="text-indigo-400" />
          </div>
          <strong className="font-medium cursor-default text-sm">
            Categorias
          </strong>
        </div>
        <div className="h-6 w-px bg-border" />
        <div className="relative">
          <Search
            size={14}
            className="absolute top-1/2 -translate-y-1/2 left-2 text-foreground/50"
          />
          <Input
            placeholder="Encontrar categoria"
            variant="primary"
            className="w-52 pl-6.5 py-1.5 text-xs"
            onChange={(e) => setSearchParams({ search: e.target.value })}
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="text-foreground/60 p-1.5">
              <CircleQuestionMarkIcon size={16} className="text-foreground/40" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end">
            <div className="flex flex-col gap-3">
              <div className="p-1.5 rounded-md bg-indigo-400/10 w-fit">
                <Layers3Icon size={16} className="text-indigo-400" />
              </div>
              <strong className="font-medium text-sm">
                O que é a seção de categoria?
              </strong>
              <p className="font-medium text-xs text-foreground/50 leading-5">
                A seção Categorias permite cadastrar, visualizar e gerenciar os
                diferentes tipos de produtos disponíveis, facilitando a
                organização e a classificação dos itens no sistema.
              </p>
              <Separator />
              <div className="p-1.5 rounded-md bg-indigo-400/10 w-fit">
                <CircleQuestionMarkIcon size={16} className="text-indigo-400" />
              </div>
              <strong className="font-medium text-sm">
                Como editar ou excluir?
              </strong>
              <p className="font-medium text-xs text-foreground/50 leading-5">
                Para editar ou excluir uma categoria, basta clicar com o botão
                direito do mouse em cima da categoria correspondente e escolher
                entre as opções disponíveis.
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <CreateCategoryForm buttonVariant="outline" />
      </div>
    </div>
  );
}
