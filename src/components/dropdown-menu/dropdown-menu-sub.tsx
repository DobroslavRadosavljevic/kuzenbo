import { Menu as MenuPrimitive } from "@base-ui/react/menu";

const DropdownMenuSub = ({ ...props }: MenuPrimitive.SubmenuRoot.Props) => (
  <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
);

export { DropdownMenuSub };
