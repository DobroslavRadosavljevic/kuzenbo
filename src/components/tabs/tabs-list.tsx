"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn, tv, type VariantProps } from "tailwind-variants";

const tabsListVariants = tv({
  base: "group/tabs-list inline-flex w-fit items-center justify-center rounded-md p-1 text-muted-foreground data-[variant=line]:rounded-none group-data-[orientation=vertical]/tabs:h-fit group-data-horizontal/tabs:h-8 group-data-[orientation=vertical]/tabs:flex-col",
  variants: {
    variant: {
      default: "bg-muted",
      line: "gap-1 bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const TabsList = ({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) => (
  <TabsPrimitive.List
    className={cn(tabsListVariants({ variant }), className)}
    data-slot="tabs-list"
    data-variant={variant}
    {...props}
  />
);

export { TabsList, tabsListVariants };
