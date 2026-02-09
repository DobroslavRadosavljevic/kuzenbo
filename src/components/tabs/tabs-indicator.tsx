"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "tailwind-variants";

const TabsIndicator = ({
  className,
  ...props
}: TabsPrimitive.Indicator.Props) => (
  <TabsPrimitive.Indicator
    className={cn(
      "absolute z-[-1] rounded-sm bg-muted transition-all duration-200 ease-in-out",
      "data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:h-6 data-[orientation=horizontal]:w-[var(--active-tab-width)] data-[orientation=horizontal]:-translate-y-1/2 data-[orientation=horizontal]:translate-x-[var(--active-tab-left)]",
      "data-[orientation=vertical]:top-0 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:h-[var(--active-tab-height)] data-[orientation=vertical]:w-6 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:translate-y-[var(--active-tab-top)]",
      className
    )}
    data-slot="tabs-indicator"
    renderBeforeHydration
    {...props}
  />
);

export { TabsIndicator };
