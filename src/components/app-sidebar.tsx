import {
  Calendar,
  Home,
  Inbox,
  LogIn,
  Megaphone,
  MessagesSquare,
  Search,
  Settings,
  Star,
  Tractor,
  User,
} from "lucide-react";

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

// Menu items.
const items = [
  {
    title: "Início",
    url: "#",
    icon: Home,
  },
  {
    title: "Catálogo",
    url: "#",
    icon: Tractor,
  },
  {
    title: "Favoritos",
    url: "#",
    icon: Star,
  },
  {
    title: "Meus Dados",
    url: "#",
    icon: User,
  },
  {
    title: "Anunciar",
    url: "anunciar",
    icon: Megaphone,
  },
  {
    title: "Contato",
    url: "#",
    icon: MessagesSquare,
  },
  {
    title: "Acessar / Cadastrar",
    url: "acesso",
    icon: LogIn,
  },
];

export function AppSidebar() {
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
                    <a href={item.url}>
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
