import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import type { ProductType } from "@/types/products";
import { TagIcon, TruckIcon } from "@heroicons/react/16/solid";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "product_code",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-1 text-foreground/60"
        >
          Código (Sku)
          <ArrowUpDown size={12} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const product_code = String(row.getValue("product_code"));

      return (
        <div className="pl-1 cursor-default uppercase text-foreground/60 truncate text-ellipsis max-w-52">
          {product_code}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-1 text-foreground/60"
        >
          Nome
          <ArrowUpDown size={12} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = String(row.getValue("name"));

      return (
        <div className="pl-1 cursor-default font-medium truncate text-ellipsis max-w-52">
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: "suppliers",
    header: () => {
      return (
        <Button variant="ghost" className="p-1 text-foreground/60">
          Fornecedor
        </Button>
      );
    },
    cell: ({ row }) => {
      const supplier = row.getValue("suppliers") as ProductType["suppliers"];

      return (
        <div className="text-foreground/60 flex items-center gap-1.5">
          <TruckIcon className="size-4" />
          <span className="truncate text-ellipsis max-w-52">
            {supplier?.name ?? ""}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "categories",
    header: () => {
      return (
        <Button variant="ghost" className="p-1 text-foreground/60">
          Categoria
        </Button>
      );
    },
    cell: ({ row }) => {
      const category = row.getValue("categories") as ProductType["categories"];

      return (
        <div className="text-foreground/60 flex items-center gap-1.5">
          <TagIcon className="size-4" />
          <span className="truncate text-ellipsis max-w-52">
            {category?.name ?? ""}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-1 text-foreground/60"
        >
          Status
          <ArrowUpDown size={12} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = String(row.getValue("status"));

      return (
        <Badge>
          {status === "active" && (
            <>
              <div className="size-2 rounded-full bg-green-400" />
              Ativo
            </>
          )}
          {status === "inactive" && (
            <>
              <div className="size-2 rounded-full bg-red-400" />
              Inativo
            </>
          )}
          {status === "out_of_stock" && (
            <>
              <div className="size-2 rounded-full bg-amber-400" />
              Fora de estoque
            </>
          )}
        </Badge>
      );
    },
  },
  {
    accessorKey: "current_quantity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-1 text-foreground/60"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quantidade
          <ArrowUpDown size={12} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const current_quantity = parseInt(row.getValue("current_quantity"));

      return (
        <div className="pl-1 text-foreground/60 cursor-default">
          {current_quantity}
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-1 text-foreground/60"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Preço
          <ArrowUpDown size={12} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
];
