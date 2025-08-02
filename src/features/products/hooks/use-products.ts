import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const query = supabase.from("products").select(`*, suppliers (name), categories (name)`);

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
