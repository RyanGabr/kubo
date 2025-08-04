import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSuppliers } from "@/features/suppliers/hooks/use-suppliers";

interface SupplierSelectProps {
  value: string | undefined;
  onValueChange: (value: string) => void;
}

export function SupplierSelect({ onValueChange, value }: SupplierSelectProps) {
  const { data: suppliers } = useSuppliers();

  return (
    <Select value={value ?? ""} onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Escolha um fornecedor" />
      </SelectTrigger>
      <SelectContent>
        {suppliers?.map((supplier) => (
          <SelectItem key={supplier.id} value={supplier.id}>
            <div className="size-2 rounded-full bg-foreground/50" />
            {supplier.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
