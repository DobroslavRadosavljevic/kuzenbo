import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const ContextMenuShortcut = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    className={cn(
      "ml-auto text-muted-foreground text-xs tracking-widest group-focus/context-menu-item:text-accent-foreground",
      className
    )}
    data-slot="context-menu-shortcut"
    {...props}
  />
);

export { ContextMenuShortcut };
