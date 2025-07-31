import z from "zod";

export const supplierFormSchema = z.object({
  name: z.string().min(1, "Preencha o campo"),
  contact_email: z.string().email("Formato de e-mail inválido"),
  phone: z.string().min(1, "Preencha o campo"),
  notes: z.string().min(1, "Preencha o campo"),
});
