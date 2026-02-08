"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "tailwind-variants";

const ComboboxLabel = ({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) => (
  <ComboboxPrimitive.GroupLabel
    className={cn("px-2 py-1.5 text-muted-foreground text-xs", className)}
    data-slot="combobox-label"
    {...props}
  />
);

export { ComboboxLabel };
