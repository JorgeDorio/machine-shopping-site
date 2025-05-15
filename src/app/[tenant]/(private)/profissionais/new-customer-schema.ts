import { isValidCPF } from "@/lib/utils";
import { z } from "zod";

// Define o schema de validação para o formulário
export const newCustomerSchema = z.object({
  name: z.string(),
  phone: z
    .string()
    .length(11, { message: "O número de telefone deve conter 11 caracteres." }),
  cpf: z
    .string()
    .length(11, { message: "O CPF deve conter 11 caracteres." })
    .refine((cpf) => isValidCPF(cpf), {
      message: "CPF inválido",
    }),
});

// Define os tipos do formulário com base no schema
export type NewCustomerFormValues = z.infer<typeof newCustomerSchema>;
