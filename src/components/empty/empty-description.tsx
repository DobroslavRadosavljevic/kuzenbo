import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const EmptyDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <div
    className={cn(
      "text-muted-foreground text-sm/relaxed [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
      className
    )}
    data-slot="empty-description"
    {...props}
  />
);

export { EmptyDescription };
