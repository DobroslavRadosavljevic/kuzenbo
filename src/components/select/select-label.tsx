"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "tailwind-variants";

const SelectLabel = ({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) => (
  <SelectPrimitive.GroupLabel
    className={cn("px-1.5 py-1 text-muted-foreground text-xs", className)}
    data-slot="select-label"
    {...props}
  />
);

export { SelectLabel };
