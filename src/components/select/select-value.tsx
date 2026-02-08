"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "tailwind-variants";

const SelectValue = ({ className, ...props }: SelectPrimitive.Value.Props) => (
  <SelectPrimitive.Value
    className={cn("flex flex-1 text-left", className)}
    data-slot="select-value"
    {...props}
  />
);

export { SelectValue };
