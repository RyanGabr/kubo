import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryFormSchema } from "@/schemas/categories-schema";
import type { CategoriesFormType } from "@/types/categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { Layers3Icon, Loader2Icon, Plus } from "lucide-react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useCreateCategory } from "./hooks/use-categories";
import { useUser } from "@supabase/auth-helpers-react";

export function CreateCategoryForm({
  buttonVariant,
}: {
  buttonVariant: "default" | "destructive" | "indigo" | "outline" | "ghost" | "secondary";
}) {
  const user = useUser();
  const { mutateAsync, isPending } = useCreateCategory();
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<CategoriesFormType>({
    resolver: zodResolver(categoryFormSchema),
  });

  async function createCategory(data: CategoriesFormType) {
    try {
      await mutateAsync({
        name: data.name,
        color: data.color,
        description: data.description,
        owner_id: user?.id!,
      });

      setDialogIsOpen(false);
      setTimeout(() => reset(), 500);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} className="w-fit">
          <Plus size={16} />
          Nova categoria
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0 rounded-xl bg-card">
        <DialogHeader className="py-4 px-5 border-b flex-row items-center gap-2">
          <div className="bg-indigo-400/10 rounded-md p-1 w-fit">
            <Layers3Icon size={16} className="text-indigo-400" />
          </div>
          <DialogTitle className="text-sm font-medium">
            Nova categoria
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(createCategory)}
          className="p-5 space-y-3 border-b"
          id="create-supplier-form"
        >
          <div className="flex items-start gap-3">
            <div className="space-y-2.5 flex-1">
              <Label>Nome</Label>
              <div>
                <Input
                  {...register("name")}
                  placeholder="Computadores e Internet"
                  className="w-full"
                  size="sm"
                />
                {errors.name && (
                  <span className="text-xs font-medium text-red-400">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-2.5 flex-1">
              <Label>Cor</Label>
              <div>
                <Controller
                  name="color"
                  control={control}
                  defaultValue="gray"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Escolha uma cor (opcional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indigo" className="gap-2">
                          <div className="size-2 rounded-full bg-indigo-400" />
                          Indigo
                        </SelectItem>
                        <SelectItem value="red" className="gap-2">
                          <div className="size-2 rounded-full bg-red-400" />
                          Vermelho
                        </SelectItem>
                        <SelectItem value="yellow" className="gap-2">
                          <div className="size-2 rounded-full bg-amber-400" />
                          Amarelo
                        </SelectItem>
                        <SelectItem value="blue" className="gap-2">
                          <div className="size-2 rounded-full bg-blue-400" />
                          Azul
                        </SelectItem>
                        <SelectItem value="green" className="gap-2">
                          <div className="size-2 rounded-full bg-green-400" />
                          Verde
                        </SelectItem>
                        <SelectItem value="gray" className="gap-2">
                          <div className="size-2 rounded-full bg-foreground/50" />
                          Cinza
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.color && (
                  <span className="text-xs font-medium text-red-400">
                    {errors.color.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-2.5">
            <Label>Descrição</Label>
            <div>
              <textarea
                {...register("description")}
                placeholder="Produtos relacionados a hardware e internet."
                className="w-full border border-border rounded-md text-sm p-3 focus:outline-none focus:ring focus:ring-foreground/20"
              />
              {errors.description && (
                <span className="text-xs font-medium text-red-400">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>
        </form>
        <DialogFooter className="p-5 gap-3">
          <DialogClose asChild>
            <Button
              variant="secondary"
              onClick={() => setTimeout(() => reset(), 500)}
            >
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" form="create-supplier-form" variant="indigo">
            {isPending && <Loader2Icon size={16} className="animate-spin"/>}
            Criar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
