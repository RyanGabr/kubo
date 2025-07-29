import { supabase } from "@/lib/supabase";
import type { SuppliersType } from "@/types/suppliers";
import { useQuery } from "@tanstack/react-query";

export function useSuppliers() {
  return useQuery<SuppliersType[]>({
    queryKey: ["suppliers"],
    queryFn: async () => {
      const { data, error } = await supabase.from("suppliers").select("*");

      if (error) throw new Error(error.message);
      return data;
    },
    retry: false
  });
}
