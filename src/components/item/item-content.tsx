import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const ItemContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0 [&+[data-slot=item-content]]:flex-none",
      className
    )}
    data-slot="item-content"
    {...props}
  />
);

export { ItemContent };
