import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const CardTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "font-medium text-base leading-snug group-data-[size=sm]/card:text-sm",
      className
    )}
    data-slot="card-title"
    {...props}
  />
);

export { CardTitle };
