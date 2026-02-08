import { Menu as MenuPrimitive } from "@base-ui/react/menu";

const DropdownMenuPortal = ({ ...props }: MenuPrimitive.Portal.Props) => (
  <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
);

export { DropdownMenuPortal };
