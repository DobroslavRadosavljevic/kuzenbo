"use client";

import type { ComponentProps } from "react";

import { Command as CommandPrimitive } from "cmdk";
import { cn } from "tailwind-variants";

const CommandGroup = ({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Group>) => (
  <CommandPrimitive.Group
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs",
      className
    )}
    data-slot="command-group"
    {...props}
  />
);

export { CommandGroup };
