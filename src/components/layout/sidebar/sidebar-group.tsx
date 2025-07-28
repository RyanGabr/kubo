import type { ReactNode } from "react";

interface SidebarGroupProps {
  children: ReactNode;
}

export function SidebarGroup({ children }: SidebarGroupProps) {
  return <div className="flex flex-col gap-[1px] px-0.5">{children}</div>;
}
