import { supabase } from "@/lib/supabase";
import type { CreateProductType, ProductType } from "@/types/products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const ITEMS_PER_PAGE = 14;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useProducts() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? "1");

  const from = (page - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  const query = supabase
    .from("products")
    .select(`*, suppliers (name), categories (name)`, { count: "exact" })
    .range(from, to);

  return useQuery({
    queryKey: ["products", page],
    queryFn: async () => {
      const [result] = await Promise.all([
        query,
        delay(300),
      ]);

      const { data, error, count } = result;
      const totalPages = count ? Math.ceil(count / ITEMS_PER_PAGE) : 1;

      if (error) throw new Error(error.message);

      return { data, totalPages };
    },
    retry: false,
  });
}

export function useProductByCategory() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category"); // category id

  const query = supabase
    .from("products")
    .select("*")
    .eq("category_id", category);

  return useQuery<ProductType[]>({
    queryKey: ["products", category],
    queryFn: async () => {
      const { data, error } = await query;

      if (error) throw new Error(error.message);
      return data;
    },
    retry: false,
    enabled: !!category,
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: CreateProductType) => {
      const { data, error } = await supabase
        .from("products")
        .insert([formData])
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
