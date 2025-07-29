import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { CircleQuestionMark, Search, Truck, Zap } from "lucide-react";
import { SuppliersForm } from "../suppliers-form";

export function SuppliersHeader() {
  return (
    <div className="w-full py-2 px-6 flex items-center justify-between border-b border-border">
      <div className="flex items-center gap-3">
        <strong className="font-medium text-sm cursor-default">
          Fornecedores
        </strong>
        <span className="font-medium text-[13px] border border-border rounded-md px-2.5 py-1 text-foreground/60 flex items-center gap-1.5 bg-foreground/5">
          <Zap size={14} className="fill-foreground/60 text-transparent" />
          Kubo / Fornecedores
        </span>
        <div className="h-6 w-px bg-border" />
        <div className="relative">
          <Search
            size={14}
            className="absolute top-1/2 -translate-y-1/2 left-2 text-foreground/50"
          />
          <Input
            placeholder="Encontrar fornecedor"
            variant="primary"
            className="w-52 pl-6.5 py-1"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Popover>
          <PopoverTrigger>
            <Button variant="ghost" className="text-foreground/60 p-1.5">
              <CircleQuestionMark size={16} className="text-foreground/60" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end">
            <div className="flex flex-col gap-3">
              <div className="p-1.5 rounded-md bg-lime-300/10 w-fit">
                <Truck size={16} className="text-lime-300" />
              </div>
              <strong className="font-medium text-sm">
                O que é a seção de fornecedores?
              </strong>
              <p className="font-medium text-xs text-foreground/50 leading-5">
                A seção Fornecedores permite cadastrar, visualizar e gerenciar
                os responsáveis pelo fornecimento de produtos, facilitando o
                controle e a organização das suas fontes de abastecimento.
              </p>
              <Separator />
              <div className="p-1.5 rounded-md bg-lime-300/10 w-fit">
                <CircleQuestionMark size={16} className="text-lime-300" />
              </div>
              <strong className="font-medium text-sm">Como editar ou excluir?</strong>
              <p className="font-medium text-xs text-foreground/50 leading-5">
                Para editar ou excluir um fornecedor, basta clicar com o botão
                direito do mouse em cima do fornecedor correspondente e escolher
                entre as opções disponíveis.
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <SuppliersForm />
      </div>
    </div>
  );
}
