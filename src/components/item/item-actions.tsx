import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const ItemActions = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("flex items-center gap-2", className)}
    data-slot="item-actions"
    {...props}
  />
);

export { ItemActions };
