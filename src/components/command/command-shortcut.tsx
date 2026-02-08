"use client";

import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const CommandShortcut = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn(
      "ml-auto text-muted-foreground text-xs tracking-widest group-data-selected/command-item:text-foreground",
      className
    )}
    data-slot="command-shortcut"
    {...props}
  />
);

export { CommandShortcut };
