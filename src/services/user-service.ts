"use server";

import { cookies } from "next/headers";
import { api } from "./api";
import { RegisterFormValues } from "@/app/[tenant]/(public)/acesso/(register)/register-schema";
import { LoginFormValues } from "@/app/[tenant]/(public)/acesso/(login)/login-schema";

export const createUser = async ({
  user,
  tenant,
}: {
  user: RegisterFormValues;
  tenant: string;
}) => {
  const result = await api.post(`${tenant}/user/register`, user);

  const cookieStore = await cookies();
  cookieStore.set("token", result.data.token, { secure: true });
  return result.data;
};

export const loginUser = async ({
  user,
  tenant,
}: {
  user: LoginFormValues;
  tenant: string;
}) => {
  const result = await api.post(`${tenant}/user/login`, user);

  const cookieStore = await cookies();
  cookieStore.set("token", result.data.token, { secure: true });
  return result.data;
};
