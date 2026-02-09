"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { UnfoldMoreIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

const SelectTrigger = ({
  className,
  size = "default",
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  size?: "sm" | "default";
}) => (
  <SelectPrimitive.Trigger
    className={cn(
      "flex w-fit cursor-pointer select-none items-center justify-between gap-1.5 whitespace-nowrap rounded-md border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-[3px] aria-invalid:ring-danger/20 data-[size=default]:h-9 data-[size=sm]:h-8 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[placeholder]:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:aria-invalid:border-danger/50 dark:aria-invalid:ring-danger/40 dark:hover:bg-input/50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    data-size={size}
    data-slot="select-trigger"
    {...props}
  >
    {children}
    <SelectPrimitive.Icon
      render={
        <HugeiconsIcon
          className="pointer-events-none size-4 text-muted-foreground"
          icon={UnfoldMoreIcon}
          strokeWidth={2}
        />
      }
    />
  </SelectPrimitive.Trigger>
);

export { SelectTrigger };
