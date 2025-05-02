import {
  Calendar,
  Home,
  Inbox,
  LogIn,
  LogOut,
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
import Cookies from "js-cookie";

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
];

export function AppSidebar() {
  const token = Cookies.get("token");

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
              {!token ? (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="acesso">
                      <LogIn />
                      <span>Acessar / Cadastrar</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ) : (
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    onClick={() => Cookies.remove("token")}
                  >
                    <a href="/">
                      <LogOut />
                      <span>Sair</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
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
