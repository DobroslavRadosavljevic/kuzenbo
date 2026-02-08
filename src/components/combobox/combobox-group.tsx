"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "tailwind-variants";

const ComboboxGroup = ({
  className,
  ...props
}: ComboboxPrimitive.Group.Props) => (
  <ComboboxPrimitive.Group
    className={cn(className)}
    data-slot="combobox-group"
    {...props}
  />
);

export { ComboboxGroup };
