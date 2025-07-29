import { supabase } from "@/lib/supabase";
import type { SuppliersType } from "@/types/suppliers";
import { useQuery } from "@tanstack/react-query";

export function useSuppliers() {
  return useQuery<SuppliersType[]>({
    queryKey: ["suppliers"],
    queryFn: async (): Promise<SuppliersType[]> => {
      const { data } = await supabase.from("suppliers").select("*");

      return data ?? [];
    },
  });
}
