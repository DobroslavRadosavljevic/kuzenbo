import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const DropdownMenuShortcut = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    className={cn(
      "ml-auto text-muted-foreground text-xs tracking-widest group-focus/dropdown-menu-item:text-accent-foreground",
      className
    )}
    data-slot="dropdown-menu-shortcut"
    {...props}
  />
);

export { DropdownMenuShortcut };
