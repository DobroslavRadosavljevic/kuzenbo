"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { Cancel01Icon } from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

import { InputGroupButton } from "@/components/input-group/input-group";

const ComboboxClear = ({
  className,
  ...props
}: ComboboxPrimitive.Clear.Props) => (
  <ComboboxPrimitive.Clear
    className={cn(className)}
    data-slot="combobox-clear"
    render={<InputGroupButton size="icon-xs" variant="ghost" />}
    {...props}
  >
    <HugeiconsIcon
      className="pointer-events-none"
      icon={Cancel01Icon}
      strokeWidth={2}
    />
  </ComboboxPrimitive.Clear>
);

export { ComboboxClear };
