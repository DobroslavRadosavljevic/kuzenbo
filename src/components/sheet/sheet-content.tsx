"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

import { Button } from "@/components/button/button";
import {
  kbOverlayDirectionalStateClasses,
  kbOverlaySurfaceStateClasses,
  kbOverlayTransitionClasses,
} from "@/lib/motion";

import { SheetClose } from "./sheet-close";
import { SheetOverlay } from "./sheet-overlay";
import { SheetPortal } from "./sheet-portal";

const SheetContent = ({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Popup
      className={cn(
        "fixed z-50 flex flex-col gap-4 bg-background bg-clip-padding text-sm shadow-lg data-[side=bottom]:inset-x-0 data-[side=top]:inset-x-0 data-[side=left]:inset-y-0 data-[side=right]:inset-y-0 data-[side=top]:top-0 data-[side=right]:right-0 data-[side=bottom]:bottom-0 data-[side=left]:left-0 data-[side=bottom]:h-auto data-[side=left]:h-full data-[side=right]:h-full data-[side=top]:h-auto data-[side=left]:w-3/4 data-[side=right]:w-3/4 data-[side=bottom]:border-t data-[side=left]:border-r data-[side=top]:border-b data-[side=right]:border-l data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
        kbOverlayTransitionClasses,
        kbOverlaySurfaceStateClasses,
        kbOverlayDirectionalStateClasses,
        className
      )}
      data-side={side}
      data-slot="sheet-content"
      {...props}
    >
      {children}
      {showCloseButton && (
        <SheetClose
          data-slot="sheet-close"
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
        </SheetClose>
      )}
    </SheetPrimitive.Popup>
  </SheetPortal>
);

export { SheetContent };
