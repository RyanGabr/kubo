import { Button } from "@/components/button";
import { Plus, Truck } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/input";

export function SuppliersForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus size={16} />
          Cadastrar fornecedor
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0 rounded-xl bg-card">
        <DialogHeader className="py-4 px-5 border-b flex-row items-center gap-2">
          <div className="bg-lime-300/10 rounded-md p-1 w-fit">
            <Truck size={16} className="text-lime-300"/>
          </div>
          <DialogTitle className="text-sm font-medium">
            Cadastrar fornecedor
          </DialogTitle>
        </DialogHeader>
        <form className="p-5 space-y-3 border-b">
          <div className="space-y-2.5">
            <Label>Nome</Label>
            <Input
              placeholder="Compania Kubo"
              className="w-full"
              size="sm"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="space-y-2.5 flex-1">
              <Label>Email</Label>
              <Input
                placeholder="compania@example.com"
                className="w-full"
                size="sm"
              />
            </div>
            <div className="space-y-2.5 flex-1">
              <Label>Telefone</Label>
              <Input
                placeholder="(14) 99999-9999"
                className="w-full"
                size="sm"
              />
            </div>
          </div>
          <div className="space-y-2.5">
            <Label>Anotação</Label>
            <textarea
              placeholder="Fornecedor de roupas"
              className="w-full border border-border rounded-md text-sm p-3 focus:outline-none focus:ring focus:ring-foreground/20"
            />
          </div>
        </form>
        <DialogFooter className="p-5 gap-3">
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button variant="lime">Cadastrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
