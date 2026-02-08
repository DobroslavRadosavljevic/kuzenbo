"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { cn } from "tailwind-variants";

const SheetTrigger = ({
  className,
  ...props
}: SheetPrimitive.Trigger.Props) => (
  <SheetPrimitive.Trigger
    className={cn("cursor-clickable", className)}
    data-slot="sheet-trigger"
    {...props}
  />
);

export { SheetTrigger };
