import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

export type DrawerFooterProps = ComponentProps<"div">;

const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    data-slot="drawer-footer"
    {...props}
  />
);

export { DrawerFooter };
