import type { ComponentProps } from "react";

import { DropdownMenuSub } from "@/components/dropdown-menu/dropdown-menu";

const MenubarSub = ({ ...props }: ComponentProps<typeof DropdownMenuSub>) => (
  <DropdownMenuSub data-slot="menubar-sub" {...props} />
);

export { MenubarSub };
