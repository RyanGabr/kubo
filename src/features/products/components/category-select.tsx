import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCategories } from "@/features/categories/hooks/use-categories";

interface CategorySelectProps {
  value: string | undefined;
  onValueChange: (value: string) => void;
}

export function CategorySelect({ onValueChange, value }: CategorySelectProps) {
  const { data: categories } = useCategories();

  return (
    <Select value={value ?? ""} onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Escolha uma categoria" />
      </SelectTrigger>
      <SelectContent>
        {categories?.map((category) => (
          <SelectItem key={category.id} value={category.id} className="gap-2">
            <div
              data-color={category.color}
              className="size-2 rounded-full bg-gradient-to-b"
            />
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
