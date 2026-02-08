import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const BreadcrumbList = ({ className, ...props }: ComponentProps<"ol">) => (
  <ol
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5",
      className
    )}
    data-slot="breadcrumb-list"
    {...props}
  />
);

export { BreadcrumbList };
