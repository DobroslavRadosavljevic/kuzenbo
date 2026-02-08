"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

import { CollapsibleContent } from "./collapsible-content";
import { CollapsibleTrigger } from "./collapsible-trigger";

const Collapsible = ({ ...props }: CollapsiblePrimitive.Root.Props) => (
  <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
);

Collapsible.Content = CollapsibleContent;
Collapsible.Trigger = CollapsibleTrigger;

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
