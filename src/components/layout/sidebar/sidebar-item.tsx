import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  children: ReactNode;
  href: string;
}

export function SidebarItem({ children, href }: SidebarItemProps) {
  return (
    <Link to={href}>
      <div className="px-2 py-1.5 rounded-md flex items-center gap-2 text-sm text-foreground/80 font-medium cursor-default hover:bg-foreground/10">
        {children}
      </div>
    </Link>
  );
}
