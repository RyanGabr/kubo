import type { supplierFormSchema } from "@/schemas/supplier-schema";
import type z from "zod";

export type SuppliersType = {
  id: string;
  name: string;
  contact_email: string;
  phone: string;
  notes: string;
  owner_id: string;
};

export type SuppliersFormType = z.infer<typeof supplierFormSchema>;
