"use client";

import type { ComponentProps } from "react";

import { Drawer as DrawerPrimitive } from "vaul";

import { DrawerClose } from "./drawer-close";
import { DrawerContent } from "./drawer-content";
import { DrawerDescription } from "./drawer-description";
import { DrawerFooter } from "./drawer-footer";
import { DrawerHeader } from "./drawer-header";
import { DrawerOverlay } from "./drawer-overlay";
import { DrawerPortal } from "./drawer-portal";
import { DrawerTitle } from "./drawer-title";
import { DrawerTrigger } from "./drawer-trigger";

export type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root> & {
  onOpenChange: (open: boolean) => void;
};

const Drawer = ({ children, ...props }: DrawerProps) => (
  <DrawerPrimitive.Root data-slot="drawer" {...props}>
    {children}
  </DrawerPrimitive.Root>
);

Drawer.Close = DrawerClose;
Drawer.Content = DrawerContent;
Drawer.Description = DrawerDescription;
Drawer.Footer = DrawerFooter;
Drawer.Header = DrawerHeader;
Drawer.Overlay = DrawerOverlay;
Drawer.Portal = DrawerPortal;
Drawer.Title = DrawerTitle;
Drawer.Trigger = DrawerTrigger;

export type { DrawerCloseProps } from "./drawer-close";
export type { DrawerContentProps } from "./drawer-content";
export type { DrawerDescriptionProps } from "./drawer-description";
export type { DrawerFooterProps } from "./drawer-footer";
export type { DrawerHeaderProps } from "./drawer-header";
export type { DrawerOverlayProps } from "./drawer-overlay";
export type { DrawerPortalProps } from "./drawer-portal";
export type { DrawerTitleProps } from "./drawer-title";
export type { DrawerTriggerProps } from "./drawer-trigger";

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
