"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";

import { HoverCardContent } from "./hover-card-content";
import { HoverCardTrigger } from "./hover-card-trigger";

const HoverCard = ({ ...props }: PreviewCardPrimitive.Root.Props) => (
  <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
);

HoverCard.Content = HoverCardContent;
HoverCard.Trigger = HoverCardTrigger;

export { HoverCard, HoverCardContent, HoverCardTrigger };
