"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "tailwind-variants";

const TabsContent = ({ className, ...props }: TabsPrimitive.Panel.Props) => (
  <TabsPrimitive.Panel
    className={cn("flex-1 text-sm outline-none", className)}
    data-slot="tabs-content"
    {...props}
  />
);

export { TabsContent };
