"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

import { Button } from "@/components/button/button";

import { DialogClose } from "./dialog-close";
import { DialogOverlay } from "./dialog-overlay";
import { DialogPortal } from "./dialog-portal";

export interface DialogContentProps extends DialogPrimitive.Popup.Props {
  showCloseButton?: boolean;
}

const DialogContent = ({
  "aria-describedby": ariaDescribedBy,
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Popup
      aria-describedby={ariaDescribedBy}
      className={cn(
        "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-xl bg-background p-6 text-sm outline-none ring-1 ring-foreground/10 duration-100 data-closed:animate-out data-open:animate-in sm:max-w-md",
        className
      )}
      data-slot="dialog-content"
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogClose
          data-slot="dialog-close"
          render={
            <Button
              className="absolute top-4 right-4"
              size="icon-sm"
              variant="ghost"
            />
          }
        >
          <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          <span className="sr-only">Close</span>
        </DialogClose>
      )}
    </DialogPrimitive.Popup>
  </DialogPortal>
);

export { DialogContent };
