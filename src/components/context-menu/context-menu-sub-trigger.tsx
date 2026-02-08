import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { ArrowRight01Icon } from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

const ContextMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: ContextMenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean;
}) => (
  <ContextMenuPrimitive.SubmenuTrigger
    className={cn(
      "flex cursor-clickable select-none items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:cursor-not-allowed data-open:bg-accent data-[inset]:pl-8 data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    data-inset={inset}
    data-slot="context-menu-sub-trigger"
    {...props}
  >
    {children}
    <HugeiconsIcon
      className="ml-auto"
      icon={ArrowRight01Icon}
      strokeWidth={2}
    />
  </ContextMenuPrimitive.SubmenuTrigger>
);

export { ContextMenuSubTrigger };
