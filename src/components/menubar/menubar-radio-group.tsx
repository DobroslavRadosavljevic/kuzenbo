import type { ComponentProps } from "react";

import { DropdownMenuRadioGroup } from "@/components/dropdown-menu/dropdown-menu";

const MenubarRadioGroup = ({
  ...props
}: ComponentProps<typeof DropdownMenuRadioGroup>) => (
  <DropdownMenuRadioGroup data-slot="menubar-radio-group" {...props} />
);

export { MenubarRadioGroup };
