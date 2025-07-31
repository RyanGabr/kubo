import { LoaderCircleIcon, TriangleAlert } from "lucide-react";
import { CategoryCard } from "./components/category-card";
import { useCategories } from "./hooks/use-categories";
import { useSearchParams } from "react-router-dom";
import { EmptyCategories } from "./components/empty-categories";

export function CategoriesList() {
  const { data: categories, isLoading, isError } = useCategories();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <LoaderCircleIcon className="animate-spin text-foreground/60" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-full w-full flex flex-col gap-2 items-center justify-center">
        <TriangleAlert className="text-red-400" />
        <h1 className="text-red-400 font-medium text-sm text-center">
          Não foi possível listar suas categorias. <br /> Tente novamente mais
          tarde.
        </h1>
      </div>
    );
  }

  if (categories?.length === 0) {
    if (search) {
      return (
        <div className="h-full w-full flex flex-col gap-2 items-center justify-center">
          <TriangleAlert className="text-foreground/50" />
          <h1 className="text-foreground/50 font-medium text-sm text-center">
            Categoria não encontrada.
          </h1>
        </div>
      );
    }
    return <EmptyCategories />;
  }

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 p-6">
      {categories?.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
