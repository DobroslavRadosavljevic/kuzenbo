"use client";

import type { ComponentProps } from "react";

import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "tailwind-variants";

import {
  kbInteractiveTransitionClasses,
  kbPressableInteractionClasses,
} from "@/lib/motion";

const CommandItem = ({
  className,
  children,
  ...props
}: ComponentProps<typeof CommandPrimitive.Item>) => (
  <CommandPrimitive.Item
    className={cn(
      "group/command-item relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed data-selected:bg-muted data-selected:text-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [[data-slot=dialog-content]_&]:rounded-lg! data-selected:*:[svg]:text-foreground",
      kbInteractiveTransitionClasses,
      kbPressableInteractionClasses,
      "data-[disabled=true]:motion-safe:active:[scale:1]",
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
