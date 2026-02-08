"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";

const HoverCard = ({ ...props }: PreviewCardPrimitive.Root.Props) => (
  <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
);

export { HoverCard };
export { HoverCardContent } from "./hover-card-content";
export { HoverCardTrigger } from "./hover-card-trigger";
