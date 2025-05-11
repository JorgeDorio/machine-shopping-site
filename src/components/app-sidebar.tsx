"use client";

import { Megaphone, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./theme-changer";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Clientes",
    url: "clientes",
    icon: Megaphone,
  },
  {
    title: "Sair",
    url: "acesso",
    icon: LogOut,
  },
];

export function AppSidebar() {
  const token = Cookies.get("token");
  const pathname = usePathname();

  // Extrai o tenant do pathname (ex: /empresa123/anunciar)
  const segments = pathname.split("/").filter(Boolean);
  const tenant = segments[0] || "";

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={`/${tenant}/${item.url}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
