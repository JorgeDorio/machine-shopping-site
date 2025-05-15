import { RegisterFormValues } from "@/app/[tenant]/(public)/acesso/(register)/register-schema";
import { LoginFormValues } from "@/app/[tenant]/(public)/acesso/(login)/login-schema";
import { useApi } from "@/hooks/useApi";
import Cookies from "js-cookie";

export function useUserService() {
  const api = useApi();

  const createUser = async ({
    user,
    tenant,
  }: {
    user: RegisterFormValues;
    tenant: string;
  }) => {
    const result = await api.post(`${tenant}/user/register`, user);

    Cookies.set("token", result.data.token, { secure: true });
    return result.data;
  };

  const loginUser = async ({
    user,
    tenant,
  }: {
    user: LoginFormValues;
    tenant: string;
  }) => {
    const result = await api.post(`${tenant}/user/login`, user);

    Cookies.set("token", result.data.token, { secure: true });
    return result.data;
  };

  return { loginUser, createUser };
}
