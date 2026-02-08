import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { cn } from "tailwind-variants";

const ContextMenuLabel = ({
  className,
  inset,
  ...props
}: ContextMenuPrimitive.GroupLabel.Props & {
  inset?: boolean;
}) => (
  <ContextMenuPrimitive.GroupLabel
    className={cn(
      "px-1.5 py-1 font-medium text-muted-foreground text-xs data-[inset]:pl-8",
      className
    )}
    data-inset={inset}
    data-slot="context-menu-label"
    {...props}
  />
);

export { ContextMenuLabel };
