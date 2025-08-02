import { Button } from "@/components/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { QuestionMarkCircleIcon, TagIcon } from "@heroicons/react/24/solid";
import { CubeIcon } from "@heroicons/react/16/solid";

export function ProductsHeader() {
  return (
    <div className="w-full py-2 px-6 flex items-center justify-between border-b border-border">
      <div className="flex items-center gap-2">
        <div className="p-1 rounded-md bg-indigo-400/10 w-fit">
          <CubeIcon className="size-4 text-indigo-400" />
        </div>
        <strong className="font-medium cursor-default text-sm">Produtos</strong>
      </div>
      <div className="flex items-center gap-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="text-foreground/60 p-1.5">
              <QuestionMarkCircleIcon className="size-4.5 text-foreground/40" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end">
            <div className="flex flex-col gap-3">
              <div className="p-1.5 rounded-md bg-indigo-400/10 w-fit">
                <TagIcon className="size-4.5 text-indigo-400" />
              </div>
              <strong className="font-medium text-sm">
                O que é a seção de produtos?
              </strong>
              <p className="font-medium text-xs text-foreground/50 leading-5">
                A seção Produtos permite cadastrar, visualizar e gerenciar todos
                os itens disponíveis no sistema, facilitando o controle de
                estoque, o acompanhamento das informações dos produtos e a sua
                disponibilidade para venda.
              </p>
              <Separator />
              <div className="p-1.5 rounded-md bg-indigo-400/10 w-fit">
                <QuestionMarkCircleIcon className="size-4.5 text-indigo-400" />
              </div>
              <strong className="font-medium text-sm">
                Como editar ou excluir?
              </strong>
              <p className="font-medium text-xs text-foreground/50 leading-5">
                Para editar ou excluir um produto, basta clicar com o botão
                direito do mouse em cima do produto correspondente e escolher
                entre as opções disponíveis.
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Button variant="outline">
          <Plus size={16} />
          Cadastrar produto
        </Button>
      </div>
    </div>
  );
}
