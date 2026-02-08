import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const SheetHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("flex flex-col gap-0.5 p-4", className)}
    data-slot="sheet-header"
    {...props}
  />
);

export { SheetHeader };
