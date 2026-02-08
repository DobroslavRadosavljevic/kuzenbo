"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "tailwind-variants";

const ComboboxEmpty = ({
  className,
  ...props
}: ComboboxPrimitive.Empty.Props) => (
  <ComboboxPrimitive.Empty
    className={cn(
      "hidden w-full justify-center py-2 text-center text-muted-foreground text-sm group-data-empty/combobox-content:flex",
      className
    )}
    data-slot="combobox-empty"
    {...props}
  />
);

export { ComboboxEmpty };
