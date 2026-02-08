"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

const SheetPortal = ({ ...props }: SheetPrimitive.Portal.Props) => (
  <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
);

export { SheetPortal };
