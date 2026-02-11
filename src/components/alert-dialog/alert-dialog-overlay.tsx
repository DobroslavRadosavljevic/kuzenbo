import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { cn } from "tailwind-variants";

import {
  kbOverlayBackdropStateClasses,
  kbOverlayTransitionClasses,
} from "@/lib/motion";

const AlertDialogOverlay = ({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) => (
  <AlertDialogPrimitive.Backdrop
    className={cn(
      "fixed inset-0 isolate z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs",
      kbOverlayTransitionClasses,
      kbOverlayBackdropStateClasses,
      className
    )}
    data-slot="alert-dialog-overlay"
    {...props}
  />
);

export { AlertDialogOverlay };
