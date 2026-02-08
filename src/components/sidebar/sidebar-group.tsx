import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const SidebarGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
    data-sidebar="group"
    data-slot="sidebar-group"
    {...props}
  />
);

export { SidebarGroup };
