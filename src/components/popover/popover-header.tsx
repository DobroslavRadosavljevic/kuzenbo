import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const PopoverHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("flex flex-col gap-0.5 text-sm", className)}
    data-slot="popover-header"
    {...props}
  />
);

export { PopoverHeader };
