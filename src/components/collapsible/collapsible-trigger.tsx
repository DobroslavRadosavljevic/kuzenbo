"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { cn } from "tailwind-variants";

const CollapsibleTrigger = ({
  className,
  ...props
}: CollapsiblePrimitive.Trigger.Props) => (
  <CollapsiblePrimitive.Trigger
    className={cn("cursor-pointer", className)}
    data-slot="collapsible-trigger"
    {...props}
  />
);

export { CollapsibleTrigger };
