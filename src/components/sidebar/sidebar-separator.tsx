import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { Separator } from "@/components/separator/separator";

const SidebarSeparator = ({
  className,
  ...props
}: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn("w-auto bg-sidebar-border", className)}
    data-sidebar="separator"
    data-slot="sidebar-separator"
    {...props}
  />
);

export { SidebarSeparator };
