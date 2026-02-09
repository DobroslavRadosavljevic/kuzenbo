import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn, tv } from "tailwind-variants";

const navigationMenuTriggerStyle = tv({
  base: "group/navigation-menu-trigger inline-flex h-9 w-max cursor-clickable items-center justify-center rounded-lg bg-background px-2.5 py-1.5 font-medium text-sm outline-none transition-all hover:bg-muted focus:bg-muted focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-open:bg-muted/50 data-popup-open:bg-muted/50 data-open:focus:bg-muted data-open:hover:bg-muted data-popup-open:hover:bg-muted",
});

const NavigationMenuTrigger = ({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) => (
  <NavigationMenuPrimitive.Trigger
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    data-slot="navigation-menu-trigger"
    {...props}
  >
    {children}{" "}
    <HugeiconsIcon
      aria-hidden="true"
      className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-open/navigation-menu-trigger:rotate-180 group-data-popup-open/navigation-menu-trigger:rotate-180"
      icon={ArrowDown01Icon}
      strokeWidth={2}
    />
  </NavigationMenuPrimitive.Trigger>
);

export { NavigationMenuTrigger, navigationMenuTriggerStyle };
