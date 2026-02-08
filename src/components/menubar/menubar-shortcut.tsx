import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { DropdownMenuShortcut } from "@/components/dropdown-menu/dropdown-menu";

const MenubarShortcut = ({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuShortcut>) => (
  <DropdownMenuShortcut
    className={cn(
      "ml-auto text-muted-foreground text-xs tracking-widest group-focus/menubar-item:text-accent-foreground",
      className
    )}
    data-slot="menubar-shortcut"
    {...props}
  />
);

export { MenubarShortcut };
