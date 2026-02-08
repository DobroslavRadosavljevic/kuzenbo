import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { DropdownMenuSubContent } from "@/components/dropdown-menu/dropdown-menu";

const MenubarSubContent = ({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuSubContent>) => (
  <DropdownMenuSubContent
    className={cn(
      "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 min-w-32 rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-closed:animate-out data-open:animate-in",
      className
    )}
    data-slot="menubar-sub-content"
    {...props}
  />
);

export { MenubarSubContent };
