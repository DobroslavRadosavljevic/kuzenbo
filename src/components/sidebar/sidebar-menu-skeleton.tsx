"use client";

import type { ComponentProps, CSSProperties } from "react";

import { useState } from "react";
import { cn } from "tailwind-variants";

import { Skeleton } from "@/components/skeleton/skeleton";

const SidebarMenuSkeleton = ({
  className,
  showIcon = false,
  ...props
}: ComponentProps<"div"> & {
  showIcon?: boolean;
}) => {
  // Random width between 50 to 90%.
  const [width] = useState(() => `${Math.floor(Math.random() * 40) + 50}%`);

  return (
    <div
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      data-sidebar="menu-skeleton"
      data-slot="sidebar-menu-skeleton"
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as CSSProperties
        }
      />
    </div>
  );
};

export { SidebarMenuSkeleton };
