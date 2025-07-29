import { Sidebar } from "@/components/layout/sidebar";
import { useUser } from "@supabase/auth-helpers-react";
import {
  BlocksIcon,
  BoxIcon,
  Brain,
  SendIcon,
  SettingsIcon,
  Truck,
} from "lucide-react";
import { Outlet } from "react-router-dom";

const workspaceItems = [
  { label: "Visão geral", href: "/overview", icon: Brain },
  { label: "Produtos", href: "/products", icon: BoxIcon },
  { label: "Fornecedores", href: "/suppliers", icon: Truck },
  { label: "Categorias", href: "/categories", icon: BlocksIcon },
];

const preferencesItems = [
  { label: "Configurações", href: "/settings", icon: SettingsIcon },
  { label: "Enviar feedback", href: "/feedback", icon: SendIcon },
];

export function Layout() {
  const user = useUser();

  return (
    <div className="flex p-2 h-screen">
      <Sidebar.Root>
        <Sidebar.Perfil
          avatarUrl={user?.user_metadata.avatar_url}
          userFullName={user?.user_metadata.full_name}
        />
        <Sidebar.GroupName>Área de trabalho</Sidebar.GroupName>
        <Sidebar.Group>
          {workspaceItems.map((item, index) => {
            const IconName = item.icon;

            return (
              <Sidebar.Item
                href={item.href}
                key={index}
                className={
                  location.pathname === item.href ? "bg-foreground/10" : ""
                }
              >
                <IconName size={17} />
                {item.label}
              </Sidebar.Item>
            );
          })}
        </Sidebar.Group>
        <Sidebar.GroupName>Preferências</Sidebar.GroupName>
        <Sidebar.Group>
          {preferencesItems.map((item, index) => {
            const IconName = item.icon;

            return (
              <Sidebar.Item
                href={item.href}
                key={index}
                className={
                  location.pathname === item.href ? "bg-foreground/10" : ""
                }
              >
                <IconName size={17} />
                {item.label}
              </Sidebar.Item>
            );
          })}
        </Sidebar.Group>
      </Sidebar.Root>
      <main className="flex-1 bg-foreground/2 max-h-full rounded border border-foreground/10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
