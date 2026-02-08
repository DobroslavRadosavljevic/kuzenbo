import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const PaginationContent = ({ className, ...props }: ComponentProps<"ul">) => (
  <ul
    className={cn("flex items-center gap-0.5", className)}
    data-slot="pagination-content"
    {...props}
  />
);

export { PaginationContent };
