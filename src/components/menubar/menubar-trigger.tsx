import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { DropdownMenuTrigger } from "@/components/dropdown-menu/dropdown-menu";

const MenubarTrigger = ({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuTrigger>) => (
  <DropdownMenuTrigger
    className={cn(
      "flex cursor-pointer select-none items-center rounded-sm px-1.5 py-px font-medium text-sm outline-hidden hover:bg-muted aria-expanded:bg-muted",
      className
    )}
    data-slot="menubar-trigger"
    {...props}
  />
);

export { MenubarTrigger };
