"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const hiddenRoutes = ["/acesso", "/cadastro"];

export function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Remove o primeiro segmento (tenant) da URL
  const segments = pathname.split("/").filter(Boolean);
  const subPath = "/" + segments.slice(1).join("/");

  const hideSidebar = hiddenRoutes.includes(subPath);

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
