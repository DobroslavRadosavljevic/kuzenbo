import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const SidebarFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("flex flex-col gap-2 p-2", className)}
    data-sidebar="footer"
    data-slot="sidebar-footer"
    {...props}
  />
);

export { SidebarFooter };
