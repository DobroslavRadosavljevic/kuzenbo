"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import { cn } from "tailwind-variants";

import {
  kbOverlayDirectionalStateClasses,
  kbOverlaySurfaceStateClasses,
  kbOverlayTransitionClasses,
} from "@/lib/motion";

const HoverCardContent = ({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 4,
  ...props
}: PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) => (
  <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
    <PreviewCardPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      className="isolate z-50"
      side={side}
      sideOffset={sideOffset}
    >
      <PreviewCardPrimitive.Popup
        className={cn(
          "z-50 w-64 origin-(--transform-origin) rounded-lg bg-popover p-4 text-popover-foreground text-sm shadow-md outline-hidden ring-1 ring-foreground/10",
          kbOverlayTransitionClasses,
          kbOverlaySurfaceStateClasses,
          kbOverlayDirectionalStateClasses,
          className
        )}
        data-slot="hover-card-content"
        {...props}
      />
    </PreviewCardPrimitive.Positioner>
  </PreviewCardPrimitive.Portal>
);

export { HoverCardContent };
