"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "tailwind-variants";

const Tabs = ({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) => (
  <TabsPrimitive.Root
    className={cn(
      "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
      className
    )}
    data-orientation={orientation}
    data-slot="tabs"
    {...props}
  />
);

export { TabsContent } from "./tabs-content";
export { TabsList } from "./tabs-list";
export { TabsTrigger } from "./tabs-trigger";
export { Tabs };
