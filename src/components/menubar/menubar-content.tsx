import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { DropdownMenuContent } from "@/components/dropdown-menu/dropdown-menu";
import { kbOverlayTransitionClasses } from "@/lib/motion";

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
      "min-w-36 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10",
      kbOverlayTransitionClasses,
      className
    )}
    data-slot="menubar-content"
    sideOffset={sideOffset}
    {...props}
  />
);

export { MenubarContent };
