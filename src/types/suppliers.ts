import type { createSupplierFormSchema } from "@/schemas/create-supplier-schema";
import type z from "zod";

export type SuppliersType = {
  id: string;
  name: string;
  contact_email: string;
  phone: string;
  notes: string;
  owner_id: string;
};

export type SuppliersFormType = z.infer<typeof createSupplierFormSchema>;
