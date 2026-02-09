"use client";

import type { ComponentPropsWithRef } from "react";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "tailwind-variants";

const ComboboxChips = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> &
  ComboboxPrimitive.Chips.Props) => (
  <ComboboxPrimitive.Chips
    className={cn(
      "flex min-h-8 flex-wrap items-center gap-1 rounded-lg border border-input bg-transparent bg-clip-padding px-2.5 py-1 text-sm transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-aria-invalid:border-danger has-data-[slot=combobox-chip]:px-1 has-aria-invalid:ring-[3px] has-aria-invalid:ring-danger/20 dark:bg-input/30 dark:has-aria-invalid:border-danger/50 dark:has-aria-invalid:ring-danger/40",
      className
    )}
    data-slot="combobox-chips"
    {...props}
  />
);

export { ComboboxChips };
