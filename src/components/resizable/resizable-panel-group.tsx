"use client";

import type { ComponentProps } from "react";

import { Group } from "react-resizable-panels";
import { cn } from "tailwind-variants";

const ResizablePanelGroup = ({
  className,
  ...props
}: ComponentProps<typeof Group>) => (
  <Group
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    data-slot="resizable-panel-group"
    {...props}
  />
);

export { ResizableHandle } from "./resizable-handle";
export { ResizablePanel } from "./resizable-panel";
export { ResizablePanelGroup };
