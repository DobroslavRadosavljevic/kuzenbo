"use client";

import type { ComponentProps } from "react";

import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerCloseProps = ComponentProps<typeof DrawerPrimitive.Close>;

const DrawerClose = ({ ...props }: DrawerCloseProps) => (
  <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
);

export { DrawerClose };
