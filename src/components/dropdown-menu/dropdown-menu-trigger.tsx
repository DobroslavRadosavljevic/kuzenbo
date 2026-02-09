import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { cn } from "tailwind-variants";

const DropdownMenuTrigger = ({
  className,
  ...props
}: MenuPrimitive.Trigger.Props) => (
  <MenuPrimitive.Trigger
    className={cn("cursor-pointer", className)}
    data-slot="dropdown-menu-trigger"
    {...props}
  />
);

export { DropdownMenuTrigger };
