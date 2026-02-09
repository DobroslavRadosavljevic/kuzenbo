import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

const ContextMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: ContextMenuPrimitive.CheckboxItem.Props) => (
  <ContextMenuPrimitive.CheckboxItem
    checked={checked}
    className={cn(
      "relative flex cursor-clickable select-none items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    data-slot="context-menu-checkbox-item"
    {...props}
  >
    <span className="pointer-events-none absolute right-2">
      <ContextMenuPrimitive.CheckboxItemIndicator>
        <HugeiconsIcon icon={Tick02Icon} strokeWidth={2} />
      </ContextMenuPrimitive.CheckboxItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
);

export { ContextMenuCheckboxItem };
