"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { cn } from "tailwind-variants";

const PopoverTitle = ({
  className,
  ...props
}: PopoverPrimitive.Title.Props) => (
  <PopoverPrimitive.Title
    className={cn("font-medium", className)}
    data-slot="popover-title"
    {...props}
  />
);

export { PopoverTitle };
