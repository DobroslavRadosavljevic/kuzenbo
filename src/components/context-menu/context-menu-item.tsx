import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import { cn } from "tailwind-variants";

const ContextMenuItem = ({
  className,
  inset,
  variant = "default",
  ...props
}: ContextMenuPrimitive.Item.Props & {
  inset?: boolean;
  variant?: "default" | "danger";
}) => (
  <ContextMenuPrimitive.Item
    className={cn(
      "group/context-menu-item relative flex cursor-pointer select-none items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-[inset]:pl-8 data-[variant=danger]:text-danger data-disabled:opacity-50 data-[variant=danger]:focus:bg-danger/10 data-[variant=danger]:focus:text-danger dark:data-[variant=danger]:focus:bg-danger/20 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus:*:[svg]:text-accent-foreground data-[variant=danger]:*:[svg]:text-danger",
      className
    )}
    data-inset={inset}
    data-slot="context-menu-item"
    data-variant={variant}
    {...props}
  />
);

export { ContextMenuItem };
