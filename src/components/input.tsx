import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "text-[13px] px-3 border border-border py-1.5 rounded-md focus:outline-none focus:ring focus:ring-foreground/20",
  {
    variants: {
      variant: {
        default: "bg-background",
        primary: "bg-foreground/5",
      },
      size: {
        default: "text-[13px]",
        xs: "text-xs",
        sm: "text-sm py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  size?: VariantProps<typeof inputVariants>["size"];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
