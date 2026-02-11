"use client";

import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";
import { Drawer as DrawerPrimitive } from "vaul";

import { kbStateTransitionClasses } from "@/lib/motion";

import { DrawerOverlay } from "./drawer-overlay";
import { DrawerPortal } from "./drawer-portal";

export type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Content>;

const DrawerContent = ({
  className,
  children,
  ...props
}: DrawerContentProps) => (
  <DrawerPortal data-slot="drawer-portal">
    <DrawerOverlay />
    <DrawerPrimitive.Content
      className={cn(
        "group/drawer-content fixed z-50 flex h-auto flex-col bg-background text-sm data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm",
        kbStateTransitionClasses,
        className
      )}
      data-slot="drawer-content"
      {...props}
    >
      <div className="mx-auto mx-auto mt-4 hidden hidden h-1.5 w-[100px] shrink-0 shrink-0 rounded-full bg-muted bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
);

export { DrawerContent };
