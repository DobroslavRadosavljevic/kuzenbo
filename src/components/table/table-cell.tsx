import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const TableCell = ({ className, ...props }: ComponentProps<"td">) => (
  <td
    className={cn(
      "whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0",
      className
    )}
    data-slot="table-cell"
    {...props}
  />
);

export { TableCell };
