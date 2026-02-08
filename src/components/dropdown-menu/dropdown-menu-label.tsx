import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { cn } from "tailwind-variants";

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean;
}) => (
  <MenuPrimitive.GroupLabel
    className={cn(
      "px-1.5 py-1 font-medium text-muted-foreground text-xs data-[inset]:pl-8",
      className
    )}
    data-inset={inset}
    data-slot="dropdown-menu-label"
    {...props}
  />
);

export { DropdownMenuLabel };
