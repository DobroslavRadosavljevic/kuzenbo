import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const SidebarInset = ({ className, ...props }: ComponentProps<"main">) => (
  <main
    className={cn(
      "relative flex w-full min-w-0 flex-1 flex-col bg-background md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
      className
    )}
    data-slot="sidebar-inset"
    {...props}
  />
);

export { SidebarInset };
