import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { DropdownMenuContent } from "@/components/dropdown-menu/dropdown-menu";

const MenubarContent = ({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: ComponentProps<typeof DropdownMenuContent>) => (
  <DropdownMenuContent
    align={align}
    alignOffset={alignOffset}
    className={cn(
      "data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 min-w-36 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-open:animate-in",
      className
    )}
    data-slot="menubar-content"
    sideOffset={sideOffset}
    {...props}
  />
);

export { MenubarContent };
