import { Edit, Mail, Phone, Trash2, Truck } from "lucide-react";
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
        <div className="p-5 rounded-md border border-border bg-card flex flex-col gap-5 hover:bg-foreground/7">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-md bg-lime-300/10">
              <Truck size={18} className="text-lime-300"/>
            </div>
            <div>
              <strong className="font-medium text-sm truncate text-ellipsis">
                {name}
              </strong>
              <p className="font-medium text-xs text-foreground/50">
                {contact_email}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="px-2 py-1 text-xs font-medium text-foreground/70 border border-border rounded-md flex items-center gap-1 bg-foreground/5">
              <Mail size={14} />
              {notes}
            </div>
            <div className="px-2 py-1 text-xs font-medium text-foreground/70 border border-border rounded-md flex items-center gap-1 bg-foreground/5">
              <Phone size={14} />
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
