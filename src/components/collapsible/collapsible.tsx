"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

const Collapsible = ({ ...props }: CollapsiblePrimitive.Root.Props) => (
  <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
);

export { Collapsible };
export { CollapsibleContent } from "./collapsible-content";
export { CollapsibleTrigger } from "./collapsible-trigger";
