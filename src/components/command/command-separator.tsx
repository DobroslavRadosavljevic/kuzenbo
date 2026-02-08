"use client";

import type { ComponentProps } from "react";

import { Command as CommandPrimitive } from "cmdk";
import { cn } from "tailwind-variants";

const CommandSeparator = ({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Separator>) => (
  <CommandPrimitive.Separator
    className={cn("-mx-1 h-px bg-border", className)}
    data-slot="command-separator"
    {...props}
  />
);

export { CommandSeparator };
