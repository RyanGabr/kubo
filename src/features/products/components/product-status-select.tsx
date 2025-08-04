import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductStatusSelectProps {
  value: string | undefined;
  onValueChange: (value: string) => void;
}

interface Status {
  value: string;
  label: string;
  color: string;
}

const status: Status[] = [
  { label: "Ativo", value: "active", color: "green" },
  { label: "Inativo", value: "inactive", color: "red" },
  { label: "Fora de estoque", value: "out-of-stock", color: "yellow" },
];

export function ProductStatusSelect({
  onValueChange,
  value,
}: ProductStatusSelectProps) {
  return (
    <Select value={value ?? ""} onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Escolha o status do produto" />
      </SelectTrigger>
      <SelectContent>
        {status.map((item) => (
          <SelectItem key={item.value} value={item.value} className="gap-2">
            <div
              data-color={item.color}
              className="size-2 rounded-full bg-gradient-to-b"
            />
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
