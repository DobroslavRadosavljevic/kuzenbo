import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const SidebarMenuSub = ({ className, ...props }: ComponentProps<"ul">) => (
  <ul
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border border-l px-2.5 py-0.5 group-data-[collapsible=icon]:hidden",
      className
    )}
    data-sidebar="menu-sub"
    data-slot="sidebar-menu-sub"
    {...props}
  />
);

export { SidebarMenuSub };
