import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, Settings2Icon } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

interface SidebarPerfilProps {
  avatarUrl: string;
  userFullName: string;
}

export function SidebarPerfil({ avatarUrl, userFullName }: SidebarPerfilProps) {
  const navigate = useNavigate();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Falha ao realizar o Logout:", error.message);
    } else {
      console.log("Logout bem-sucedido!");
      navigate("/auth");
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center justify-between p-2 rounded-md hover:bg-foreground/5 cursor-default">
          <div className="flex items-center gap-2">
            <div>
              <img src={avatarUrl} alt="" className="w-6 rounded-md" />
            </div>
            <div className="text-sm font-medium truncate text-ellipsis max-w-28">
              {userFullName}
            </div>
          </div>
          <div>
            <div className="bg-foreground/10 rounded-md py-1 px-2 text-xs font-semibold text-foreground/70">
              FREE
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{userFullName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings2Icon />
          Configurações da conta
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
