// components/LayoutWithSidebar.tsx
"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const hiddenRoutes = ["/acesso", "/cadastro"]; // adicione as rotas que não devem mostrar a sidebar

export function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideSidebar = hiddenRoutes.includes(pathname);

  if (hideSidebar) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
