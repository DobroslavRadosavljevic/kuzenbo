"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "tailwind-variants";

import { TabsContent } from "./tabs-content";
import { TabsIndicator } from "./tabs-indicator";
import { TabsList } from "./tabs-list";
import { TabsTrigger } from "./tabs-trigger";

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
    data-slot="tabs"
    orientation={orientation}
    {...props}
  />
);

Tabs.Content = TabsContent;
Tabs.Indicator = TabsIndicator;
Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;

export { Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger };
