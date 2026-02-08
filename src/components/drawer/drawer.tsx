"use client";

import type { ComponentProps } from "react";

import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root> & {
  onOpenChange: (open: boolean) => void;
};

const Drawer = ({ children, ...props }: DrawerProps) => (
  <DrawerPrimitive.Root data-slot="drawer" {...props}>
    {children}
  </DrawerPrimitive.Root>
);

export { Drawer };
export type { DrawerCloseProps } from "./drawer-close";
export { DrawerClose } from "./drawer-close";
export type { DrawerContentProps } from "./drawer-content";
export { DrawerContent } from "./drawer-content";
export type { DrawerDescriptionProps } from "./drawer-description";
export { DrawerDescription } from "./drawer-description";
export type { DrawerFooterProps } from "./drawer-footer";
export { DrawerFooter } from "./drawer-footer";
export type { DrawerHeaderProps } from "./drawer-header";
export { DrawerHeader } from "./drawer-header";
export type { DrawerOverlayProps } from "./drawer-overlay";
export { DrawerOverlay } from "./drawer-overlay";
export type { DrawerPortalProps } from "./drawer-portal";
export { DrawerPortal } from "./drawer-portal";
export type { DrawerTitleProps } from "./drawer-title";
export { DrawerTitle } from "./drawer-title";
export type { DrawerTriggerProps } from "./drawer-trigger";
export { DrawerTrigger } from "./drawer-trigger";
