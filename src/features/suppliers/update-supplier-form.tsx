import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { ContextMenuItem } from "@/components/ui/context-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { supplierFormSchema } from "@/schemas/supplier-schema";
import type { SuppliersFormType, SuppliersType } from "@/types/suppliers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateSupplier } from "./hooks/use-suppliers";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Loader2Icon } from "lucide-react";

interface UpdateSupplierFormProps {
  supplier: SuppliersType;
}

export function UpdateSupplierForm({ supplier }: UpdateSupplierFormProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const { mutateAsync, isPending } = useUpdateSupplier();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<SuppliersFormType>({
    resolver: zodResolver(supplierFormSchema),
  });

  function formatPhone(value: string) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  }

  async function handleUpdateSupplier(data: SuppliersFormType) {
    try {
      await mutateAsync({
        name: data.name,
        contact_email: data.contact_email,
        phone: data.phone,
        notes: data.notes,
        id: supplier.id,
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
        <ContextMenuItem
          onClick={(e) => {
            setDialogIsOpen(true);
            e.preventDefault();
          }}
        >
          <PencilIcon className="size-3.5" />
          Editar
        </ContextMenuItem>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0 rounded-xl bg-card">
        <DialogHeader className="py-4 px-5 border-b flex-row items-center gap-2">
          <div className="bg-indigo-400/10 rounded-md p-1 w-fit">
            <PencilIcon className="size-3.5 text-indigo-400" />
          </div>
          <DialogTitle className="text-sm font-medium">Editar</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleUpdateSupplier)}
          className="p-5 space-y-3 border-b"
          id="create-supplier-form"
        >
          <div className="space-y-2.5">
            <Label>Nome</Label>
            <div>
              <Input
                {...register("name")}
                defaultValue={supplier.name}
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
                  defaultValue={supplier.contact_email}
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
                  defaultValue={supplier.phone}
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
                defaultValue={supplier.notes}
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
          >
            {isPending && <Loader2Icon size={16} className="animate-spin" />}
            Editar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
