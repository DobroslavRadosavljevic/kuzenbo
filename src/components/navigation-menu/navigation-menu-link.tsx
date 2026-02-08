import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { cn } from "tailwind-variants";

const NavigationMenuLink = ({
  className,
  ...props
}: NavigationMenuPrimitive.Link.Props) => (
  <NavigationMenuPrimitive.Link
    className={cn(
      "flex flex-col gap-2 in-data-[slot=navigation-menu-content]:rounded-md rounded-lg p-2 text-sm outline-none transition-all hover:bg-muted focus:bg-muted focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 data-active:bg-muted/50 data-active:focus:bg-muted data-active:hover:bg-muted [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    data-slot="navigation-menu-link"
    {...props}
  />
);

export { NavigationMenuLink };
