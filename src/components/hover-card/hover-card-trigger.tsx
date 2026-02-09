"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import { cn } from "tailwind-variants";

const HoverCardTrigger = ({
  className,
  ...props
}: PreviewCardPrimitive.Trigger.Props) => (
  <PreviewCardPrimitive.Trigger
    className={cn("cursor-pointer", className)}
    data-slot="hover-card-trigger"
    {...props}
  />
);

export { HoverCardTrigger };
