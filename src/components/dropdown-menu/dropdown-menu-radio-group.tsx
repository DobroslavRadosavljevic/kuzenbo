import { Menu as MenuPrimitive } from "@base-ui/react/menu";

const DropdownMenuRadioGroup = ({
  ...props
}: MenuPrimitive.RadioGroup.Props) => (
  <MenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
);

export { DropdownMenuRadioGroup };
