import type { ComponentProps } from "react";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { cn } from "tailwind-variants";

const NavigationMenuItem = ({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.Item>) => (
  <NavigationMenuPrimitive.Item
    className={cn("relative", className)}
    data-slot="navigation-menu-item"
    {...props}
  />
);

export { NavigationMenuItem };
