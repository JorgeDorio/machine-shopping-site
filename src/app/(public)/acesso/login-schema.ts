import { z } from "zod";

// Define o schema de validação para o formulário
export const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "A senha deve conter no mínimo 6 caracteres" }),
});

// Define os tipos do formulário com base no schema
export type LoginFormValues = z.infer<typeof loginSchema>;
