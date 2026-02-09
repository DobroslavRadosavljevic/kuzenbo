"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { cn } from "tailwind-variants";

import { CollapsibleContent } from "./collapsible-content";
import { CollapsibleTrigger } from "./collapsible-trigger";

const Collapsible = ({
  className,
  ...props
}: CollapsiblePrimitive.Root.Props) => (
  <CollapsiblePrimitive.Root
    className={cn("flex flex-col", className)}
    data-slot="collapsible"
    {...props}
  />
);

Collapsible.Content = CollapsibleContent;
Collapsible.Trigger = CollapsibleTrigger;

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
