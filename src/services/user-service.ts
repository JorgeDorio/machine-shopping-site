import { RegisterFormValues } from "@/app/(public)/cadastro/register-schema";
import { api } from "./api";
import { LoginFormValues } from "@/app/(public)/acesso/login-schema";

export const createUser = async (user: RegisterFormValues) => {
  const result = await api.post("user/register", user);
  return result.status;
};

export const loginUser = async (user: LoginFormValues) => {
  const result = await api.post("user/login", user);
  return result.status;
};
