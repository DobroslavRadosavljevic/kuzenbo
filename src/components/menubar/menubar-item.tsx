import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { DropdownMenuItem } from "@/components/dropdown-menu/dropdown-menu";

const MenubarItem = ({
  className,
  inset,
  variant = "default",
  ...props
}: ComponentProps<typeof DropdownMenuItem>) => (
  <DropdownMenuItem
    className={cn(
      "data-[variant=destructive]:*:[svg]:!text-destructive group/menubar-item gap-1.5 rounded-md px-1.5 py-1 text-sm focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    data-inset={inset}
    data-slot="menubar-item"
    data-variant={variant}
    {...props}
  />
);

export { MenubarItem };
