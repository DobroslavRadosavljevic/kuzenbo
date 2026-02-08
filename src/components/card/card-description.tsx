import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const CardDescription = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("text-muted-foreground text-sm", className)}
    data-slot="card-description"
    {...props}
  />
);

export { CardDescription };
