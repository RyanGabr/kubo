import { Sidebar } from "@/components/layout/sidebar";
import { useUser } from "@supabase/auth-helpers-react";
import { Outlet, useLocation } from "react-router-dom";

import {
  BoxIcon,
  BrainIcon,
  Layers3Icon,
  Send, SettingsIcon,
  TruckIcon
} from "lucide-react";

const workspaceItems = [
  { label: "Visão geral", href: "/overview", icon: BrainIcon },
  { label: "Produtos", href: "/products", icon: BoxIcon },
  { label: "Fornecedores", href: "/suppliers", icon: TruckIcon },
  { label: "Categorias", href: "/categories", icon: Layers3Icon },
];

const preferencesItems = [
  { label: "Configurações", href: "/settings", icon: SettingsIcon },
  { label: "Enviar feedback", href: "/feedback", icon: Send },
];

export function Layout() {
  const user = useUser();

  const location = useLocation();

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
                <IconName size={18} className="text-foreground/60" />
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
                <IconName size={18} className="text-foreground/60" />
                {item.label}
              </Sidebar.Item>
            );
          })}
        </Sidebar.Group>
      </Sidebar.Root>
      <main className="flex-1 bg-card/50 max-h-full rounded border border-foreground/10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
