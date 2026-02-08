"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { ArrowDown01Icon } from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

const ComboboxTrigger = ({
  className,
  children,
  ...props
}: ComboboxPrimitive.Trigger.Props) => (
  <ComboboxPrimitive.Trigger
    className={cn(
      "cursor-clickable [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    data-slot="combobox-trigger"
    {...props}
  >
    {children}
    <HugeiconsIcon
      className="pointer-events-none size-4 text-muted-foreground"
      icon={ArrowDown01Icon}
      strokeWidth={2}
    />
  </ComboboxPrimitive.Trigger>
);

export { ComboboxTrigger };
