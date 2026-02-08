import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { Input } from "@/components/input/input";

const SidebarInput = ({
  className,
  ...props
}: ComponentProps<typeof Input>) => (
  <Input
    className={cn("h-8 w-full bg-background shadow-none", className)}
    data-sidebar="input"
    data-slot="sidebar-input"
    {...props}
  />
);

export { SidebarInput };
