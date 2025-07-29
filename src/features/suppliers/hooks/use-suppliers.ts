import { supabase } from "@/lib/supabase";
import type { SuppliersType } from "@/types/suppliers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useSuppliers() {
  return useQuery<SuppliersType[]>({
    queryKey: ["suppliers"],
    queryFn: async () => {
      const { data, error } = await supabase.from("suppliers").select("*");

      if (error) throw new Error(error.message);
      return data;
    },
    retry: false,
  });
}

export function useCreateSupplier() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: any) => {
      const { data, error } = await supabase
        .from("suppliers")
        .insert([formData])
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
    },
  });
}
