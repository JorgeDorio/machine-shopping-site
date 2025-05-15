"use client";

import { LogOut, BriefcaseBusiness, SquareUser } from "lucide-react";
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
import { useTenant } from "@/hooks/useTenant";

const items = [
  {
    title: "Clientes",
    url: "clientes",
    icon: SquareUser,
  },
  {
    title: "Profissionais",
    url: "profissionais",
    icon: BriefcaseBusiness,
  },
];

export function AppSidebar() {
  const tenant = useTenant();

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
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href={`/${tenant}/acesso`}
                    onClick={() =>
                      (document.cookie =
                        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")
                    }
                  >
                    <LogOut />
                    <span>Sair</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
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
