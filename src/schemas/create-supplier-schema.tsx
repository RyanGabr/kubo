import z from "zod";

export const createSupplierFormSchema = z.object({
  name: z.string().min(1, "Mínimo 1 caracter"),
  contact_email: z.string().email("Formato de e-mail inválido"),
  phone: z.string().min(1, "Mínimo 1 caracter"),
  notes: z.string().min(1, "Mínimo 1 caracter"),
});
