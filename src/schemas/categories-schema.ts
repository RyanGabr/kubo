import z from "zod";

export const categoryFormSchema = z.object({
  name: z.string().min(1, "Preencha o campo"),
  color: z.string().min(1, "Escolha uma cor"),
  description: z.string().min(1, "Preencha o campo"),
});