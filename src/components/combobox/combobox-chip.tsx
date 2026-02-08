"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "tailwind-variants";

import { ComboboxChipRemove } from "./combobox-chip-remove";

const ComboboxChip = ({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean;
}) => (
  <ComboboxPrimitive.Chip
    className={cn(
      "flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 whitespace-nowrap rounded-sm bg-muted px-1.5 font-medium text-foreground text-xs has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-data-[slot=combobox-chip-remove]:pr-0 has-disabled:opacity-50",
      className
    )}
    data-slot="combobox-chip"
    {...props}
  >
    {children}
    {showRemove && <ComboboxChipRemove />}
  </ComboboxPrimitive.Chip>
);

export { ComboboxChip };
