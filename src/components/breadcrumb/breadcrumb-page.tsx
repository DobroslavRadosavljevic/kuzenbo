import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const BreadcrumbPage = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    aria-current="page"
    aria-disabled="true"
    className={cn("font-normal text-foreground", className)}
    data-slot="breadcrumb-page"
    {...props}
  />
);

export { BreadcrumbPage };
