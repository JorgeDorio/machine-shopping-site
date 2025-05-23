"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginFormValues, loginSchema } from "./login-schema";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTenant } from "@/hooks/useTenant";
import { useUserService } from "@/services/useUserService";

interface ILoginCardProps {
  onTabChange: (value: string) => void;
}

export function LoginCard({ onTabChange }: ILoginCardProps) {
  const { loginUser } = useUserService();
  const router = useRouter();
  const searchParams = useSearchParams();

  const tenant = useTenant();

  const login = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast("Usuário autenticado com sucesso");
      const redirectTo = searchParams.get("redirectTo") || "/";
      router.push(redirectTo || `/${tenant}/`);
    },
  });

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Acesso</CardTitle>
        <CardDescription>
          Acesse o sistema utilizando seu E-mail e senha.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((user) =>
              login.mutate({ user, tenant })
            )}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Seu email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Sua senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Entrar
            </Button>
            <div className="flex justify-center cursor-pointer">
              <a onClick={() => onTabChange("register")}>
                Não tem uma conta? Clique aqui
              </a>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
