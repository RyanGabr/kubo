import { Button } from "@/components/button";
import { Input } from "@/components/input";
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
import { ProductFilledIcon } from "@shopify/polaris-icons";
import { Loader2Icon, Plus } from "lucide-react";
import { CategorySelect } from "./components/category-select";
import { Controller, useForm } from "react-hook-form";
import { SupplierSelect } from "./components/supplier-select";
import { ProductStatusSelect } from "./components/product-status-select";
import type { ProductFormType } from "@/types/products";
import { zodResolver } from "@hookform/resolvers/zod";
import { productFormSchema } from "@/schemas/product-schema";
import { useState } from "react";
import { useCreateProduct } from "./hooks/use-products";
import { useUser } from "@supabase/auth-helpers-react";

export function CreateProductForm() {
  const user = useUser();
  const { mutateAsync, isPending } = useCreateProduct();
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormType>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      category_id: "",
      supplier_id: "",
      status: undefined,
    },
  });

  async function createProduct(data: ProductFormType) {
    try {
      await mutateAsync({
        ...data,
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
        <Button variant="outline">
          <Plus size={16} />
          Cadastrar produto
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 gap-0 rounded-xl bg-card sm:max-w-3xl">
        <DialogHeader className="py-4 px-5 border-b flex-row items-center gap-2">
          <div className="bg-indigo-400/10 rounded-md p-1 w-fit">
            <ProductFilledIcon className="size-4 fill-indigo-400" />
          </div>
          <DialogTitle className="text-sm font-medium">
            Cadastrar produto
          </DialogTitle>
        </DialogHeader>
        <form
          id="create-product-form"
          onSubmit={handleSubmit(createProduct)}
          className="p-5 space-y-3 border-b"
        >
          <div className="flex items-start gap-3">
            <div className="space-y-2.5 flex-1">
              <Label>Nome</Label>
              <div>
                <Input
                  {...register("name")}
                  placeholder="Apple Mac Mini M4"
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
              <Label>Código (Sku)</Label>
              <div>
                <Input
                  {...register("product_code")}
                  placeholder="ZG011AQA"
                  className="w-full"
                  size="sm"
                />
                {errors.product_code && (
                  <span className="text-xs font-medium text-red-400">
                    {errors.product_code.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="space-y-2.5 flex-1">
              <Label>Categoria</Label>
              <Controller
                name="category_id"
                control={control}
                render={({ field }) => (
                  <CategorySelect
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                )}
              />
              {errors.category_id && (
                <span className="text-xs font-medium text-red-400">
                  {errors.category_id.message}
                </span>
              )}
            </div>
            <div className="space-y-2.5 flex-1">
              <Label>Fornecedor</Label>
              <Controller
                name="supplier_id"
                control={control}
                render={({ field }) => (
                  <SupplierSelect
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                )}
              />
              {errors.supplier_id && (
                <span className="text-xs font-medium text-red-400">
                  {errors.supplier_id.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="space-y-2.5 flex-1">
              <Label>Quantidade mínima</Label>
              <div>
                <Input
                  {...register("min_quantity", { valueAsNumber: true })}
                  placeholder="5"
                  className="w-full"
                  size="sm"
                  type="number"
                />
                {errors.min_quantity && (
                  <span className="text-xs font-medium text-red-400">
                    {errors.min_quantity.message}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-2.5 flex-1">
              <Label>Quantidade atual</Label>
              <div>
                <Input
                  {...register("current_quantity", { valueAsNumber: true })}
                  placeholder="20"
                  className="w-full"
                  size="sm"
                  type="number"
                />
                {errors.current_quantity && (
                  <span className="text-xs font-medium text-red-400">
                    {errors.current_quantity.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="space-y-2.5 flex-1">
              <Label>Preço</Label>
              <div className="relative">
                <span className="text-sm text-foreground/50 absolute top-1/2 -translate-y-1/2 left-3.5">
                  R$
                </span>
                <Input
                  {...register("price", { valueAsNumber: true })}
                  placeholder="4.950"
                  className="w-full pl-8.5"
                  size="sm"
                  type="number"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="space-y-2.5 flex-1">
              <Label>Status</Label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <ProductStatusSelect
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                )}
              />
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
          <Button type="submit" form="create-product-form" variant="indigo">
            {isPending && <Loader2Icon size={16} className="animate-spin" />}
            Cadastrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
