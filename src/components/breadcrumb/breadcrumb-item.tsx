import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const BreadcrumbItem = ({ className, ...props }: ComponentProps<"li">) => (
  <li
    className={cn("inline-flex items-center gap-1", className)}
    data-slot="breadcrumb-item"
    {...props}
  />
);

export { BreadcrumbItem };
