import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const EmptyContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex w-full min-w-0 max-w-sm flex-col items-center gap-2.5 text-balance text-sm",
      className
    )}
    data-slot="empty-content"
    {...props}
  />
);

export { EmptyContent };
