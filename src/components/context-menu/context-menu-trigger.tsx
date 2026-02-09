import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { cn } from "tailwind-variants";

const ContextMenuTrigger = ({
  className,
  ...props
}: ContextMenuPrimitive.Trigger.Props) => (
  <ContextMenuPrimitive.Trigger
    className={cn("cursor-pointer select-none", className)}
    data-slot="context-menu-trigger"
    {...props}
  />
);

export { ContextMenuTrigger };
