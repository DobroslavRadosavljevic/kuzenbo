import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { DropdownMenuLabel } from "@/components/dropdown-menu/dropdown-menu";

const MenubarLabel = ({
  className,
  inset,
  ...props
}: ComponentProps<typeof DropdownMenuLabel>) => (
  <DropdownMenuLabel
    className={cn(
      "px-1.5 py-1 font-medium text-sm data-[inset]:pl-8",
      className
    )}
    data-inset={inset}
    data-slot="menubar-label"
    {...props}
  />
);

export { MenubarLabel };
