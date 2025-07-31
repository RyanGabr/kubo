import { CategoriesList } from "@/features/categories/categories-list";
import { CategoriesHeader } from "@/features/categories/components/categories-header";
import { useEffect } from "react";

export function Categories() {
  useEffect(() => {
    document.title = "Categorias | Kubo"
  }, []);

  return (
    <div className="h-full flex flex-col">
      <CategoriesHeader />
      <CategoriesList />
    </div>
  );
}
