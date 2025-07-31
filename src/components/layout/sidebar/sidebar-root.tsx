import type { ReactNode } from "react";

interface SidebarRootProps {
  children: ReactNode;
}

export function SidebarRoot({ children }: SidebarRootProps) {
  return <div className="w-56 flex flex-col pl-0.5 pr-2.5 gap-2">{children}</div>;
}
