"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { cn } from "tailwind-variants";

const CollapsibleContent = ({
  className,
  ...props
}: CollapsiblePrimitive.Panel.Props) => (
  <CollapsiblePrimitive.Panel
    className={cn(
      "flex h-(--collapsible-panel-height) flex-col justify-end overflow-hidden transition-all ease-out duration-150",
      "[&[hidden]:not([hidden='until-found'])]:hidden",
      "data-ending-style:h-0 data-starting-style:h-0",
      className
    )}
    data-slot="collapsible-content"
    {...props}
  />
);

export { CollapsibleContent };
