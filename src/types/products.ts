import type { productFormSchema } from "@/schemas/product-schema";
import type z from "zod";

export type ProductType = {
  id: string;
  product_code: string;
  name: string;
  category_id: string;
  min_quantity: number;
  current_quantity: number;
  price: number;
  owner_id: string;
  supplier_id: string;
  status: "active" | "inactive" | "out_of_stock";
  suppliers: {
    name: string;
  };
  categories: {
    name: string;
  };
};

export type ProductFormType = z.infer<typeof productFormSchema>;

export type CreateProductType = Omit<
  ProductType,
  "id" | "suppliers" | "categories"
>;

export type UpdateCategoryType = Omit<
  ProductType,
  "owner_id" | "suppliers" | "categories"
>;
