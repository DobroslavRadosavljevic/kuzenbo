import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { cn } from "tailwind-variants";

import {
  kbOverlaySurfaceStateClasses,
  kbOverlayTransitionSlowClasses,
} from "@/lib/motion";

const NavigationMenuContent = ({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) => (
  <NavigationMenuPrimitive.Content
    className={cn(
      "h-full w-auto p-1 **:data-[slot=navigation-menu-link]:focus:outline-none **:data-[slot=navigation-menu-link]:focus:ring-0 group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:ring-foreground/10",
      kbOverlayTransitionSlowClasses,
      kbOverlaySurfaceStateClasses,
      className
    )}
    data-slot="navigation-menu-content"
    {...props}
  />
);

export { NavigationMenuContent };
