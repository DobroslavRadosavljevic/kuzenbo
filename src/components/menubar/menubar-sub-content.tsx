import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { DropdownMenuSubContent } from "@/components/dropdown-menu/dropdown-menu";
import { kbOverlayTransitionClasses } from "@/lib/motion";

const MenubarSubContent = ({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuSubContent>) => (
  <DropdownMenuSubContent
    className={cn(
      "min-w-32 rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10",
      kbOverlayTransitionClasses,
      className
    )}
    data-slot="menubar-sub-content"
    {...props}
  />
);

export { MenubarSubContent };
