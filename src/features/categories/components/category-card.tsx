import type { CategoriesType } from "@/types/categories";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";

interface CategoryCardProps {
  category: CategoriesType;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="w-[1fr] flex flex-col gap-2">
      <div className="w-9/12 h-3 rounded-t-md bg-card border border-border"></div>
      <div className="w-full h-52 rounded-md bg-gradient-to-b from-card to-foreground/10 border border-border flex flex-col items-center justify-center gap-3 hover:bg-foreground/5">
        <div
          data-color={category.color}
          className="size-24 rounded-full bg-gradient-to-b flex items-center justify-center"
        >
          <Square3Stack3DIcon className="size-14 text-white/70" />
        </div>
        <div className="text-sm font-medium flex items-center gap-2">
          <div data-color={category.color} className="size-2 rounded-full bg-gradient-to-b"/>
          {category.name}
        </div>
      </div>
    </div>
  );
}
