import {
  ContextMenu,
  ContextMenuContent, ContextMenuTrigger
} from "@/components/ui/context-menu";
import { UpdateSupplierForm } from "../update-supplier-form";
import type { SuppliersType } from "@/types/suppliers";
import { DeleteSupplier } from "../delete-supplier";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/button";
import { Separator } from "@/components/ui/separator";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

interface SuppliersCardProps {
  supplier: SuppliersType;
}

export function SuppliersCard({ supplier }: SuppliersCardProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="p-5 rounded-md border border-border bg-card flex items-center justify-between hover:bg-foreground/4">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-foreground/20 flex items-center justify-center">
              {supplier.name.split("")[0]}
            </div>
            <div>
              <strong className="font-medium text-sm truncate text-ellipsis max-w-80">
                {supplier.name}
              </strong>
              <p className="font-medium text-xs text-foreground/50 truncate text-ellipsis max-w-80">
                {supplier.notes}
              </p>
            </div>
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button size="icon" variant="ghost">
                  <InformationCircleIcon className="size-5 text-foreground/30" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col gap-3">
                  <div className="p-1.5 rounded-md bg-indigo-400/10 w-fit">
                    <InformationCircleIcon className="size-4.5 text-indigo-400" />
                  </div>
                  <strong className="font-medium text-sm">
                    Informações do fornecedor
                  </strong>
                  <p className="font-medium text-xs text-foreground/50 leading-5">
                    Aqui estão informações para entrar em contato com este
                    fornecedor.
                  </p>
                  <Separator />
                  <div className="flex flex-col text-[13px] text-foreground/60">
                    <span className="font-medium text-foreground">Email</span>
                    {supplier.contact_email}
                  </div>
                  <div className="flex flex-col text-[13px] text-foreground/60">
                    <span className="font-medium text-foreground">Telefone</span>
                    {supplier.phone}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="min-w-44">
        <UpdateSupplierForm supplier={supplier} />
        <DeleteSupplier supplier={supplier} />
      </ContextMenuContent>
    </ContextMenu>
  );
}
