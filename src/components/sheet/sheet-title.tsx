"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { cn } from "tailwind-variants";

const SheetTitle = ({ className, ...props }: SheetPrimitive.Title.Props) => (
  <SheetPrimitive.Title
    className={cn("font-medium text-base text-foreground", className)}
    data-slot="sheet-title"
    {...props}
  />
);

export { SheetTitle };
