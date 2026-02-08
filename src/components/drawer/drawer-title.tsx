"use client";

import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";
import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>;

const DrawerTitle = ({ className, ...props }: DrawerTitleProps) => (
  <DrawerPrimitive.Title
    className={cn("font-medium text-base text-foreground", className)}
    data-slot="drawer-title"
    {...props}
  />
);

export { DrawerTitle };
