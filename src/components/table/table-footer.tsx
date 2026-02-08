import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const TableFooter = ({ className, ...props }: ComponentProps<"tfoot">) => (
  <tfoot
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    data-slot="table-footer"
    {...props}
  />
);

export { TableFooter };
