import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { cn } from "tailwind-variants";

import { NavigationMenuPositioner } from "./navigation-menu-positioner";

const NavigationMenu = ({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Root.Props) => (
  <NavigationMenuPrimitive.Root
    className={cn(
      "group/navigation-menu relative flex max-w-max max-w-max flex-1 items-center justify-center",
      className
    )}
    data-slot="navigation-menu"
    {...props}
  >
    {children}
    <NavigationMenuPositioner />
  </NavigationMenuPrimitive.Root>
);

export { NavigationMenuContent } from "./navigation-menu-content";
export { NavigationMenuIndicator } from "./navigation-menu-indicator";
export { NavigationMenuItem } from "./navigation-menu-item";
export { NavigationMenuLink } from "./navigation-menu-link";
export { NavigationMenuList } from "./navigation-menu-list";
export { NavigationMenuPositioner } from "./navigation-menu-positioner";
export { NavigationMenuTrigger } from "./navigation-menu-trigger";
export { NavigationMenu };
