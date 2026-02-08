import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const ItemHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex basis-full items-center justify-between gap-2",
      className
    )}
    data-slot="item-header"
    {...props}
  />
);

export { ItemHeader };
