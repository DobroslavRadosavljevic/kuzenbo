import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const TableBody = ({ className, ...props }: ComponentProps<"tbody">) => (
  <tbody
    className={cn("[&_tr:last-child]:border-0", className)}
    data-slot="table-body"
    {...props}
  />
);

export { TableBody };
