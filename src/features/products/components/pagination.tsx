import { Button } from "@/components/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/use-products";

export function Pagination() {
  const { data } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? "1");

  const totalPages = data?.totalPages ?? 1;

  return (
    <div className="flex items-center gap-5">
      <span className="text-[13px] text-foreground/60 font-medium">
        Página {page} de {totalPages}
      </span>
      <div className="h-6 w-px bg-border" />
      <div className="flex items-center gap-1.5">
        <Button
          onClick={() => setSearchParams({ page: String(1) })}
          disabled={page <= 1}
          variant="outline"
          size="icon"
        >
          <ChevronsLeft size={13} />
        </Button>
        <Button
          onClick={() => setSearchParams({ page: String(page - 1) })}
          variant="outline"
          size="icon"
        >
          <ChevronLeft size={13} />
        </Button>
        <Button
          onClick={() => setSearchParams({ page: String(page + 1) })}
          variant="outline"
          size="icon"
        >
          <ChevronRight size={13} />
        </Button>
        <Button
          onClick={() => setSearchParams({ page: String(totalPages) })}
          disabled={page >= totalPages}
          variant="outline"
          size="icon"
        >
          <ChevronsRight size={13} />
        </Button>
      </div>
    </div>
  );
}
