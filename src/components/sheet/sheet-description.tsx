"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { cn } from "tailwind-variants";

const SheetDescription = ({
  className,
  ...props
}: SheetPrimitive.Description.Props) => (
  <SheetPrimitive.Description
    className={cn("text-muted-foreground text-sm", className)}
    data-slot="sheet-description"
    {...props}
  />
);

export { SheetDescription };
