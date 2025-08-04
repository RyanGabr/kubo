import { supabase } from "@/lib/supabase";
import type { CreateProductType } from "@/types/products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useProducts() {
  const query = supabase
    .from("products")
    .select(`*, suppliers (name), categories (name)`);

  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await query;

      if (error) throw new Error(error.message);
      return data;
    },
    retry: false,
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
