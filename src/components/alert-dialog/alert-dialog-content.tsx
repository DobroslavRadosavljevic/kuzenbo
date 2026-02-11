import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { cn } from "tailwind-variants";

import {
  kbOverlaySurfaceStateClasses,
  kbOverlayTransitionClasses,
} from "@/lib/motion";

import { AlertDialogOverlay } from "./alert-dialog-overlay";
import { AlertDialogPortal } from "./alert-dialog-portal";

const AlertDialogContent = ({
  className,
  size = "default",
  ...props
}: AlertDialogPrimitive.Popup.Props & {
  size?: "default" | "sm";
}) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Popup
      className={cn(
        "group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-6 rounded-xl bg-background p-6 outline-none ring-1 ring-foreground/10 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-lg",
        kbOverlayTransitionClasses,
        kbOverlaySurfaceStateClasses,
        className
      )}
      data-size={size}
      data-slot="alert-dialog-content"
      {...props}
    />
  </AlertDialogPortal>
);

export { AlertDialogContent };
