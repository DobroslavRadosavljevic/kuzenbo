"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cn } from "tailwind-variants";

export type DialogOverlayProps = DialogPrimitive.Backdrop.Props;

const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => (
  <DialogPrimitive.Backdrop
    className={cn(
      "data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 isolate z-50 bg-black/10 duration-100 data-closed:animate-out data-open:animate-in supports-backdrop-filter:backdrop-blur-xs",
      className
    )}
    data-slot="dialog-overlay"
    {...props}
  />
);

export { DialogOverlay };
