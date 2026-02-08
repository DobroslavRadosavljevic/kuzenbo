import type { ComponentProps } from "react";

import { DropdownMenuGroup } from "@/components/dropdown-menu/dropdown-menu";

const MenubarGroup = ({
  ...props
}: ComponentProps<typeof DropdownMenuGroup>) => (
  <DropdownMenuGroup data-slot="menubar-group" {...props} />
);

export { MenubarGroup };
