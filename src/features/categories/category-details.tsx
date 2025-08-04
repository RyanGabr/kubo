import { Button } from "@/components/button";
import { ContextMenuItem } from "@/components/ui/context-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { CategoriesFormType } from "@/types/categories";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "lucide-react";
import { useState } from "react";

interface CategoryDetailsProps {
  category: CategoriesFormType;
}

export function CategoryDetails({ category }: CategoryDetailsProps) {
  const [dialogIsOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <ContextMenuItem
          onClick={(e) => {
            setIsDialogOpen(true);
            e.preventDefault();
          }}
        >
          Ver detalhes
        </ContextMenuItem>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0 rounded-xl bg-card w-md">
        <DialogHeader className="py-4 px-5 border-b flex-row items-center gap-2">
          <div className="bg-indigo-400/10 rounded-md p-1 w-fit">
            <EyeIcon size={16} className="text-indigo-400" />
          </div>
          <DialogTitle className="text-sm font-medium">Detalhes</DialogTitle>
        </DialogHeader>
        <div className="p-10 flex flex-col gap-3 border-b">
          <div className="flex flex-col items-center justify-center gap-3">
            <div
              data-color={category.color}
              className="size-24 rounded-full bg-gradient-to-b flex items-center justify-center"
            >
              <Square3Stack3DIcon className="size-14 text-white/70" />
            </div>
            <strong className="font-medium text-sm">{category.name}</strong>
          </div>
          <div className="flex items-center justify-center text-sm text-foreground/50">
            <p>{category.description}</p>
          </div>
        </div>
        <DialogFooter className="p-5 gap-3">
          <DialogClose asChild>
            <Button variant="secondary">Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
