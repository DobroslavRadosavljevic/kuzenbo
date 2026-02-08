import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const TableHeader = ({ className, ...props }: ComponentProps<"thead">) => (
  <thead
    className={cn("[&_tr]:border-b", className)}
    data-slot="table-header"
    {...props}
  />
);

export { TableHeader };
