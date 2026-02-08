"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

export interface DialogProps extends DialogPrimitive.Root.Props {
  onOpenChange?: (open: boolean) => void;
}

const Dialog = ({ ...props }: DialogProps) => (
  <DialogPrimitive.Root data-slot="dialog" {...props} />
);

export { Dialog };
export type { DialogCloseProps } from "./dialog-close";
export { DialogClose } from "./dialog-close";
export type { DialogContentProps } from "./dialog-content";
export { DialogContent } from "./dialog-content";
export type { DialogDescriptionProps } from "./dialog-description";
export { DialogDescription } from "./dialog-description";
export type { DialogFooterProps } from "./dialog-footer";
export { DialogFooter } from "./dialog-footer";
export type { DialogHeaderProps } from "./dialog-header";
export { DialogHeader } from "./dialog-header";
export type { DialogOverlayProps } from "./dialog-overlay";
export { DialogOverlay } from "./dialog-overlay";
export type { DialogPortalProps } from "./dialog-portal";
export { DialogPortal } from "./dialog-portal";
export type { DialogTitleProps } from "./dialog-title";
export { DialogTitle } from "./dialog-title";
export type { DialogTriggerProps } from "./dialog-trigger";
export { DialogTrigger } from "./dialog-trigger";
