import { Menu as MenuPrimitive } from "@base-ui/react/menu";

const DropdownMenuGroup = ({ ...props }: MenuPrimitive.Group.Props) => (
  <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
);

export { DropdownMenuGroup };
