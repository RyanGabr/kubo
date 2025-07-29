import { Skeleton } from "@/components/ui/skeleton";

export function SuppliersSkeleton() {
  return (
    <div className="p-5 rounded-md border border-border bg-card flex flex-col gap-8 hover:bg-foreground/7">
      <div className="space-y-3">
        <Skeleton className="w-full h-3 rounded" />
        <Skeleton className="w-1/2 h-2 rounded" />
      </div>
      <div className="flex items-center gap-1.5">
        <Skeleton className="w-2/3 h-3 rounded" />
      </div>
    </div>
  );
}
