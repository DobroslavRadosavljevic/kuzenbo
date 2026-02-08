"use client";

import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";
import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerDescriptionProps = ComponentProps<
  typeof DrawerPrimitive.Description
>;

const DrawerDescription = ({ className, ...props }: DrawerDescriptionProps) => (
  <DrawerPrimitive.Description
    className={cn("text-muted-foreground text-sm", className)}
    data-slot="drawer-description"
    {...props}
  />
);

export { DrawerDescription };
