"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn } from "tailwind-variants";

import { TabsContent } from "./tabs-content";
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
    data-orientation={orientation}
    data-slot="tabs"
    {...props}
  />
);

Tabs.Content = TabsContent;
Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;

export { Tabs, TabsContent, TabsList, TabsTrigger };
