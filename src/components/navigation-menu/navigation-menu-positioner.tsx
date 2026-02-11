import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { cn } from "tailwind-variants";

import {
  kbOverlayPositionerTransitionClasses,
  kbOverlaySurfaceStateClasses,
  kbOverlayTransitionSlowClasses,
} from "@/lib/motion";

const NavigationMenuPositioner = ({
  className,
  side = "bottom",
  sideOffset = 8,
  align = "start",
  alignOffset = 0,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) => (
  <NavigationMenuPrimitive.Portal>
    <NavigationMenuPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      className={cn(
        "isolate z-50 h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0",
        kbOverlayPositionerTransitionClasses,
        className
      )}
      data-slot="navigation-menu-positioner"
      side={side}
      sideOffset={sideOffset}
      {...props}
    >
      <NavigationMenuPrimitive.Popup
        className={cn(
          "relative h-(--popup-height) w-(--popup-width) xs:w-(--popup-width) origin-(--transform-origin) rounded-lg bg-popover text-popover-foreground shadow outline-none ring-1 ring-foreground/10",
          kbOverlaySurfaceStateClasses,
          kbOverlayTransitionSlowClasses
        )}
      >
        <NavigationMenuPrimitive.Viewport className="relative size-full overflow-hidden" />
      </NavigationMenuPrimitive.Popup>
    </NavigationMenuPrimitive.Positioner>
  </NavigationMenuPrimitive.Portal>
);

export { NavigationMenuPositioner };
