import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const SidebarHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("flex flex-col gap-2 p-2", className)}
    data-sidebar="header"
    data-slot="sidebar-header"
    {...props}
  />
);

export { SidebarHeader };
