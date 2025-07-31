import type { categoryFormSchema } from "@/schemas/categories-schema";
import type z from "zod";

export type CategoriesType = {
  id: string;
  name: string;
  color: string;
  description: string;
  owner_id: string;
};

export type CategoriesFormType = z.infer<typeof categoryFormSchema>

export type CreateCategoryType = Omit<CategoriesType, "id">;

export type UpdateCategoryType = Omit<CategoriesType, "owner_id">;