"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

const SelectItem = ({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) => (
  <SelectPrimitive.Item
    className={cn(
      "relative flex w-full cursor-clickable select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
      className
    )}
    data-slot="select-item"
    {...props}
  >
    <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
      {children}
    </SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator
      render={
        <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
      }
    >
      <HugeiconsIcon
        className="pointer-events-none"
        icon={Tick02Icon}
        strokeWidth={2}
      />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
);

export { SelectItem };
