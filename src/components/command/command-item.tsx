"use client";

import type { ComponentProps } from "react";

import { Tick02Icon } from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "tailwind-variants";

const CommandItem = ({
  className,
  children,
  ...props
}: ComponentProps<typeof CommandPrimitive.Item>) => (
  <CommandPrimitive.Item
    className={cn(
      "group/command-item relative flex cursor-clickable select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed data-selected:bg-muted data-selected:text-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [[data-slot=dialog-content]_&]:rounded-lg! data-selected:*:[svg]:text-foreground",
      className
    )}
    data-slot="command-item"
    {...props}
  >
    {children}
    <HugeiconsIcon
      className="ml-auto opacity-0 group-has-[[data-slot=command-shortcut]]/command-item:hidden group-data-[checked=true]/command-item:opacity-100"
      icon={Tick02Icon}
      strokeWidth={2}
    />
  </CommandPrimitive.Item>
);

export { CommandItem };
