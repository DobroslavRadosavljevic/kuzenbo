"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { cn } from "tailwind-variants";

import {
  kbOverlayBackdropStateClasses,
  kbOverlayTransitionClasses,
} from "@/lib/motion";

const SheetOverlay = ({
  className,
  ...props
}: SheetPrimitive.Backdrop.Props) => (
  <SheetPrimitive.Backdrop
    className={cn(
      "fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs",
      kbOverlayTransitionClasses,
      kbOverlayBackdropStateClasses,
      className
    )}
    data-slot="sheet-overlay"
    {...props}
  />
);

export { SheetOverlay };
