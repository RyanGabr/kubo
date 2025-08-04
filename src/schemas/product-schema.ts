import z from "zod";

export const productFormSchema = z
  .object({
    name: z.string().min(1, "Preencha o campo"),
    product_code: z.string().min(1, "Preencha o campo"),
    category_id: z.string().min(1, "Preencha o campo"),
    supplier_id: z.string().min(1, "Preencha o campo"),
    min_quantity: z.number("Formato inválido").min(1, "Quantidade mínima: 1"),
    current_quantity: z
      .number("Formato inválido")
      .min(1, "Quantidade atual mínima: 1"),
    price: z.number().min(1, "Preço mínimo: R$1,00"),
    status: z.enum(["active", "inactive", "out_of_stock"]),
  })
  .refine((data) => data.current_quantity >= data.min_quantity, {
    message: "A quantidade mínima não pode ser maior que a quantidade atual",
    path: ["min_quantity"],
  });
