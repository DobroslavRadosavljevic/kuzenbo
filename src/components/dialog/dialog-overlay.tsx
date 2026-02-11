"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cn } from "tailwind-variants";

import {
  kbOverlayBackdropStateClasses,
  kbOverlayTransitionClasses,
} from "@/lib/motion";

export type DialogOverlayProps = DialogPrimitive.Backdrop.Props;

const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => (
  <DialogPrimitive.Backdrop
    className={cn(
      "fixed inset-0 isolate z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs",
      kbOverlayTransitionClasses,
      kbOverlayBackdropStateClasses,
      className
    )}
    data-slot="dialog-overlay"
    {...props}
  />
);

export { DialogOverlay };
