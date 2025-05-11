import { z } from "zod";

// Define o schema de validação para o formulário
export const registerSchema = z
  .object({
    email: z.string().email({ message: "Email inválido" }),
    name: z.string().min(3),
    password: z
      .string()
      .min(6, { message: "A senha deve conter no mínimo 6 caracteres" }),
    confirmPassword: z
      .string()
      .min(6, { message: "A senha deve conter no mínimo 6 caracteres" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // indica onde o erro deve aparecer
  });

// Define os tipos do formulário com base no schema
export type RegisterFormValues = z.infer<typeof registerSchema>;
