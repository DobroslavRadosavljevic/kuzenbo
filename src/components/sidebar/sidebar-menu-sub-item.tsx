import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const SidebarMenuSubItem = ({ className, ...props }: ComponentProps<"li">) => (
  <li
    className={cn("group/menu-sub-item relative", className)}
    data-sidebar="menu-sub-item"
    data-slot="sidebar-menu-sub-item"
    {...props}
  />
);

export { SidebarMenuSubItem };
