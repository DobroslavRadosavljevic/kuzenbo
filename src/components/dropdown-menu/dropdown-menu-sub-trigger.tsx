import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean;
}) => (
  <MenuPrimitive.SubmenuTrigger
    className={cn(
      "flex cursor-pointer select-none items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground not-data-[variant=danger]:focus:**:text-accent-foreground data-disabled:cursor-not-allowed data-open:bg-accent data-[inset]:pl-8 data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    data-inset={inset}
    data-slot="dropdown-menu-sub-trigger"
    {...props}
  >
    {children}
    <HugeiconsIcon
      className="ml-auto"
      icon={ArrowRight01Icon}
      strokeWidth={2}
    />
  </MenuPrimitive.SubmenuTrigger>
);

export { DropdownMenuSubTrigger };
