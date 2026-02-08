"use client";

import type { CSSProperties } from "react";
import type { VariantProps } from "tailwind-variants";

import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import { cn } from "tailwind-variants";

import type { toggleVariants } from "@/components/toggle/toggle";

import { ToggleGroupContext } from "./toggle-group-context";

const ToggleGroup = ({
  className,
  variant,
  size,
  spacing = 0,
  orientation = "horizontal",
  children,
  ...props
}: ToggleGroupPrimitive.Props &
  VariantProps<typeof toggleVariants> & {
    spacing?: number;
    orientation?: "horizontal" | "vertical";
  }) => (
  <ToggleGroupPrimitive
    className={cn(
      "group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=0]:data-[variant=outline]:shadow-xs data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
      className
    )}
    data-orientation={orientation}
    data-size={size}
    data-slot="toggle-group"
    data-spacing={spacing}
    data-variant={variant}
    style={{ "--gap": spacing } as CSSProperties}
    {...props}
  >
    <ToggleGroupContext.Provider
      value={{ variant, size, spacing, orientation }}
    >
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive>
);

export { ToggleGroupContext } from "./toggle-group-context";
export { ToggleGroupItem } from "./toggle-group-item";
export { ToggleGroup };
