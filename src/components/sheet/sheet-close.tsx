"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

const SheetClose = ({ ...props }: SheetPrimitive.Close.Props) => (
  <SheetPrimitive.Close data-slot="sheet-close" {...props} />
);

export { SheetClose };
