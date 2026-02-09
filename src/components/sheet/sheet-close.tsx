"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { cn } from "tailwind-variants";

const SheetClose = ({ className, ...props }: SheetPrimitive.Close.Props) => (
  <SheetPrimitive.Close
    className={cn("cursor-pointer", className)}
    data-slot="sheet-close"
    {...props}
  />
);

export { SheetClose };
