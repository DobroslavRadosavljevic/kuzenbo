"use client";

import type { ComponentProps } from "react";

import { Drawer as DrawerPrimitive } from "vaul";

export type DrawerPortalProps = ComponentProps<typeof DrawerPrimitive.Portal>;

const DrawerPortal = ({ ...props }: DrawerPortalProps) => (
  <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
);

export { DrawerPortal };
