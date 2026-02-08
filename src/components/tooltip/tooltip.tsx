"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import { TooltipContent } from "./tooltip-content";
import { TooltipProvider } from "./tooltip-provider";
import { TooltipTrigger } from "./tooltip-trigger";

const Tooltip = ({ ...props }: TooltipPrimitive.Root.Props) => (
  <TooltipProvider>
    <TooltipPrimitive.Root data-slot="tooltip" {...props} />
  </TooltipProvider>
);

Tooltip.Content = TooltipContent;
Tooltip.Provider = TooltipProvider;
Tooltip.Trigger = TooltipTrigger;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
