import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { cn } from "tailwind-variants";

const DropdownMenuItem = ({
  className,
  inset,
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean;
  variant?: "default" | "danger";
}) => (
  <MenuPrimitive.Item
    className={cn(
      "group/dropdown-menu-item relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground not-data-[variant=danger]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-[inset]:pl-8 data-[variant=danger]:text-danger data-disabled:opacity-50 data-[variant=danger]:focus:bg-danger/10 data-[variant=danger]:focus:text-danger dark:data-[variant=danger]:focus:bg-danger/20 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 data-[variant=danger]:*:[svg]:text-danger",
      className
    )}
    data-inset={inset}
    data-slot="dropdown-menu-item"
    data-variant={variant}
    {...props}
  />
);

export { DropdownMenuItem };
