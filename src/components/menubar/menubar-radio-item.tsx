import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

const MenubarRadioItem = ({
  className,
  children,
  ...props
}: MenuPrimitive.RadioItem.Props) => (
  <MenuPrimitive.RadioItem
    className={cn(
      "relative flex cursor-clickable select-none items-center gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    data-slot="menubar-radio-item"
    {...props}
  >
    <span className="pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
      <MenuPrimitive.RadioItemIndicator>
        <HugeiconsIcon icon={Tick02Icon} strokeWidth={2} />
      </MenuPrimitive.RadioItemIndicator>
    </span>
    {children}
  </MenuPrimitive.RadioItem>
);

export { MenubarRadioItem };
