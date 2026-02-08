import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const SidebarMenu = ({ className, ...props }: ComponentProps<"ul">) => (
  <ul
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    data-sidebar="menu"
    data-slot="sidebar-menu"
    {...props}
  />
);

export { SidebarMenu };
