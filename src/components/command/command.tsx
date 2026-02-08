"use client";

import type { ComponentProps } from "react";

import { Command as CommandPrimitive } from "cmdk";
import { cn } from "tailwind-variants";

import { CommandDialog } from "./command-dialog";
import { CommandEmpty } from "./command-empty";
import { CommandGroup } from "./command-group";
import { CommandInput } from "./command-input";
import { CommandItem } from "./command-item";
import { CommandList } from "./command-list";
import { CommandSeparator } from "./command-separator";
import { CommandShortcut } from "./command-shortcut";

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

Command.Dialog = CommandDialog;
Command.Empty = CommandEmpty;
Command.Group = CommandGroup;
Command.Input = CommandInput;
Command.Item = CommandItem;
Command.List = CommandList;
Command.Separator = CommandSeparator;
Command.Shortcut = CommandShortcut;

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
