import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

export type DrawerHeaderProps = ComponentProps<"div">;

const DrawerHeader = ({ className, ...props }: DrawerHeaderProps) => (
  <div
    className={cn(
      "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
      className
    )}
    data-slot="drawer-header"
    {...props}
  />
);

export { DrawerHeader };
