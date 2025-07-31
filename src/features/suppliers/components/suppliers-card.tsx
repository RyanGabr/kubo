import { Edit, Trash2 } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

interface SuppliersCardProps {
  name: string;
  notes: string;
  contact_email: string;
  phone: string;
}

export function SuppliersCard({
  contact_email,
  name,
  notes,
  phone,
}: SuppliersCardProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="rounded-md border border-border bg-card flex flex-col hover:bg-foreground/7">
          <div className="p-5 border-b flex items-center gap-3">
            <div className="size-9 rounded-full bg-foreground/20 flex items-center justify-center">
              {name.split("")[0]}
            </div>
            <div>
              <strong className="font-medium text-sm truncate text-ellipsis max-w-80">
                {name}
              </strong>
              <p className="font-medium text-xs text-foreground/50 truncate text-ellipsis max-w-80">
                {notes}
              </p>
            </div>
          </div>
          <div className="px-5 py-3 flex items-center gap-2">
            <div className="px-2 py-1 border border-border rounded-md flex items-center gap-2 text-xs font-medium text-foreground/50">
              <div className="size-2 rounded-full bg-foreground/50"></div>
              {contact_email}
            </div>
            <div className="px-2 py-1 border border-border rounded-md flex items-center gap-2 text-xs font-medium text-foreground/50">
              <div className="size-2 rounded-full bg-foreground/50"></div>
              {phone}
            </div>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="min-w-44">
        <ContextMenuLabel>{name}</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Edit />
          Editar
        </ContextMenuItem>
        <ContextMenuItem>
          <Trash2 />
          Deletar
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
