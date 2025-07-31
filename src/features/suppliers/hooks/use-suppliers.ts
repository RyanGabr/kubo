import { supabase } from "@/lib/supabase";
import type { CreateSupplierType, SuppliersType, UpdateSupplierType } from "@/types/suppliers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function useSuppliers() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  let query = supabase.from("suppliers").select("*");

  return useQuery<SuppliersType[]>({
    queryKey: ["suppliers", search],
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

export function useCreateSupplier() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: CreateSupplierType) => {
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

export function useUpdateSupplier() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdateSupplierType) => {
      const { error } = await supabase
        .from("suppliers")
        .update({
          name: data.name,
          contact_email: data.contact_email,
          phone: data.phone,
          notes: data.notes,
        })
        .eq("id", data.id);

      if (error) {
        console.log("Erro ao editar: ", error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
    },
  });
}
