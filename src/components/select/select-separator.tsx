"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "tailwind-variants";

const SelectSeparator = ({
  className,
  ...props
}: SelectPrimitive.Separator.Props) => (
  <SelectPrimitive.Separator
    className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
    data-slot="select-separator"
    {...props}
  />
);

export { SelectSeparator };
