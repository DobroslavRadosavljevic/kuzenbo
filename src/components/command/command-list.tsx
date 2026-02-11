"use client";

import type { ComponentProps } from "react";

import { Command as CommandPrimitive } from "cmdk";
import { cn } from "tailwind-variants";

import { kbStateTransitionClasses } from "@/lib/motion";

const CommandList = ({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.List>) => (
  <CommandPrimitive.List
    className={cn(
      "no-scrollbar max-h-72 scroll-py-1 overflow-y-auto overflow-x-hidden outline-none",
      kbStateTransitionClasses,
      "[transition-property:height,opacity] [height:var(--cmdk-list-height,auto)]",
      className
    )}
    data-slot="command-list"
    {...props}
  />
);

export { CommandList };
