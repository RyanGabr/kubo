import { Button } from "@/components/button";
import { ContextMenuItem } from "@/components/ui/context-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { CategoriesType } from "@/types/categories";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useDeleteCategory } from "./hooks/use-categories";

interface DeleteCategoryProps {
  category: CategoriesType;
}

export function DeleteCategory({ category }: DeleteCategoryProps) {
  const [dialogIsOpen, setIsDialogOpen] = useState(false);
  const { mutate } = useDeleteCategory();

  function deleteCategory(){
    mutate(category.id);
  }

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <ContextMenuItem
          onClick={(e) => {
            setIsDialogOpen(true);
            e.preventDefault();
          }}
        >
          <TrashIcon />
          Deletar
        </ContextMenuItem>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0 rounded-xl bg-card">
        <DialogHeader className="py-4 px-5 border-b flex-row items-center gap-2">
          <div className="bg-indigo-400/10 rounded-md p-1 w-fit">
            <TrashIcon className="size-4 text-indigo-400" />
          </div>
          <DialogTitle className="text-sm font-medium">Deletar</DialogTitle>
        </DialogHeader>
        <DialogDescription className="p-5 border-b">
          Você realmente deseja deletar a categoria{" "}
          <span className="inline-block text-foreground font-semibold">
            {category.name}
          </span>
          ? Ao clicar em deletar, a categoria será removida permanentemente.
        </DialogDescription>
        <DialogFooter className="p-5 gap-3">
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button
            onClick={deleteCategory}
            form="create-supplier-form"
            variant="indigo"
          >
            Deletar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}