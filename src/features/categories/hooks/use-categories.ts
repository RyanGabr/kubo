import { supabase } from "@/lib/supabase";
import type {
  CategoriesType,
  CreateCategoryType,
  UpdateCategoryType,
} from "@/types/categories";
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

export function useUpdateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdateCategoryType) => {
      const { error } = await supabase
        .from("categories")
        .update({
          name: data.name,
          color: data.color,
          description: data.description,
        })
        .eq("id", data.id);

      if (error) {
        console.log("Erro ao editar: ", error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("categories").delete().eq("id", id);

      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
