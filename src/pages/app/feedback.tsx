import { Button } from "@/components/button";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export function Feedback() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col gap-8 items-center justify-center p-5 lg:p-0">
        <div className="text-center space-y-5">
          <h1 className="text-2xl font-medium tracking">Ajude-nos a melhorar</h1>
          <p className="text-sm text-foreground/50">
            Compartilhe seu feedback sobre a plataforma. Toda sugestão é
            bem-vinda e nos ajuda a evoluir cada vez mais.
          </p>
        </div>

        <textarea
          placeholder="Escreva aqui"
          className="w-full h-32 resize-y border border-border rounded-md text-sm p-3 focus:outline-none focus:ring focus:ring-indigo-400"
        />
        <div className="flex justify-end w-full">
          <Button variant="indigo">
            <PaperAirplaneIcon className="size-3"/>
            Enviar feedback
          </Button>
        </div>
      </div>
    </div>
  );
}
