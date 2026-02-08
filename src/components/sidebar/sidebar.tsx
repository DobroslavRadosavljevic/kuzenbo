import type { ComponentProps, CSSProperties } from "react";

import { cn } from "tailwind-variants";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/sheet/sheet";

import { SIDEBAR_WIDTH_MOBILE } from "./constants";
import { useSidebar } from "./use-sidebar";

const Sidebar = ({
  side = "left",
  variant = "sidebar",
  collapsible = "offExamples",
  className,
  children,
  ...props
}: ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offExamples" | "icon" | "none";
}) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={cn(
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
          className
        )}
        data-slot="sidebar"
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet onOpenChange={setOpenMobile} open={openMobile} {...props}>
        <SheetContent
          className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          data-mobile="true"
          data-sidebar="sidebar"
          data-slot="sidebar"
          side={side}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as CSSProperties
          }
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="group peer hidden text-sidebar-foreground md:block"
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-side={side}
      data-slot="sidebar"
      data-state={state}
      data-variant={variant}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offExamples]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
        data-slot="sidebar-gap"
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offExamples]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offExamples]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        data-slot="sidebar-container"
        {...props}
      >
        <div
          className="flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border"
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export { SidebarContent } from "./sidebar-content";
export { SidebarFooter } from "./sidebar-footer";
export { SidebarGroup } from "./sidebar-group";
export { SidebarGroupAction } from "./sidebar-group-action";
export { SidebarGroupContent } from "./sidebar-group-content";
export { SidebarGroupLabel } from "./sidebar-group-label";
export { SidebarHeader } from "./sidebar-header";
export { SidebarInput } from "./sidebar-input";
export { SidebarInset } from "./sidebar-inset";
export { SidebarMenu } from "./sidebar-menu";
export { SidebarMenuAction } from "./sidebar-menu-action";
export { SidebarMenuBadge } from "./sidebar-menu-badge";
export { SidebarMenuButton } from "./sidebar-menu-button";
export { SidebarMenuItem } from "./sidebar-menu-item";
export { SidebarMenuSkeleton } from "./sidebar-menu-skeleton";
export { SidebarMenuSub } from "./sidebar-menu-sub";
export { SidebarMenuSubButton } from "./sidebar-menu-sub-button";
export { SidebarMenuSubItem } from "./sidebar-menu-sub-item";
export { SidebarProvider } from "./sidebar-provider";
export { SidebarRail } from "./sidebar-rail";
export { SidebarSeparator } from "./sidebar-separator";
export { SidebarTrigger } from "./sidebar-trigger";
export { useSidebar } from "./use-sidebar";
export { Sidebar };
