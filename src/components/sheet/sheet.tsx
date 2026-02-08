"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";

import { SheetClose } from "./sheet-close";
import { SheetContent } from "./sheet-content";
import { SheetDescription } from "./sheet-description";
import { SheetFooter } from "./sheet-footer";
import { SheetHeader } from "./sheet-header";
import { SheetOverlay } from "./sheet-overlay";
import { SheetPortal } from "./sheet-portal";
import { SheetTitle } from "./sheet-title";
import { SheetTrigger } from "./sheet-trigger";

const Sheet = ({ ...props }: SheetPrimitive.Root.Props) => (
  <SheetPrimitive.Root data-slot="sheet" {...props} />
);

Sheet.Close = SheetClose;
Sheet.Content = SheetContent;
Sheet.Description = SheetDescription;
Sheet.Footer = SheetFooter;
Sheet.Header = SheetHeader;
Sheet.Overlay = SheetOverlay;
Sheet.Portal = SheetPortal;
Sheet.Title = SheetTitle;
Sheet.Trigger = SheetTrigger;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
