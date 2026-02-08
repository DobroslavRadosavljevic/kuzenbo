"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { cn } from "tailwind-variants";

const PopoverDescription = ({
  className,
  ...props
}: PopoverPrimitive.Description.Props) => (
  <PopoverPrimitive.Description
    className={cn("text-muted-foreground", className)}
    data-slot="popover-description"
    {...props}
  />
);

export { PopoverDescription };
