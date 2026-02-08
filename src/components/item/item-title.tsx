import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const ItemTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "line-clamp-1 flex w-fit items-center gap-2 font-medium text-sm leading-snug underline-offset-4",
      className
    )}
    data-slot="item-title"
    {...props}
  />
);

export { ItemTitle };
