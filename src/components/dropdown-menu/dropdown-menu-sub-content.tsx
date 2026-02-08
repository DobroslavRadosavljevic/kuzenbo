import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

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
      "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-auto min-w-[96px] rounded-md bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-closed:animate-out data-open:animate-in",
      className
    )}
    data-slot="dropdown-menu-sub-content"
    side={side}
    sideOffset={sideOffset}
    {...props}
  />
);

export { DropdownMenuSubContent };
