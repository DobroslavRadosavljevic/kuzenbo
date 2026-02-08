import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { DropdownMenuSubTrigger } from "@/components/dropdown-menu/dropdown-menu";

const MenubarSubTrigger = ({
  className,
  inset,
  ...props
}: ComponentProps<typeof DropdownMenuSubTrigger> & {
  inset?: boolean;
}) => (
  <DropdownMenuSubTrigger
    className={cn(
      "gap-1.5 rounded-md px-1.5 py-1 text-sm focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-[inset]:pl-8 data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    data-inset={inset}
    data-slot="menubar-sub-trigger"
    {...props}
  />
);

export { MenubarSubTrigger };
