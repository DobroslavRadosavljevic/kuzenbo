import type { ComponentProps } from "react";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { cn } from "tailwind-variants";

const NavigationMenuIndicator = ({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.Icon>) => (
  <NavigationMenuPrimitive.Icon
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden transition-opacity [transition-duration:var(--kb-motion-fast)] [transition-timing-function:var(--kb-ease-standard)] data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100",
      className
    )}
    data-slot="navigation-menu-indicator"
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Icon>
);

export { NavigationMenuIndicator };
