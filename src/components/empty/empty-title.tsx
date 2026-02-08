import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const EmptyTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("font-medium text-sm tracking-tight", className)}
    data-slot="empty-title"
    {...props}
  />
);

export { EmptyTitle };
