import { Button } from "@/components/button";
import { Plus, Truck } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSupplierFormSchema } from "@/schemas/create-supplier-schema";
import type { SuppliersFormType } from "@/types/suppliers";
import { useUser } from "@supabase/auth-helpers-react";
import { useState, useTransition } from "react";
import { useCreateSupplier } from "./hooks/use-suppliers";

export function CreateSupplierForm({
  buttonVariant,
}: {
  buttonVariant: "default" | "destructive" | "indigo" | "outline" | "ghost";
}) {
  const user = useUser();
  const { mutate } = useCreateSupplier();
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<SuppliersFormType>({
    resolver: zodResolver(createSupplierFormSchema),
  });

  function formatPhone(value: string) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  }

  function handleCreateSupplier(data: SuppliersFormType) {
    const ownerId = user?.id;

    startTransition(() => {
      mutate({
        name: data.name,
        contact_email: data.contact_email,
        phone: data.phone,
        notes: data.notes,
        owner_id: ownerId,
      });
    });

    setDialogIsOpen(false);
    reset();
  }

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} className="w-fit">
          <Plus size={16} />
          Cadastrar fornecedor
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0 rounded-xl bg-card">
        <DialogHeader className="py-4 px-5 border-b flex-row items-center gap-2">
          <div className="bg-indigo-400/10 rounded-md p-1 w-fit">
            <Truck size={16} className="text-indigo-400" />
          </div>
          <DialogTitle className="text-sm font-medium">
            Cadastrar fornecedor
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleCreateSupplier)}
          className="p-5 space-y-3 border-b"
          id="create-supplier-form"
        >
          <div className="space-y-2.5">
            <Label>Nome</Label>
            <div>
              <Input
                {...register("name")}
                placeholder="Compania Kubo"
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
          <div className="flex items-start gap-3">
            <div className="space-y-2.5 flex-1">
              <Label>Email</Label>
              <div>
                <Input
                  {...register("contact_email")}
                  placeholder="compania@example.com"
                  className="w-full"
                  size="sm"
                />
                {errors.contact_email && (
                  <span className="text-xs font-medium text-red-400">
                    {errors.contact_email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-2.5 flex-1">
              <Label>Telefone</Label>
              <div>
                <Input
                  {...register("phone")}
                  onChange={(e) => {
                    const formatted = formatPhone(e.target.value);
                    setValue("phone", formatted);
                  }}
                  placeholder="(14) 99999-9999"
                  className="w-full"
                  size="sm"
                />
                {errors.phone && (
                  <span className="text-xs font-medium text-red-400">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-2.5">
            <Label>Anotação</Label>
            <div>
              <textarea
                {...register("notes")}
                placeholder="Fornecedor de roupas"
                className="w-full border border-border rounded-md text-sm p-3 focus:outline-none focus:ring focus:ring-foreground/20"
              />
              {errors.notes && (
                <span className="text-xs font-medium text-red-400">
                  {errors.notes.message}
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
          <Button
            type="submit"
            form="create-supplier-form"
            variant="indigo"
            disabled={isPending}
          >
            Cadastrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
