"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import { TooltipProvider } from "./tooltip-provider";

const Tooltip = ({ ...props }: TooltipPrimitive.Root.Props) => (
  <TooltipProvider>
    <TooltipPrimitive.Root data-slot="tooltip" {...props} />
  </TooltipProvider>
);

export { Tooltip };
export { TooltipContent } from "./tooltip-content";
export { TooltipProvider } from "./tooltip-provider";
export { TooltipTrigger } from "./tooltip-trigger";
