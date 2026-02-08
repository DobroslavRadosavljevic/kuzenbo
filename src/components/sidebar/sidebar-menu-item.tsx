import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const SidebarMenuItem = ({ className, ...props }: ComponentProps<"li">) => (
  <li
    className={cn("group/menu-item relative", className)}
    data-sidebar="menu-item"
    data-slot="sidebar-menu-item"
    {...props}
  />
);

export { SidebarMenuItem };
