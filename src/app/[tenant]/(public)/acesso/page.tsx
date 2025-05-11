"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginCard } from "./(login)/login-card";
import { RegisterCard } from "./(register)/register-card";
import { useState } from "react";

export type TabsType = "login" | "register";

export default function Login() {
  const [tab, setTab] = useState<TabsType>("login");

  const onTabChange = (value: string) => {
    if (value === "login" || value === "register") {
      setTab(value);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center mt-8 overflow-hidden">
      <Tabs onValueChange={onTabChange} className="w-[400px]" value={tab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Acesso</TabsTrigger>
          <TabsTrigger value="register">Cadastro</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginCard onTabChange={onTabChange} />
        </TabsContent>
        <TabsContent value="register">
          <RegisterCard onTabChange={onTabChange} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
