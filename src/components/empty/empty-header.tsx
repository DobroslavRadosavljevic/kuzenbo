import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const EmptyHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("flex max-w-sm flex-col items-center gap-2", className)}
    data-slot="empty-header"
    {...props}
  />
);

export { EmptyHeader };
