import { Button } from "@/components/button";
import {
  AdjustmentsHorizontalIcon, HashtagIcon,
  Square3Stack3DIcon,
  Squares2X2Icon,
  TruckIcon
} from "@heroicons/react/24/solid";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus } from "lucide-react";
import { Input } from "@/components/input";
import { useCategories } from "@/features/categories/hooks/use-categories";
import { useSuppliers } from "@/features/suppliers/hooks/use-suppliers";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function ProductsFilterDropdown() {
  const { data: categories } = useCategories();
  const { data: suppliers } = useSuppliers();
  const [value, setValue] = useState("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-1.5" variant="ghost">
          <AdjustmentsHorizontalIcon className="size-4" />
          Filtros
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="start">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="gap-2">
            <Square3Stack3DIcon className="size-4 text-foreground/60" />
            Categoria
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {categories?.map((category) => (
              <DropdownMenuItem key={category.id}>
                <div
                  data-color={category.color}
                  className="size-2 rounded-full bg-gradient-to-b"
                ></div>
                {category.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="gap-2">
            <TruckIcon className="size-4 text-foreground/60" />
            Fornecedor
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="min-w-48">
            <Command>
              <CommandInput placeholder="Filtrar" className="h-9" />
              <CommandList>
                <CommandEmpty className="p-2 py-5 text-[13px] text-foreground/50">
                  Nenhum fornecedor encontrado.
                </CommandEmpty>
                <CommandGroup className="p-0 pt-1">
                  {suppliers?.map((supplier) => (
                    <CommandItem
                      key={supplier.id}
                      value={supplier.name}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                      }}
                      className="m-0"
                    >
                      <div className="size-2 rounded-full bg-foreground/50" />
                      {supplier.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="gap-2">
            <Squares2X2Icon className="size-4 text-foreground/60" />
            Quantidade
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="flex items-center gap-1">
            <Input placeholder="Buscar quantidade" className="border-none" />
            <Button size="icon" variant="secondary">
              <Plus size={14} />
            </Button>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="gap-2">
            <HashtagIcon className="size-4 text-foreground/60" />
            Código
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="flex items-center gap-1">
            <Input placeholder="Buscar código" className="border-none" />
            <Button size="icon" variant="secondary">
              <Plus size={14} />
            </Button>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
