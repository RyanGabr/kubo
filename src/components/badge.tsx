import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <div className="border border-border rounded-full px-3 py-1 w-fit flex items-center gap-1.5 text-xs">
      {children}
    </div>
  );
}
