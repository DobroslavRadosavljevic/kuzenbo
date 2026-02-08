"use client";

import type { ComponentProps } from "react";

import { Command as CommandPrimitive } from "cmdk";
import { cn } from "tailwind-variants";

const CommandEmpty = ({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Empty>) => (
  <CommandPrimitive.Empty
    className={cn("py-6 text-center text-sm", className)}
    data-slot="command-empty"
    {...props}
  />
);

export { CommandEmpty };
