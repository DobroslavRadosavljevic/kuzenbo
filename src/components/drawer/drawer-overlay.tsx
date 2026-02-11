"use client";

import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";
import { Drawer as DrawerPrimitive } from "vaul";

import {
  kbOverlayBackdropStateClasses,
  kbOverlayTransitionClasses,
} from "@/lib/motion";

export type DrawerOverlayProps = ComponentProps<typeof DrawerPrimitive.Overlay>;

const DrawerOverlay = ({ className, ...props }: DrawerOverlayProps) => (
  <DrawerPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs",
      kbOverlayTransitionClasses,
      kbOverlayBackdropStateClasses,
      className
    )}
    data-slot="drawer-overlay"
    {...props}
  />
);

export { DrawerOverlay };
