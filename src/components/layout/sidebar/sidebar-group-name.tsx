import type { ReactNode } from "react";

interface SidebarGroupNameProps {
  children: ReactNode;
}

export function SidebarGroupName({ children }: SidebarGroupNameProps) {
  return (
    <div className="px-2">
      <span className="text-xs font-semibold text-foreground/50">
        {children}
      </span>
    </div>
  );
}
