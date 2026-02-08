import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const AlertDescription = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "text-balance text-muted-foreground text-sm md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
      className
    )}
    data-slot="alert-description"
    {...props}
  />
);

export { AlertDescription };
