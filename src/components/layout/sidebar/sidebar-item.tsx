import type { ReactNode } from "react";

interface SidebarItemProps {
  children: ReactNode;
}

export function SidebarItem({ children }: SidebarItemProps) {
  return (
    <div className="px-2 py-1.5 rounded-md flex items-center gap-2 text-sm text-foreground/80 font-medium cursor-default hover:bg-foreground/10">
      {children}
    </div>
  );
}
