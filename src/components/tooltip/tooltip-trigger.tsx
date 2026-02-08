"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import { cn } from "tailwind-variants";

const TooltipTrigger = ({
  className,
  ...props
}: TooltipPrimitive.Trigger.Props) => (
  <TooltipPrimitive.Trigger
    className={cn("cursor-clickable", className)}
    data-slot="tooltip-trigger"
    {...props}
  />
);

export { TooltipTrigger };
