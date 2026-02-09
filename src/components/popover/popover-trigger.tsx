"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import { cn } from "tailwind-variants";

const PopoverTrigger = ({
  className,
  ...props
}: PopoverPrimitive.Trigger.Props) => (
  <PopoverPrimitive.Trigger
    className={cn("cursor-pointer", className)}
    data-slot="popover-trigger"
    {...props}
  />
);

export { PopoverTrigger };
