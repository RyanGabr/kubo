import type { ReactNode } from "react";

interface SidebarRootProps {
  children: ReactNode;
}

export function SidebarRoot({ children }: SidebarRootProps) {
  return <div className="w-56 flex flex-col pr-2 gap-2">{children}</div>;
}
