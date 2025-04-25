"use server";

import { cookies } from "next/headers";
import { RegisterFormValues } from "@/app/(public)/cadastro/register-schema";
import { api } from "./api";
import { LoginFormValues } from "@/app/(public)/acesso/login-schema";

export const createUser = async (user: RegisterFormValues) => {
  const result = await api.post("user/register", user);

  const cookieStore = await cookies();
  cookieStore.set("token", result.data.token, { secure: true });
  return result.data;
};

export const loginUser = async (user: LoginFormValues) => {
  const result = await api.post("user/login", user);

  const cookieStore = await cookies();
  cookieStore.set("token", result.data.token, { secure: true });
  return result.data;
};
