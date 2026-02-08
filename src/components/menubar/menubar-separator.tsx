import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { DropdownMenuSeparator } from "@/components/dropdown-menu/dropdown-menu";

const MenubarSeparator = ({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuSeparator>) => (
  <DropdownMenuSeparator
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    data-slot="menubar-separator"
    {...props}
  />
);

export { MenubarSeparator };
