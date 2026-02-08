"use client";

import type { ComponentProps } from "react";

import { Command as CommandPrimitive } from "cmdk";
import { cn } from "tailwind-variants";

const Command = ({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive>) => (
  <CommandPrimitive
    className={cn(
      "flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground",
      className
    )}
    data-slot="command"
    {...props}
  />
);

export { CommandDialog } from "./command-dialog";
export { CommandEmpty } from "./command-empty";
export { CommandGroup } from "./command-group";
export { CommandInput } from "./command-input";
export { CommandItem } from "./command-item";
export { CommandList } from "./command-list";
export { CommandSeparator } from "./command-separator";
export { CommandShortcut } from "./command-shortcut";
export { Command };
