"use client";

import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";
import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerOverlayProps = ComponentProps<typeof DrawerPrimitive.Overlay>;

const DrawerOverlay = ({ className, ...props }: DrawerOverlayProps) => (
  <DrawerPrimitive.Overlay
    className={cn(
      "data-closed:fade-out-0 data-open:fade-in-0 fixed inset-0 z-50 bg-black/10 data-closed:animate-out data-open:animate-in supports-backdrop-filter:backdrop-blur-xs",
      className
    )}
    data-slot="drawer-overlay"
    {...props}
  />
);

export { DrawerOverlay };
