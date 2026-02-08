import type { ComponentProps } from "react";

import { DropdownMenuPortal } from "@/components/dropdown-menu/dropdown-menu";

const MenubarPortal = ({
  ...props
}: ComponentProps<typeof DropdownMenuPortal>) => (
  <DropdownMenuPortal data-slot="menubar-portal" {...props} />
);

export { MenubarPortal };
