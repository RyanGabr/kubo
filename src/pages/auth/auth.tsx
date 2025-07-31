import { Button } from "@/components/button";
import { Separator } from "@/components/ui/separator";
import { useAuthRedirect } from "@/hooks/use-auth-redirect";
import { supabase } from "@/lib/supabase";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export function Auth() {
  useAuthRedirect();

  useEffect(() => {
    document.title = "Autenticação | Kubo";
  }, []);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("Erro no login:", error.message);
      setErrorMessage("Falha ao realizar a autenticação. Tente novamente");
    } else {
      setErrorMessage(null);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-5 w-96 p-5 sm:p-0">
        <CubeTransparentIcon className="size-14 text-indigo-400"/>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">Iniciar sessão com Kubo</h1>
          <p className="text-foreground/50 text-sm">
            Que bom ter você de volta!
          </p>
        </div>
        <Separator />
        <Button
          onClick={handleGoogleLogin}
          variant="indigo"
          size="md"
          className="gap-1.5 w-full"
        >
          <svg
            className="w-4 fill-foreground"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 7v2.4h3.97c-.16 1.03-1.2 3.02-3.97 3.02-2.39 0-4.34-1.98-4.34-4.42S5.61 3.58 8 3.58c1.36 0 2.27.58 2.79 1.08l1.9-1.83C11.47 1.69 9.89 1 8 1 4.13 1 1 4.13 1 8s3.13 7 7 7c4.04 0 6.72-2.84 6.72-6.84 0-.46-.05-.81-.11-1.16H8z"
              fill="var(--foreground)"
            />
          </svg>
          Conectar com Google
        </Button>
        {errorMessage && (
          <span className="font-medium text-sm text-red-400">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
}
