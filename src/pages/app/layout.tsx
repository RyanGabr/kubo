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
          <Sidebar.Item href="overview">
            <Brain size={17} />
            Visão Geral
          </Sidebar.Item>
          <Sidebar.Item href="products">
            <BoxIcon size={17} />
            Produtos
          </Sidebar.Item>
          <Sidebar.Item href="suppliers">
            <Truck size={17} />
            Fornecedores
          </Sidebar.Item>
          <Sidebar.Item href="categories">
            <BlocksIcon size={17} />
            Categorias
          </Sidebar.Item>
        </Sidebar.Group>
        <Sidebar.GroupName>Preferências</Sidebar.GroupName>
        <Sidebar.Group>
          <Sidebar.Item href="settings">
            <SettingsIcon size={17} />
            Configurações
          </Sidebar.Item>
          <Sidebar.Item href="feedback">
            <SendIcon size={17} />
            Enviar feedback
          </Sidebar.Item>
        </Sidebar.Group>
      </Sidebar.Root>
      <main className="flex-1 bg-foreground/2 max-h-full rounded border border-foreground/10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
