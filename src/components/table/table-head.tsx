import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const TableHead = ({ className, ...props }: ComponentProps<"th">) => (
  <th
    className={cn(
      "h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    data-slot="table-head"
    {...props}
  />
);

export { TableHead };
