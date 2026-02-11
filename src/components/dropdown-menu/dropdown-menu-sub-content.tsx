import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { kbOverlayTransitionClasses } from "@/lib/motion";

import { DropdownMenuContent } from "./dropdown-menu-content";

const DropdownMenuSubContent = ({
  align = "start",
  alignOffset = -3,
  side = "right",
  sideOffset = 0,
  className,
  ...props
}: ComponentProps<typeof DropdownMenuContent>) => (
  <DropdownMenuContent
    align={align}
    alignOffset={alignOffset}
    className={cn(
      "w-auto min-w-[96px] rounded-md bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10",
      kbOverlayTransitionClasses,
      className
    )}
    data-slot="dropdown-menu-sub-content"
    side={side}
    sideOffset={sideOffset}
    {...props}
  />
);

export { DropdownMenuSubContent };
