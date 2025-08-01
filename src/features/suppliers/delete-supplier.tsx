import { Button } from "@/components/button";
import { ContextMenuItem } from "@/components/ui/context-menu";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { SuppliersType } from "@/types/suppliers";
import { useState } from "react";
import { useDeleteSupplier } from "./hooks/use-suppliers";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Loader2Icon } from "lucide-react";

interface DeleteSupplierProps {
  supplier: SuppliersType;
}

export function DeleteSupplier({ supplier }: DeleteSupplierProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const { mutateAsync, isPending } = useDeleteSupplier();

  async function deleteSupplier() {
    try {
      await mutateAsync(supplier.id);
      setDialogIsOpen(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <ContextMenuItem
          onClick={(e) => {
            setDialogIsOpen(true);
            e.preventDefault();
          }}
        >
          <TrashIcon className="size-3.5" />
          Deletar
        </ContextMenuItem>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0 rounded-xl bg-card">
        <DialogHeader className="py-4 px-5 border-b flex-row items-center gap-2">
          <div className="bg-indigo-400/10 rounded-md p-1 w-fit">
            <TrashIcon className="size-4 text-indigo-400" />
          </div>
          <DialogTitle className="text-sm font-medium">Excluir</DialogTitle>
        </DialogHeader>
        <DialogDescription className="p-5 border-b">
          Você realmente deseja excluir o forncedor(a){" "}
          <span className="inline-block text-foreground font-semibold">
            {supplier.name}
          </span>
          ? Ao clicar em excluir, o fornecedor(a) será removido permanentemente.
        </DialogDescription>
        <DialogFooter className="p-5 gap-3">
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button
            onClick={deleteSupplier}
            form="create-supplier-form"
            variant="indigo"
          >
            {isPending && <Loader2Icon size={16} className="animate-spin" />}
            Excluir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
