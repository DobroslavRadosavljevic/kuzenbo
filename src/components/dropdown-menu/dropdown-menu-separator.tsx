import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { cn } from "tailwind-variants";

const DropdownMenuSeparator = ({
  className,
  ...props
}: MenuPrimitive.Separator.Props) => (
  <MenuPrimitive.Separator
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    data-slot="dropdown-menu-separator"
    {...props}
  />
);

export { DropdownMenuSeparator };
