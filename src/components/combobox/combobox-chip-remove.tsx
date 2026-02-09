"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/button/button";

const ComboboxChipRemove = ({
  ...props
}: ComboboxPrimitive.ChipRemove.Props) => (
  <ComboboxPrimitive.ChipRemove
    className="-ml-1 opacity-50 hover:opacity-100"
    data-slot="combobox-chip-remove"
    render={<Button size="icon-xs" variant="ghost" />}
    {...props}
  >
    <HugeiconsIcon
      className="pointer-events-none"
      icon={Cancel01Icon}
      strokeWidth={2}
    />
  </ComboboxPrimitive.ChipRemove>
);

export { ComboboxChipRemove };
