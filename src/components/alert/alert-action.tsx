import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const AlertAction = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("absolute top-2 right-2", className)}
    data-slot="alert-action"
    {...props}
  />
);

export { AlertAction };
