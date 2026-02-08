import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const SidebarGroupContent = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn("w-full text-sm", className)}
    data-sidebar="group-content"
    data-slot="sidebar-group-content"
    {...props}
  />
);

export { SidebarGroupContent };
