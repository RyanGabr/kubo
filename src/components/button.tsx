import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Default icon size to use => 16

const buttonVariants = cva(
  "flex items-center justify-center gap-1 text-xs font-medium rounded-md",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/90",
        secondary: "bg-foreground/10 text-foreground hover:bg-foreground/15",
        indigo: "bg-indigo-500 text-white hover:bg-indigo-500/90",
        destructive: "bg-red-400 text-background hover:bg-red-400/90",
        outline: "bg-transparent text-foreground border border-border hover:bg-foreground/5",
        ghost: "bg-transparent hover:bg-foreground/10"
      },
      size: {
        default: "px-3 py-2",
        md: "px-3 py-2.5",
        icon: "p-2"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
