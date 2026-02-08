import type { ComponentProps } from "react";

import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "tailwind-variants";

export type InputProps = ComponentProps<"input">;

const Input = ({ className, type, ...props }: InputProps) => (
  <InputPrimitive
    className={cn(
      "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-2.5 py-1 text-base outline-none transition-colors file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:disabled:bg-input/80",
      className
    )}
    data-slot="input"
    type={type}
    {...props}
  />
);

export { Input };
