"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "tailwind-variants";

const TabsContent = ({ className, ...props }: TabsPrimitive.Panel.Props) => (
  <TabsPrimitive.Panel
    className={cn(
      "flex-1 text-sm outline-none focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[-1px]",
      className
    )}
    data-slot="tabs-content"
    {...props}
  />
);

export { TabsContent };
