import type { ComponentProps } from "react";

import { DropdownMenu } from "@/components/dropdown-menu/dropdown-menu";

const MenubarMenu = ({ ...props }: ComponentProps<typeof DropdownMenu>) => (
  <DropdownMenu data-slot="menubar-menu" {...props} />
);

export { MenubarMenu };
