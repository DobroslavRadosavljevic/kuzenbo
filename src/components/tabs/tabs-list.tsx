"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cn, tv, type VariantProps } from "tailwind-variants";

const tabsListVariants = tv({
  base: "group/tabs-list relative z-0 inline-flex w-fit items-center justify-center text-muted-foreground group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=horizontal]/tabs:h-8 group-data-[orientation=vertical]/tabs:flex-col",
  variants: {
    variant: {
      default:
        "rounded-md bg-muted p-1 group-data-[orientation=vertical]/tabs:flex-col",
      line: "flex gap-1 rounded-none bg-transparent px-1 shadow-[inset_0_-1px] shadow-border",
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
