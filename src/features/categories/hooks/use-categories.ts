import { supabase } from "@/lib/supabase";
import type { CategoriesType, CreateCategoryType } from "@/types/categories";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function useCategories() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  let query = supabase.from("categories").select("*");

  return useQuery<CategoriesType[]>({
    queryKey: ["categories", search],
    queryFn: async () => {
      if (search) {
        query = query.ilike("name", `%${search}%`);
      }

      const { data, error } = await query;

      if (error) throw new Error(error.message);
      return data;
    },
    retry: false,
  });
}

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: CreateCategoryType) => {
      const { data, error } = await supabase
        .from("categories")
        .insert([formData])
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
