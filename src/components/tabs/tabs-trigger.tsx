"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "tailwind-variants";

const TabsTrigger = ({ className, ...props }: TabsPrimitive.Tab.Props) => (
  <TabsPrimitive.Tab
    className={cn(
      "relative inline-flex cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap break-keep border-0 px-2 font-medium text-sm outline-none select-none transition-colors disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      "text-muted-foreground hover:text-foreground data-active:text-foreground focus-visible:outline-hidden",
      "group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start",
      "group-data-[variant=default]/tabs-list:h-[calc(100%-2px)] group-data-[variant=default]/tabs-list:flex-1 group-data-[variant=default]/tabs-list:rounded-md group-data-[variant=default]/tabs-list:border group-data-[variant=default]/tabs-list:border-transparent group-data-[variant=default]/tabs-list:data-active:bg-background group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=default]/tabs-list:focus-visible:border-ring group-data-[variant=default]/tabs-list:focus-visible:ring-[3px] group-data-[variant=default]/tabs-list:focus-visible:ring-ring/50",
      "group-data-[variant=line]/tabs-list:h-8 group-data-[variant=line]/tabs-list:before:inset-x-0 group-data-[variant=line]/tabs-list:before:inset-y-1 group-data-[variant=line]/tabs-list:before:rounded-sm group-data-[variant=line]/tabs-list:before:-outline-offset-1 group-data-[variant=line]/tabs-list:before:outline group-data-[variant=line]/tabs-list:before:outline-2 group-data-[variant=line]/tabs-list:before:outline-transparent group-data-[variant=line]/tabs-list:focus-visible:relative group-data-[variant=line]/tabs-list:focus-visible:before:absolute group-data-[variant=line]/tabs-list:focus-visible:before:outline-ring",
      className
    )}
    data-slot="tabs-trigger"
    {...props}
  />
);

export { TabsTrigger };
