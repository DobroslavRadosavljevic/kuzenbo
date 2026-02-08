import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const AlertTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
      className
    )}
    data-slot="alert-title"
    {...props}
  />
);

export { AlertTitle };
