"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

const Sheet = ({ ...props }: SheetPrimitive.Root.Props) => (
  <SheetPrimitive.Root data-slot="sheet" {...props} />
);

export { Sheet };
export { SheetClose } from "./sheet-close";
export { SheetContent } from "./sheet-content";
export { SheetDescription } from "./sheet-description";
export { SheetFooter } from "./sheet-footer";
export { SheetHeader } from "./sheet-header";
export { SheetOverlay } from "./sheet-overlay";
export { SheetPortal } from "./sheet-portal";
export { SheetTitle } from "./sheet-title";
export { SheetTrigger } from "./sheet-trigger";
