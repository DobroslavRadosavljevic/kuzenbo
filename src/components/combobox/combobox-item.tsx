"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

const ComboboxItem = ({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) => (
  <ComboboxPrimitive.Item
    className={cn(
      "relative flex w-full cursor-clickable select-none items-center gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[disabled]:opacity-50 not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    data-slot="combobox-item"
    {...props}
  >
    {children}
    <ComboboxPrimitive.ItemIndicator
      render={
        <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
      }
    >
      <HugeiconsIcon
        className="pointer-events-none"
        icon={Tick02Icon}
        strokeWidth={2}
      />
    </ComboboxPrimitive.ItemIndicator>
  </ComboboxPrimitive.Item>
);

export { ComboboxItem };
