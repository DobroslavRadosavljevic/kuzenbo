import type { ComponentProps } from "react";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { cn } from "tailwind-variants";

const NavigationMenuList = ({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.List>) => (
  <NavigationMenuPrimitive.List
    className={cn(
      "group flex flex-1 list-none items-center justify-center gap-0",
      className
    )}
    data-slot="navigation-menu-list"
    {...props}
  />
);

export { NavigationMenuList };
