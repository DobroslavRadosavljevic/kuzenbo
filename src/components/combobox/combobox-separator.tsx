"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "tailwind-variants";

const ComboboxSeparator = ({
  className,
  ...props
}: ComboboxPrimitive.Separator.Props) => (
  <ComboboxPrimitive.Separator
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    data-slot="combobox-separator"
    {...props}
  />
);

export { ComboboxSeparator };
