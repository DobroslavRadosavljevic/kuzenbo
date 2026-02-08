import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const TableCaption = ({ className, ...props }: ComponentProps<"caption">) => (
  <caption
    className={cn("mt-4 text-muted-foreground text-sm", className)}
    data-slot="table-caption"
    {...props}
  />
);

export { TableCaption };
