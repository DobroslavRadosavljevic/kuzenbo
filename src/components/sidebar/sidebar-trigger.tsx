"use client";

import { SidebarLeftIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useCallback, type ComponentProps } from "react";
import { cn } from "tailwind-variants";

import { Button } from "@/components/button/button";

import { useSidebar } from "./use-sidebar";

const SidebarTrigger = ({
  className,
  onClick,
  ...props
}: ComponentProps<typeof Button>) => {
  const { toggleSidebar } = useSidebar();

  const handleClick = useCallback(
    (
      event: Parameters<
        NonNullable<ComponentProps<typeof Button>["onClick"]>
      >[0]
    ) => {
      onClick?.(event);
      toggleSidebar();
    },
    [onClick, toggleSidebar]
  );

  return (
    <Button
      className={cn(className)}
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      onClick={handleClick}
      size="icon-sm"
      variant="ghost"
      {...props}
    >
      <HugeiconsIcon icon={SidebarLeftIcon} strokeWidth={2} />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};

export { SidebarTrigger };
