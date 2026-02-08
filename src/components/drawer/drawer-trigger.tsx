"use client";

import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";
import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>;

const DrawerTrigger = ({ className, ...props }: DrawerTriggerProps) => (
  <DrawerPrimitive.Trigger
    className={cn("cursor-clickable", className)}
    data-slot="drawer-trigger"
    {...props}
  />
);

export { DrawerTrigger };
